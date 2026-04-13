import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { useJoinGame } from '../hooks/useJoinGame'

function JoinGame() {
  const navigate = useNavigate()
    const [name, setName] = useState('');
    const [roomCode, setRoomCode] = useState('');

    const { joinGame, loading, error } = useJoinGame();
  

      const onSubmit = async (e) => {
    e.preventDefault();
    await joinGame(name, roomCode);
  };

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
        Join Game
      </Typography>
      <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
            style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
          />
          <input
            type="text"
            placeholder="Enter room code"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            disabled={loading}
            style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
          />
          <button 
            type="submit" 
            disabled={loading || !name.trim() || !roomCode.trim()}
            style={{ padding: '10px', width: '100%' }}
          >
            {loading ? 'Joining...' : 'Join Game'}
          </button>
        </form>
        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
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

export default JoinGame
