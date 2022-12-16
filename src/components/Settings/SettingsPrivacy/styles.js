import { styled } from '@mui/system';
import { alpha } from '@mui/material/styles';
import {
  TextField,
} from '@mui/material';

import theme, { fonts } from '../../../styles/theme';

export const AddBlock = styled('div')(() => ({
  marginTop: '20px',
  borderRadius: '5px',
  border: '1px solid #EDEFF1',
  display: 'flex',
  height: 52,
  padding: '0 24px',
  position: 'relative',
  '&:focus': {
    border: '1px solid #0079D3',
  },
}));
export const AddButton = styled('div')(({ active }) => ({
  marginLeft: 12,
  fontSize: 14,
  fontWeight: '700',
  color: '#0079D3',
  opacity: (!active) ? '0.4' : '1',
  cursor: (!active) ? 'not-allowed' : 'pointer',
  display: 'flex',
  alignItems: 'center',
}));
export const InputBlock = styled('input')(() => ({
  border: 'none',
  outline: 'none',
  flexGrow: 1,
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
    backgroundColor: '#fff',
    border: `1px solid ${clr}`,
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: clr ? `${alpha(clr, 0.25)} 0 0 0 2px` : 'none',
      borderColor: `${clr}`,
    },
    '&::after': {
      display: 'none',
    },
    '&::before': {
      display: 'none',
    },
  },

  '.MuiInputLabel-shrink': {
    color: `${theme.palette.neutral.main} !important`,
  },
  '.MuiInputLabel-root': {

    fontWeight: 'bold',
    fontSize: '10px',
    letterSpacing: '0.1em',
  },
}));
export const BlocekConataier = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px',
  marginBottom: '8px',
}));

export const ImageBlock = styled('img')(() => ({
  objectFit: 'cover',
  width: '24px',
  heught: '24px',
}));
export const BlocekInfo = styled('div')(() => ({
  display: 'flex',
  gap: '8px',
  padding: '6px 10px',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '#EDEFF1',
  },
}));
