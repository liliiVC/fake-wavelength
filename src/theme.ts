import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E84393',      // vibrant magenta/pink from the spectrum
      light: '#F368A0',
      dark: '#C0267A',
    },
    secondary: {
      main: '#00CEC9',      // teal/cyan from the cool end of the spectrum
      light: '#55E6E0',
      dark: '#009E9A',
    },
    background: {
      default: '#0D0B2E',   // deep navy/indigo — the game's dark backdrop
      paper: '#16133A',     // slightly lighter card surface
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A8A4CE',
    },
    warning: {
      main: '#FDCB6E',      // warm yellow from the spectrum center
    },
    error: {
      main: '#E17055',      // warm orange-red from the spectrum
    },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", Roboto, sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '0.05em',
      textTransform: 'uppercase' as const,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '0.03em',
    },
    button: {
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase' as const,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '12px 32px',
          fontSize: '1rem',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(180deg, #0D0B2E 0%, #1A1145 50%, #0D0B2E 100%)',
          minHeight: '100vh',
        },
      },
    },
  },
})

export default theme
