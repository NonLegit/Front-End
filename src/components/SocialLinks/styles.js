import {
  Button,
  styled,
} from '@mui/material';

export const SaveBtn = styled(Button)(({ condition }) => ({
  borderRadius: 20,
  textTransform: 'unset',
  fontWeight: 700,
  height: 32,
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',

  },
  ...((condition === 'false') && {
    cursor: 'not-allowed',
    color: '#ffffff80',
    filter: 'grayscale(1)',
  }),
}));

export const InputBox = styled('input')(() => ({
  height: 36,
  width: '100%',
  marginTop: 5,
  marginBottom: 10,
  fontSize: 14,
  border: '1px solid #edeff1',
  borderRadius: 5,
  textIndent: 10,
  '&:focus': {
    borderColor: '#0079d3',
    outline: 'none',
  },
}));

export const Text = styled('span')(() => ({
  height: 40,
  width: 'fit-content',
  fontSize: 12,
  fontWeight: 700,
  backgroundColor: '#edeff1',
  padding: '10px 12px',
  borderRadius: 9999,
  color: 'black',
  cursor: 'pointer',
  marginBottom: 8,
  marginRight: 4,
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const PlatformIcon = styled('img')(() => ({
  height: 16,
  width: 16,
  marginRight: 5,
}));
