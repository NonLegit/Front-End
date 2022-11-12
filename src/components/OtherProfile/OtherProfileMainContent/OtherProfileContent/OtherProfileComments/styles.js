import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CommentsBox = styled(Box)(() => ({
  width: '100%',
  minHeight: 134,
  backgroundColor: 'white',
}));

export const CommentText = styled(Typography)(({ theme, coloring, hover }) => ({
//   fontWeight: 700,
  marginLeft: 8,
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
