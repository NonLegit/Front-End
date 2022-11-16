import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SelectBox = styled(Box)(({ theme }) => ({
  width: 'fit-content',
  marginTop: -5,
  border: ' 1px solid #eee',
  borderRadius: 4,
  boxShadow: '0 2px 4px 0 #eee',
  backgroundColor: 'white',
  position: 'absolute',
  zIndex: 10,
  [theme.breakpoints.between('0', '575')]: {
    marginLeft: -90,
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
