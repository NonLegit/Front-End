import { Box, Button, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SelectBox = styled(Box)(({ theme }) => ({
  width: 260,
  marginTop: 200,
  border: ' 1px solid #eee',
  borderRadius: 4,
  boxShadow: '0 2px 4px 0 #eee',
  backgroundColor: 'white',
  position: 'absolute',
  zIndex: 10,
  [theme.breakpoints.between('0', '720')]: {
    width: 200,
    marginLeft: -100,
  },
  [theme.breakpoints.between('0', '400')]: {
    marginLeft: -150,
  },
  [theme.breakpoints.between('0', '400')]: {
    marginTop: 300,
  },
}));

export const SelectItem = styled(Button)(({ theme, responsive }) => ({
  padding: 5,
  color: '#878a8c',
  fontSize: 14,
  fontWeight: 700,
  width: '100%',
  justifyContent: 'left',
  textTransform: 'none',

  ...((responsive === 'true') && {
    justifyContent: 'left',
    display: 'none',
    [theme.breakpoints.between('0', '400')]: {
      display: 'flex',
    },
  }),
}));

export const DividerRes = styled(Divider)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.between('0', '400')]: {
    display: 'block',
  },
}));
