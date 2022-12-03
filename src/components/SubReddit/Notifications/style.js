import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Select = styled(Box)(() => ({
  display: 'flex',
  '&:hover': {
    cursor: 'pointer',
  },
}));

export const SelectBox = styled(Box)(() => ({
  width: 104,
  border: ' 1px solid #eee',
  borderRadius: 4,
  boxShadow: '0 2px 4px 0 #eee',
  backgroundColor: 'white',
  position: 'absolute',
  zIndex: 10,
  marginTop: 36,
  marginLeft: 64,
}));

export const SelectItem = styled(Button)(({ condition }) => ({
  padding: 5,
  color: '#878a8c',
  fontSize: 14,
  fontWeight: 500,
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
  ...((condition === 'true') && {
    color: 'primary',
    '&:hover': {
      color: 'primary',
    },
  }),
}));
export const Notification = styled('button')({
  fontSize: 14,
  fontWeight: 500,
  color: '#7c7c7c',
  marginLeft: 8,
  borderRadius: '100%',
  border: '1px solid #0079d3',
  height: 32,
  padding: 5,
  position: 'relative',
  background: 'transparent',
});
