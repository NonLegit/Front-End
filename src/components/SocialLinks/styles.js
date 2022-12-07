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
