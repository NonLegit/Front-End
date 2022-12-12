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
    white: {
      main: '#ffffff',
      light: '#ffffff',
      dark: '#898989',
    },
    offwhite: {
      main: '#DAE0E6',
      dark: '#2E2F30',
    },
  },
});

export const fonts = {
  'system-ui': 'system-ui',
};
export default theme;
