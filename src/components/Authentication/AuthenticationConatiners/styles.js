import {
  Box, Button, TextField, Link,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../styles/theme';

export const AuthenticationConatiner = styled(Box)(() => ({
  height: 'max-content',
  minHeight: '100vh',
  // width: '100%',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'space-around',
  justifyContent: 'flex-start',

}));

export const AuthenticationBG = styled(Box)(() => ({
  height: '100vh',
  width: '156px',
  backgroundImage: 'url("https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}));

export const AuthenticationBody = styled(Box)(({ mnwidth, mxwidth }) => ({
  width: 'max-content',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '20px',

  '&>*': {
    minWidth: `${mnwidth}`,
    maxWidth: `${mxwidth}`,
  },
}));

export const FirstPartyContainer = styled('form')(({ width, mnwidth }) => ({
  width: (width !== undefined) ? `${width}` : '100%',
  minWidth: (mnwidth !== undefined) ? `${mnwidth}` : null,
  marginTop: '20px',
  marginBottom: '10px',
  display: 'flex',
  flexDirection: 'column',
}));

export const AuthenticationInput = styled(TextField)(() => ({
  width: '100%',
  marginBottom: '10px',
}));

export const AuthenticationButton = styled(Button)(({ width }) => ({
  width: (width !== undefined) ? `${width}` : '100%',
  height: 35,
  margin: '15px 0px',

  fontFamily: 'ibm-plex-sans,sans-serif',
  fontWeight: '600',
  fontSize: '14px',
  letterSpacing: '0.5px',

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

export const StyledLink = styled(Link)(({ capital, fontWeight, fontSize }) => ({

  textTransform: `${capital}`,
  fontWeight: (fontWeight !== undefined) ? `${fontWeight}` : '800',
  textDecoration: 'none',
  fontSize: (fontSize !== undefined) ? `${fontSize}` : '12px',

  '&.MuiLink-root:hover': {
    color: theme.palette.primary.fade,
  },

}));
