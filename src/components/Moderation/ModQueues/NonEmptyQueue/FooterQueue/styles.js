import {
  Box, Button, IconButton, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const FooterBox = styled(Box)(() => ({
  width: '100%',
  height: 50,
  display: 'flex',
  alignItems: 'center',

}));
export const FooterText = styled(Typography)(() => ({
  marginLeft: 5,
  display: 'flex',
  alignItems: 'center',
  fontWeight: 700,
}));
export const ElementBox = styled(Box)(({ condition, theme }) => ({
  height: '100%',
  display: 'flex',
  marginRight: 1,
  alignItems: 'center',
  borderRadius: 4,
  padding: 5,
  color: theme.palette.grey[500],
  '&:hover': {
    backgroundColor: '#1a1a1b1a',
  },
  ...((condition === 'true') && {
    color: '#ff585b80',
    '&:hover': {
    },
  }),
}));

export const FooterButton = styled(Button)(({ condition }) => ({
  borderRadius: 999,
  height: 30,
  textTransform: 'unset',
  fontSize: 12,
  boxShadow: 'none',
  fontWeight: 700,
  margin: '0px 5px',
  marginBottom: 5,
  ...((condition === 'true') && {
    color: 'black',
    border: '1px solid #bdbfc0',
    '&:hover': {
      border: '1px solid black',
      backgroundColor: 'white',
    },
  }),
}));

export const MoreList = styled(IconButton)(({ responsive3icons, theme }) => ({
  borderRadius: 5,
  height: 25,
  '&:hover': {
    backgroundColor: '#eee',
  },
  ...((responsive3icons) && {
    [theme.breakpoints.between('0', '540')]: {
      display: 'none',
    },
  }),
}));

export const SelectBox = styled(Box)(({ theme }) => ({
  width: 260,
  marginTop: 120,
  marginRight: 60,
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
  color: '#1c1c1c',
  fontSize: 13,
  fontWeight: 700,
  width: '100%',
  justifyContent: 'left',
  textTransform: 'none',
  ...((condition === 'true') && {
    color: theme.palette.primary.main,
  }),
}));
