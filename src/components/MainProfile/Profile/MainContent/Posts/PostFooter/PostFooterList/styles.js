import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SelectBox = styled(Box)(({ theme }) => ({
  width: 260,
  marginTop: 330,
  border: ' 1px solid #eee',
  borderRadius: 4,
  boxShadow: '0 2px 4px 0 #eee',
  backgroundColor: 'white',
  position: 'absolute',
  zIndex: 10,
  [theme.breakpoints.between('0', '860')]: {
    marginLeft: -230,
  },
  [theme.breakpoints.between('0', '420')]: {
    width: 200,
    marginLeft: -180,
  },

}));

export const SelectItem = styled(Button)(({ theme, condition }) => ({
  padding: 5,
  color: '#878a8c',
  fontSize: 14,
  fontWeight: 700,
  width: '100%',
  justifyContent: 'left',
  textTransform: 'none',
  ...((condition === 'true') && {
    color: theme.palette.primary.main,
  }),
}));
