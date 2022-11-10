import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SelectBox = styled(Box)(() => ({
  width: 260,
  //   marginTop: 330,
  border: ' 1px solid #eee',
  borderRadius: 4,
  boxShadow: '0 2px 4px 0 #eee',
  backgroundColor: 'white',
  position: 'absolute',
  zIndex: 10,

}));

export const SelectItem = styled(Button)(() => ({
  padding: 5,
  color: '#878a8c',
  fontSize: 14,
  fontWeight: 700,
  width: '100%',
  justifyContent: 'left',
  textTransform: 'none',
  // not working
  '& .MuiButtonBase-root:hover': {
    color: 'black',
    backgroundColor: '#d7d7d7',
  },
}));