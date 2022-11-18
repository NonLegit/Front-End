import { createTheme } from '@mui/material';

const layoutTheme = (theme) => createTheme({
  ...theme,
  breakpoints: {
    values: {
      xxs: 335,
      xs: 420,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
export default layoutTheme;
