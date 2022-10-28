import { Box, Typography } from '@mui/material';
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
  marginRight: 2,
  alignItems: 'center',
  borderRadius: 4,
  padding: 10,
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
