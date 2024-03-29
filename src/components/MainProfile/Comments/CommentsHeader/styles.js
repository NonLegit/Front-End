import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import RedditButton from '../../../RedditButton/RedditButton';

export const CommentsBoxHeader = styled(Box)(({ theme, noheader }) => ({
  width: '100%',
  minHeight: 38,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  color: theme.palette.grey[500],
  padding: '8px 8px',
  '&:hover': {
    outline: '1px solid #898989',
    borderRight: '1px solid #898989',
    borderLeft: '1px solid #898989',
    cursor: 'pointer',
  },
  ...((noheader === 'false') && {
    display: 'none',
  }),
}));

export const Flair = styled(RedditButton)(({ backgroundcolor, flaircolor }) => ({
  fontSize: 10,
  padding: '2px 2px',
  fontWeight: 'normal',
  backgroundColor: backgroundcolor,
  color: flaircolor,
  marginRight: 5,
  '&:hover': {
    backgroundColor: backgroundcolor,
  },
}));

export const TagPost = styled(Typography)(({ color }) => ({
  color,
  border: `1px solid ${color}`,
  padding: '0 5px',
  height: '16px',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 2,
  margin: 5,
}));
