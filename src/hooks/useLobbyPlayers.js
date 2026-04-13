import { useState, useEffect } from 'react';
import { apiGet } from '../utils/api';
import { supabase } from '../utils/supabaseClient.js';

export function useLobbyPlayers(gameCode) {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    const handleRealtimeUpdate = (payload) => {
    if (payload.eventType === 'INSERT') {
      setPlayers((prev) => [...prev, payload.new]);
    } else if (payload.eventType === 'UPDATE') {
      setPlayers((prev) =>
        prev.map((p) => (p.id === payload.new.id ? payload.new : p))
      );
    } else if (payload.eventType === 'DELETE') {
      setPlayers((prev) => prev.filter((p) => p.id !== payload.old.id));
    }
  };

  useEffect(() => {
    if (!gameCode) return;

const fetchInitialPlayers = async () => {
      try {
        setLoading(true);
        const data = await apiGet('/api/getPlayers', { gameCode });
        setPlayers(data || []);
      } catch (err) {
        console.error("Error fetching players:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialPlayers();

const channel = supabase
      .channel(`lobby-${gameCode}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'users',
          filter: `game_id=eq.${gameCode}`,
        },
        (payload) => {
          console.log('🚨 REALTIME PAYLOAD RECEIVED:', payload);
          handleRealtimeUpdate(payload);
        }
      )
      .subscribe((status) => {
        // 2. IS THE CHANNEL ACTUALLY CONNECTING?
        console.log('🔌 SUBSCRIPTION STATUS:', status);
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [gameCode]);

  return { players, loading, error };
}
