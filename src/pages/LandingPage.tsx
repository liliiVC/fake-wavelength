import { useNavigate } from 'react-router-dom'
import { Box, Button, Typography, Stack } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import GroupAddIcon from '@mui/icons-material/GroupAdd'

// Concentric border colors inspired by the Wavelength box art
// [mobile pad, desktop pad]
const borderLayers = [
  { color: '#E85D3A', pad: [28, 44] },  // outer — burnt orange/red
  { color: '#F2A73B', pad: [22, 35] },  // warm orange
  { color: '#F5D6BA', pad: [16, 26] },  // cream / beige
  { color: '#E8808A', pad: [10, 17] },  // pink / salmon
  { color: '#6DC8BE', pad: [5, 8] },    // teal / seafoam (innermost)
]

function LandingPage() {
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
      {/* Layered border logo */}
      <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
        {borderLayers.map((layer, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              inset: { xs: `-${layer.pad[0]}px`, sm: `-${layer.pad[1]}px` },
              border: { xs: `2px solid ${layer.color}`, sm: `3px solid ${layer.color}` },
              borderRadius: `${16 + (borderLayers.length - i) * 6}px`,
              opacity: 1 - i * 0.05,
            }}
          />
        ))}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '1.3rem', sm: '2.4rem', md: '3rem' },
            fontWeight: 900,
            letterSpacing: { xs: '0.1em', sm: '0.18em' },
            color: '#FFFFFF',
            position: 'relative',
            px: { xs: 1.5, sm: 2 },
            py: 0,
            whiteSpace: 'nowrap',
          }}
        >
          FAKE-WAVELENGTH
        </Typography>
      </Box>

      <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
        We have wavelength at home.
      </Typography>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ width: { xs: '100%', sm: 'auto' }, px: { xs: 2, sm: 0 } }}>
        <Button
          variant="contained"
          size="large"
          fullWidth
          startIcon={<AddCircleOutlineIcon />}
          onClick={() => navigate('/host')}
          sx={{
            background: 'linear-gradient(135deg, #E84393, #C0267A)',
            py: { xs: 1.5, sm: 1.75 },
            px: { xs: 3, sm: 5 },
            fontSize: { xs: '0.95rem', sm: '1.1rem' },
            whiteSpace: 'nowrap', 
      minWidth: 'max-content',
            '&:hover': {
              background: 'linear-gradient(135deg, #F368A0, #E84393)',
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(232, 67, 147, 0.4)',
            },
            transition: 'all 0.2s',
          }}
        >
          Host Game
        </Button>

        <Button
          variant="outlined"
          size="large"
          fullWidth
          startIcon={<GroupAddIcon />}
          onClick={() => navigate('/join')}
          sx={{
            borderColor: '#00CEC9',
            color: '#00CEC9',
            borderWidth: 2,
            py: { xs: 1.5, sm: 1.75 },
            px: { xs: 3, sm: 5 },
            fontSize: { xs: '0.95rem', sm: '1.1rem' },
            '&:hover': {
              borderColor: '#55E6E0',
              color: '#55E6E0',
              borderWidth: 2,
              background: 'rgba(0, 206, 201, 0.08)',
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(0, 206, 201, 0.3)',
            },
            transition: 'all 0.2s',
          }}
        >
          Join Game
        </Button>
      </Stack>
    </Box>
  )
}

export default LandingPage
