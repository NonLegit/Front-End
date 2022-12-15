import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FooterBox = styled(Box)(() => ({
  width: '100%',
  height: 40,
  display: 'flex',
  alignItems: 'center',

}));
export const FooterText = styled(Typography)(({
  theme, responsive, responsiveapprove, responsiveshare,
}) => ({
  marginLeft: 5,
  display: 'flex',
  alignItems: 'center',
  fontWeight: 700,
  ...((responsive === 'true') && {
    [theme.breakpoints.between('0', '1160')]: {
      display: 'none',
    },
  }),
  ...((responsiveapprove === 'true') && {
    [theme.breakpoints.between('0', '660')]: {
      display: 'none',
    },
  }),
  ...((responsiveshare === 'true') && {
    [theme.breakpoints.between('0', '380')]: {
      display: 'none',
    },
  }),
}));
export const ElementBox = styled(Box)(({
  condition, theme,
}) => ({
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
    [theme.breakpoints.between('0', '550')]: {
      display: 'none',
    },
  }),
}));

export const SelectBox = styled(Box)(({ theme }) => ({
  width: 100,
  marginTop: 120,
  border: ' 1px solid #eee',
  borderRadius: 4,
  boxShadow: '0 2px 4px 0 #eee',
  backgroundColor: 'white',
  position: 'absolute',
  zIndex: 10,
  [theme.breakpoints.between('0', '700')]: {
    marginLeft: -70,
  },
  [theme.breakpoints.between('0', '500')]: {
    // width: 200,
  },
}));

export const SelectItem = styled(Button)(({ theme, condition, res }) => ({
  padding: 5,
  color: '#878a8c',
  fontSize: 14,
  fontWeight: 700,
  width: '100%',
  justifyContent: 'left',
  textTransform: 'none',
  ...((condition) && {
    color: theme.palette.primary.main,
  }),
  ...((res === 'true') && {
    display: 'none',
    [theme.breakpoints.between('0', '550')]: {
      display: 'flex',
    },
  }),
}));
