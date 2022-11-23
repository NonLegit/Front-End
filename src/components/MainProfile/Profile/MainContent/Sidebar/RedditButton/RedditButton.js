import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const RedditButton = styled(Button)(({
  fontSize, fontWeight, backgroundColor,
}) => ({
  boxShadow: 'none',
  backgroundColor,
  fontSize,
  borderRadius: 20,
  textTransform: 'initial',
  minWidth: 'auto',
  fontWeight,
}));

export default RedditButton;
