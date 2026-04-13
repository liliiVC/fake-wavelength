import { useState } from 'react';
import { apiPost } from '../utils/api';
import { useNavigate } from 'react-router-dom'

export function useJoinGame() {

    const navigate = useNavigate()
  

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
const [gameInfo, setGameInfo] = useState(null);

  const joinGame = async (playerName, roomCode) => {
    setLoading(true);
    setError(null);

    try {
      const userData = await apiPost('/api/createUser', { name: playerName, gameId: roomCode });

      const result = { user: userData, room: null };
      setGameInfo(result);

      localStorage.setItem('game_user_id', userData.id);
      localStorage.setItem('game_player_name', playerName);
      if(roomCode) navigate(`/lobby/${roomCode}`);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { joinGame, loading, error, gameInfo };
}
