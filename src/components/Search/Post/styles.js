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
  flexDirection: 'row',
  alignItems: 'spacebetween',
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
  paddingTop: 8,
  paddingBottom: 16,
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
