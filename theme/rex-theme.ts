import { createTheme } from '@mui/material/styles';

// ReX theme (placeholder - customize depois com cores reais do Figma)
export const rexTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',  // TODO: Substituir com cor ReX
    },
    secondary: {
      main: '#dc004e',  // TODO: Substituir com cor ReX
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',  // Sem ALL CAPS
        },
      },
    },
  },
});
