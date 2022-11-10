import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FooterBox = styled(Box)(() => ({
  width: '100%',
  height: 36,
  display: 'flex',
  alignItems: 'center',

}));
export const FooterText = styled(Typography)(({ theme, condition, responsiveshare }) => ({
  marginLeft: 5,
  display: 'flex',
  alignItems: 'center',
  fontWeight: 700,
  ...((condition === 'true') && {
    [theme.breakpoints.between('0', '1160')]: {
      display: 'none',
    },
  }),
  ...((responsiveshare === 'true') && {
    [theme.breakpoints.between('0', '500')]: {
      display: 'none',
    },
  }),

}));
export const ElementBox = styled(Box)(({
  spam, approved, theme, condition2, condition, show,
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
  ...((spam === 'true') && {
    color: '#ff585b80',
    '&:hover': {
    },
  }),
  ...((approved === 'true') && {
    color: '#46d16087',
    '&:hover': {
    },
  }),
  ...((condition2) && {
    [theme.breakpoints.between('0', '1050')]: {
      display: 'none',
    },
  }),
  ...((condition) && {
    [theme.breakpoints.between('0', '450')]: {
      display: 'none',
    },
  }),
  ...((show === 'true') && {
    display: 'none',
  }),
  ...((show === 'true') && {
    [theme.breakpoints.between('0', '450')]: {
      display: 'block',
    },
  }),
}));
