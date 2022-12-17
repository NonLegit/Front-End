import {
  Button, styled,
} from '@mui/material';

export const DialogButtons = styled(Button)(({ condition }) => ({
  borderRadius: 9999,
  textTransform: 'unset',
  fontSize: 14,
  fontWeight: 700,
  minWidth: 32,
  padding: '4px 16px',
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
  },
  ...((condition === 'true') && {
    borderColor: '#878a8c',
    color: '#878a8c',
    '&:hover': {
      borderColor: '#878a8c',
    },
  }),
}));
