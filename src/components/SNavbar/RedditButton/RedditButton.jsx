import { Button, styled } from '@mui/material';

const RedditButton = styled(Button)(({
  fontSize, padding, fontWeight, margin, theme,
}) => ({
  margin,
  fontSize,
  padding,
  borderRadius: 20,
  textTransform: 'capitalize',
  minWidth: 'auto',
  width: '120px',
  fontWeight,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));
export default RedditButton;
