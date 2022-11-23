import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PostsQueueBox = styled(Box)(() => ({
  display: 'flex',
  backgroundColor: 'white',
  borderRadius: 3,
  border: '1px solid #ccc;',
  '&:hover': {
    border: '1px solid #898989',
    cursor: 'pointer',
  },
  position: 'relative',
}));

export const PostSidebaRes = styled(Box)(({ theme }) => ({
  marginLeft: 15,
  [theme.breakpoints.between('650', '3000')]: {
    marginLeft: 48,
  },
  padding: '5px 0',
}));

export const EmptyImage = styled(Box)(() => ({
  height: 72,
  width: 96,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f8f8f8',
  alignSelf: 'center',
}));

export const PostImage = styled('img')(() => ({
  height: '100%',
  width: '100%',
}));

export const PostContentBox = styled(Box)(() => ({
  height: '100%',
  width: '100%',

}));

export const TitlePost = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[600],

}));

export const TagPost = styled(Typography)(({ color }) => ({
  color,
  border: `1px solid ${color}`,
  padding: '0 5px',
  height: 'fit-content',
  borderRadius: 2,
  margin: 5,
}));

export const ParagraphPost = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[500],
  height: 36,
  display: 'flex',
  // justifyContent: 'center',
  alignItems: 'center',
}));
