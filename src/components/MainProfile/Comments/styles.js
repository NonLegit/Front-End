import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PostsQueueBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  borderRadius: 3,
  marginBottom: 5,
  position: 'relative',
}));

export const CommentText = styled(Box)(({ theme, coloring, hover }) => ({
  marginRight: 5,
  color: coloring,
  fontSize: 13,
  ...((coloring === undefined) && {
    color: theme.palette.primary.main,
  }),
  ...((hover === 'true') && {
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  }),

}));
