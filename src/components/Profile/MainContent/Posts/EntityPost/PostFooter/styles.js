import { Box, Button, Typography } from '@mui/material';
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
  spam, approved, theme, condition2,
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
}));

export const SelectBox = styled(Box)(() => ({
  width: 260,
  marginTop: 330,
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
