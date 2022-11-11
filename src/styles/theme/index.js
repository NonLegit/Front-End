import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0079D3',
      light: '#1484D6',
      dark: '#1484D6',
      fade: '#3394DC',
    },
    secondary: {
      main: '#FF4500',
      light: '#FF5414',
      dark: '#FF5414',
    },
    third: {
      main: '#898989',
      light: '#E8E8E8',
      dark: '#E8E8E8',
    },
    action: {
      hoverOpacity: 0.1,
    },
    neutral: {
      main: '#978A8C',
      contrastText: '#fff',
    },
  },
  breakpoints: {
    values: {
      xxs: 335,
      xs: 420,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
    neutral: {
      main: '#978A8C',
      contrastText: '#fff',
    },
  },
});

export const fonts = {
  'system-ui': 'system-ui',
};
export default theme;
