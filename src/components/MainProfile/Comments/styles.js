import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PostsQueueBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  borderRadius: 3,
  marginBottom: 5,
  position: 'relative',
}));

export const CommentText = styled(Typography)(({ theme, coloring, hover }) => ({
  marginRight: 5,
  color: coloring,
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
