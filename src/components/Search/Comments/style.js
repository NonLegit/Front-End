import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const PostContainer = styled(Box)(() => ({
  width: '100%',
  backgroundColor: '#fff',
  display: 'flex',
  borderRadius: 3,
  border: '1px solid #ccc',
  alignItems: 'center',
  '&:hover':
  {
    borderColor: '#999',
  },
  margin: 0,
  cursor: 'pointer',
}));

export const PostInfo = styled(Box)(() => ({
  display: 'flex',
  fontSize: '12px',
  gap: '4px',
}));

export const PostInfoLink = styled(Link)(({ color, fontWeight }) => ({
  fontWeight,
  color,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const PostTitle = styled(Link)(() => ({
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'spacebetween',
  padding: '0 16px',
  color: '#000',
  '& .MuiTypography-root': {
    lineHeight: 1.2,
    fontWeight: 500,
  },
}));

export const PostMedia = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: 138,
  height: 98,
  justifyContent: 'center',
}));

export const PostRich = styled('div')({
  paddingRight: 16,
  paddingLeft: 16,
  paddingTop: 8,
  paddingBottom: 16,
  fontSize: 12,
  fontWeight: 400,
  color: '#7c7c7c',
  display: 'flex',
});

export const CommentReach = styled('div')({
  paddingRight: 16,
  paddingTop: 8,
  fontSize: 12,
  fontWeight: 400,
  color: '#7c7c7c',
  display: 'flex',
});

export const Video = styled('video')(({ src }) => ({
  src,
}));

export const Image = styled('img')(({ src }) => ({
  src,
}));

export const CommentContainer = styled('div')({
  borderRadius: 4,
  backgroundColor: '#e9f5fd',
  fontSize: 14,
  margin: '0 12px 12px',
  padding: '4px 8px 8px',
  display: 'flex',
  flexDirection: 'row',
});

export const GoToThread = styled(Box)(() => ({
  display: 'block',
  fontSize: '12px',
  fontWeight: 400,
  margin: '0px 0px 4px 8px',
  minHeight: 0,
  textAlign: 'left',
  color: '#0079d3',
  paddingRight: 16,
  paddingLeft: 16,
}));
