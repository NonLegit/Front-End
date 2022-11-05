import {
  AppBar, Box, Button, styled,
} from '@mui/material';

export const HeaderBox = styled(Box)(() => ({
  minHeight: 40,
  display: 'flex',
  justifyContent: 'center',
}));

export const PageHeader = styled(AppBar)(() => ({
  backgroundColor: 'white',
  color: '#1a1a1b',
  boxShadow: 'none',

}));

export const HeaderButton = styled(Button)(({ theme, condition }) => ({
  fontWeight: 500,
  fontSize: 14,
  fontFamily: "'IBM Plex Sans', 'sans-serif'",
  marginRight: 5,
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
  ...((condition === 'true') && {
    '&:before': {
      content: '" "',
      width: '100%',
      height: 2,
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      bottom: 0,

    },
    color: theme.palette.primary.main,
  }),
}));
