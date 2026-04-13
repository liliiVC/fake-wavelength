import {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Typography, Button, Stack } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { apiGet } from '../utils/api';

import { useLobbyPlayers } from '../hooks/useLobbyPlayers';


function Lobby() {
  const navigate = useNavigate()
  const { gameCode } = useParams();
  const { players, loading } = useLobbyPlayers(gameCode);

  const [gameInfo, setGameInfo] = useState(null);
  const localUserId = localStorage.getItem('game_user_id');  
  const localPlayerName = localStorage.getItem('game_player_name');

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const roomData = await apiGet('/api/getRoom', { gameCode });
        setGameInfo(roomData);
      } catch (err) {
        console.error("Failed to fetch room:", err.message);
      }
    };

    // 2. Call it
    if (gameCode) {
      fetchRoom();
    }
  }, [gameCode]);

  console.log(gameInfo)

  if (!gameInfo) return <p>Loading...</p>;

  const isHost = gameInfo.host_id === localUserId;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: 3,
        px: 2,
      }}
    >
      <Typography variant="h2" color="secondary">
        Hi {localPlayerName} !
      </Typography>
      <Stack>
        <Typography variant="subtitle1" color="secondary">
          You are a {isHost ? 'HOST' : 'PLAYER'}
        </Typography>
        <Typography variant="subtitle1" color="secondary">
          # of Players: {loading ? '...' : players.length}
        </Typography>
      </Stack>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/')}
        sx={{ color: 'text.secondary' }}
      >
        Back to Home
      </Button>
    </Box>
  )
}

export default Lobby
