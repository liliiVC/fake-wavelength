import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { useHostGame } from '../hooks/useHostGame'

function HostGame() {
  const navigate = useNavigate()
  const [name, setName] = useState('');

  const { hostGame, loading, error } = useHostGame();

  const onSubmit = async (e) => {
    e.preventDefault();
    await hostGame(name);
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
      <Typography variant="h2" color="primary">
        Host Game
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
          <button 
            type="submit" 
            disabled={loading || !name.trim()}
            style={{ padding: '10px', width: '100%' }}
          >
            {loading ? 'Creating...' : 'Host Game'}
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

export default HostGame
