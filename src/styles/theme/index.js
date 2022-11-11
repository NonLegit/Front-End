import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0079D3',
      light: '#1484D6',
      fade: '#3394DC',
    },
    secondary: {
      main: '#FF4500',
      light: '#FF5414',
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
