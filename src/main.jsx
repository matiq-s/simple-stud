import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import './index.css'
import App from './App.jsx'

const baseTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3a7d60',
    },
    secondary: {
      main: '#e3a06b',
    },
    background: {
      default: '#f7f7f9',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a',
      secondary: '#4b5563',
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h1: {
      fontFamily: "'Playfair Display', 'Poppins', serif",
      fontWeight: 600,
    },
    h2: {
      fontFamily: "'Playfair Display', 'Poppins', serif",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "'Playfair Display', 'Poppins', serif",
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          paddingInline: '1.4rem',
        },
      },
    },
  },
})

const theme = responsiveFontSizes(baseTheme)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
