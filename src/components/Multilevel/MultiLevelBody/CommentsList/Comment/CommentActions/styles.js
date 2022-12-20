import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// CommentContainer
export const CommentActionsContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  marginLeft: '-5px',

  '& > * :not(p)': {
    height: '100%',
    cursor: 'pointer',
  },

  // border: '2px solid black',
}));
