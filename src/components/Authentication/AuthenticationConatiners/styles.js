import {
  Box, Typography, Button, TextField, Link,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../styles/theme';

export const AuthenticationConatiner = styled('div')(() => ({
  height: 'max-content',
  minHeight: '100vh',
  // width: '100%',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'space-around',
  justifyContent: 'flex-start',

}));

export const AuthenticationBG = styled('Box')(() => ({
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
  // backgroundColor: 'pink',

  '&>*': {
    minWidth: `${mnwidth}`,
    maxWidth: `${mxwidth}`,
    // backgroundColor: 'blue',
  },
}));

/// //////////////////////////////////////////////////

export const AuthenticationTitle = styled(Box)(({
  height, width, mnwidth, mxwidth,
}) => ({
  height: `${height}`,
  width: `${width}`,
  minWidth: `${mnwidth}`,
  maxWidth: `${mxwidth}`,
  padding: '5px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
}));

export const AuthenticationHeader = styled(Typography)(() => ({
  fontSize: '18px',
  fontWeight: '505',
  lineHeight: '22px',
  // fontFamily: 'ibm-plex-sans',
  fontFamily: 'ibm-plex-sans,sans-serif',
  // fontWeight: '400',
  fontStyle: 'normal',
}));

/// /////////////////////////////////////////////

export const ThirdPartyContainer = styled(Box)(({ width }) => ({
  width: `${width}`,
  marginTop: 20,
}));

export const ThirdPartyButton = styled(Button)(() => ({
  width: '100%',
  height: 50,
  margin: '10px 0px',
  padding: '0px',

  fontFamily: 'ibm-plex-sans,sans-serif',
  fontWeight: '600',
  fontSize: '14px',
  letterSpacing: '0.5px',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',

  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: 'white',
  },
}));

export const ButtonIcon = styled('img')(() => ({
  width: 30,
  // height: '80%',
  // padding: '2px',
  borderRadius: 4,
  marginLeft: '5px',
  marginRight: '20px',
}));

/// ////////////////////////////////////////
export const FirstPartyContainer = styled('form')(({ width, mnwidth, mxwidth }) => ({
  width: `${width}`,
  minWidth: `${mnwidth}`,
  maxWidth: `${mxwidth}`,
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
  width: `${width}`,
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

/// /////////////////////////////////////////////

export const StyledLink = styled(Link)(({ capital, fontWeight }) => ({

  textTransform: `${capital}`,
  fontWeight: (fontWeight !== undefined) ? `${fontWeight}` : '800',
  textDecoration: 'none',

  '&.MuiLink-root:hover': {
    color: theme.palette.primary.fade,
  },

}));
