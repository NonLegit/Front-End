import {
  Box, Typography, Button, TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../styles/theme';

export const AuthenticationConatiner = styled(Box)(() => ({
  height: '100vh',
  width: '100vw',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));

export const AuthenticationBG = styled(Box)(() => ({
  height: '100%',
  width: '156px',
  backgroundImage: 'url("https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  [theme.breakpoints.down(400)]: {
    display: 'none',
  },
}));

export const AuthenticationBody = styled(Box)(() => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '20px',
}));

export const AuthenticationTitle = styled(Box)(({ height, width }) => ({
  height: `${height}`,
  width: `${width}`,
  padding: '5px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
}));

export const AuthenticationHeader = styled(Typography)(() => ({
  fontSize: '18px',
  fontWeight: '500',
  lineHeight: '22px',
}));

export const ThirdPartyContainer = styled(Box)(({ width }) => ({
  width: `${width}`,
  marginTop: 20,
}));

export const ThirdPartyButton = styled(Button)(() => ({
  width: '100%',
  height: 50,
  margin: '10px 0px',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  fontWeight: 'bold',

  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: 'white',
  },
}));

export const ButtonIcon = styled('img')(() => ({
  width: 30,
  borderRadius: 4,
}));

export const FirstPartyContainer = styled('form')(({ width }) => ({
  width: `${width}`,
  display: 'flex',
  flexDirection: 'column',
}));

export const AuthenticationInput = styled(TextField)(() => ({
  width: '100%',
  marginBottom: '10px',
}));

export const AuthenticationButton = styled(Button)(() => ({
  width: '100%',
  height: 35,
  margin: '15px 0px',
  fontWeight: '700',
  backgroundColor: theme.palette.primary.main,
  color: 'white',

  '&:hover': {
    backgroundColor: theme.palette.primary.fade,
  },

  '&.MuiButton-root': {
    fontWeight: '600',
    fontSize: '14px',
    letterSpacing: '0.5px',
  },
}));
