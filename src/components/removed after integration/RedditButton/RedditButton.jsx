import { Button } from '@mui/material';
import { styled } from '@mui/system';

const RedditButton = styled(Button)(({
  fontSize, padding, fontWeight,
}) => ({
  fontSize,
  padding,
  borderRadius: 20,
  textTransform: 'capitalize',
  minWidth: 'auto',
  fontWeight,
}));
export default RedditButton;
