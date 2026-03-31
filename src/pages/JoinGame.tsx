import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

function JoinGame() {
  const navigate = useNavigate()

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
