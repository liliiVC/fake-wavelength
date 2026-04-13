import { useState } from 'react';
import { apiPost } from '../utils/api';
import { useNavigate } from 'react-router-dom'

export function useHostGame() {

    const navigate = useNavigate()
  

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
const [gameInfo, setGameInfo] = useState(null);

  const hostGame = async (playerName) => {
    setLoading(true);
    setError(null);

    try {
      const userData = await apiPost('/api/createUser', { name: playerName });

      const roomData = await apiPost('/api/createRoom', { hostId: userData.id });

      const result = { user: userData, room: roomData };
      setGameInfo(result);

      localStorage.setItem('game_user_id', userData.id);
      localStorage.setItem('game_player_name', playerName);
      if(roomData.code) navigate(`/lobby/${roomData.code}`);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { hostGame, loading, error, gameInfo };
}
