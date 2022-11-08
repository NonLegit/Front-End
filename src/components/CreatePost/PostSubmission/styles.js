import { styled } from '@mui/system';
import RedditButton from '../../RedditButton/RedditButton';

export const PostButton = styled(RedditButton)(() => ({
  padding: '3px 16px',
  fontSize: 14,
  fontWeight: 'bold',
  '&.Mui-disabled': {
    cursor: 'not-allowed',
    pointerEvents: 'auto',
  },
}));
