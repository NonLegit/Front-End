import { styled } from '@mui/system';

import RedditButton from '../../../../RedditButton/RedditButton';

export const SaveButton = styled(RedditButton)(() => ({
  padding: '3px 20px',
  fontSize: 14,
  fontWeight: 'bold',
  '&.Mui-disabled': {
    cursor: 'not-allowed',
    pointerEvents: 'auto',
    backgroundColor: '#8D8D8D',
    color: '#ffffff80',
  },
}));
