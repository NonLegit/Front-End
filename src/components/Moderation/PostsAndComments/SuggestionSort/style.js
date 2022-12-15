import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Select = styled(Box)(() => ({
  display: 'flex',
  '&:hover': {
    cursor: 'pointer',
  },
}));

export const SelectBox = styled(Box)(() => ({
  width: 180,
  border: ' 1px solid #eee',
  borderRadius: 4,
  boxShadow: '0 2px 4px 0 #eee',
  backgroundColor: 'white',
  position: 'absolute',
  margin: '990px 560px 680px 725px',
  zIndex: 10,
}));

export const SelectItem = styled(Button)(({ condition }) => ({
  padding: 5,
  color: '#878a8c',
  fontSize: 14,
  fontWeight: 700,
  width: '100%',
  justifyContent: 'left',
  textTransform: 'none',
  // not working
  '& .MuiButtonBase-root:hover': {
    color: '#1a1a1b',
    backgroundColor: '#e9f5fd',
  },
  '&:hover': {
    color: '#1a1a1b',
    backgroundColor: '#e9f5fd',
  },
  ...((condition) && {
    color: '#0079d3',
  }),
}));

export const Selected = styled(Box)(() => ({
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: 0.5,
  color: '#878a8c',
  whiteSpace: 'nowrap',
}));
