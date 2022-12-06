import { styled } from '@mui/system';
import RedditButton from '../RedditButton/RedditButton';

export const Button = styled(RedditButton)(({ variant }) => ({
  fontSize: 12,
  padding: (variant === 'contained' ? '2px 16px' : '1px 16px'),
  fontWeight: 'bold',
}));
