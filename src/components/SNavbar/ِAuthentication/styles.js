import {
  Box, Button, TextField, Link,
  InputAdornment,
} from '@mui/material';

import { alpha, styled } from '@mui/material/styles';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import DoneIcon from '@mui/icons-material/Done';
import { LoadingButton } from '@mui/lab';
import theme, { fonts } from '../../../styles/theme/index';

export const AuthenticationConatiner = styled(Box)(() => ({
  height: 'max-content',
  minHeight: '100vh',

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
  padding: '0px 20px',

  '&>*': {
    minWidth: `${mnwidth}`,
    maxWidth: `${mxwidth}`,
  },
}));

export const FirstPartyContainer = styled('form')(({ width, mnwidth }) => ({
  width: (width !== undefined) ? `${width}` : '100%',
  minWidth: (mnwidth !== undefined) ? `${mnwidth}` : null,
  marginTop: '15px',
  marginBottom: '10px',
  display: 'flex',
  flexDirection: 'column',
}));

export const AuthenticationInput = styled(TextField)(({ color }) => ({
  width: '95%',
  marginBottom: '10px',
  '& .MuiInputBase-root': { borderRadius: '2.5em' },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: `${color}`,
    },
    '&:hover fieldset': {
      borderColor: `${color}`,
    },
    '&.Mui-focused fieldset': {
      borderColor: `${color}`,
    },
  },
  '.MuiInputLabel-shrink': {
    color: `${color}`,
  },
}));

export const RedditTextField = styled((props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <TextField {...props} size="small" autoComplete="off" />
))(({ clr }) => ({
  '&.MuiTextField-root': {
    width: '100%',
    marginBottom: '10px',
    // input text
    '.MuiInputBase-input': {
      fontSize: '12px',
      borderRadius: '2em',
    },

    // Helper Text
    '.MuiFormHelperText-root': {
      margin: '2px 0px 0px 0px',
      color: theme.palette.error.main,
      fontSize: '12px',
      fontFamily: fonts['system-ui'],
      fontWeight: '600',
    },
  },

  '& .MuiFilledInput-root': {
    border: `1px solid ${clr}`,
    overflow: 'hidden',
    backgroundColor: theme.palette.mode === 'light' ? '#F5F5F5' : '#2b2b2b',
    // border: '10px solid black',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: clr ? `${alpha(clr, 0.25)} 0 0 0 2px` : 'none',
      borderColor: `${clr}`,
    },
  },

  '.MuiInputLabel-shrink': {
    color: `${theme.palette.neutral.main} !important`,
  },
  '.MuiInputLabel-root': {
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '2em',
    letterSpacing: '0.1em',
  },
}));

export const AuthenticationButton = styled(Button)(({ width }) => ({
  width: (width !== undefined) ? `${width}` : '100%',
  height: 35,
  margin: '15px 0px',

  fontFamily: 'ibm-plex-sans,sans-serif',
  fontWeight: '600',
  fontSize: '14px',
  letterSpacing: '0.5px',

  backgroundColor: theme.palette.secondary.main,

  '&:hover': {
    backgroundColor: '#FF4500 !important',
  },

  '&.MuiButton-root': {
    fontWeight: '600',
    fontSize: '14px',
    letterSpacing: '0.5px',
  },
}));

export const RedditLoadingButton = styled(LoadingButton)(({ width, ispopup }) => ({
  width: (width !== undefined) ? `${width}` : '100%',
  height: 35,
  margin: '10px 0px',
  fontFamily: 'ibm-plex-sans,sans-serif',
  fontWeight: '600',
  fontSize: '14px',
  letterSpacing: '0.5px',

  backgroundColor: ispopup === 'true' ? 'white' : theme.palette.secondary.main,

  '&:hover': {
    backgroundColor: '#FF4500 !important',
  },

  '& .MuiButtonBase-root': {
    fontWeight: '600',
    fontSize: '14px',
    letterSpacing: '0.5px',
  },

  '&>.MuiLoadingButton-loadingIndicator': {
    color: '#fff',
  },
}));

export const StyledLink = styled(Link)(({ capital, fontWeight, fontSize }) => ({

  textTransform: `${capital}`,
  fontWeight: (fontWeight !== undefined) ? `${fontWeight}` : '800',
  textDecoration: 'none',
  fontSize: (fontSize !== undefined) ? `${fontSize}` : '12px',

  '&.MuiLink-root:hover': {
    color: theme.palette.primary.fade,
    cursor: 'pointer',
  },

}));

export const ButtonIcon = styled('img')(() => ({
  width: 30,
  borderRadius: 4,
  marginLeft: '5px',
  marginRight: '20px',
}));

export const wrongIcon = <InputAdornment position="end"><PriorityHighIcon color="error" fontSize="10px" /></InputAdornment>;
export const rightIcon = <InputAdornment position="end"><DoneIcon color="primary" /></InputAdornment>;
