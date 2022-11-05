import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FooterBox = styled(Box)(() => ({
  width: '100%',
  height: 40,
  display: 'flex',
  alignItems: 'center',

}));
export const FooterText = styled(Typography)(() => ({
  marginLeft: 5,
  display: 'flex',
  alignItems: 'center',
  fontWeight: 700,
}));
export const ElementBox = styled(Box)(({ condition, condition2, theme }) => ({
  height: '100%',
  display: 'flex',
  marginRight: 1,
  alignItems: 'center',
  borderRadius: 4,
  padding: '5px 6px',
  color: theme.palette.grey[500],
  '&:hover': {
    backgroundColor: '#1a1a1b1a',
  },
  ...((condition === 'true') && {
    color: '#ff585b80',
    '&:hover': {
    },
  }),
  ...((condition2 === 'true') && {
    color: '#46d16087',
    '&:hover': {
    },
  }),
}));

export const SelectBox = styled(Box)(() => ({
  width: 260,
  marginTop: 330,
  marginLeft: 500,
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
