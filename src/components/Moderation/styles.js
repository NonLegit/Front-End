import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SelectBox = styled(Box)(() => ({
  width: 180,
  border: ' 1px solid #eee',
  borderRadius: 4,
  boxShadow: '0 2px 4px 0 #eee',
  backgroundColor: 'white',
  position: 'absolute',
  zIndex: 10,

}));

export const SelectItem = styled(Button)(({ condition, theme }) => ({
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
  ...((condition === 'true') && {
    color: theme.palette.primary.main,
  }),
}));

export const RedditButton = styled(Button)(({
  fontSize, padding, fontWeight,
}) => ({
  fontSize,
  padding,
  borderRadius: 20,
  textTransform: 'capitalize',
  fontWeight,
  height: '30px',
}));
