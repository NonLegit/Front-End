import {
  Box,
} from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const PostContainer = styled(Box)(() => ({
  width: '100%',
  backgroundColor: '#fff',
  display: 'flex',
  borderRadius: 3,
  border: '1px solid #ccc',
  '&:hover':
    {
      borderColor: '#999',
    },
}));

export const Popularity = styled(Box)(() => ({
  fontSize: '15px',
  color: '#1c1c1c',
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
  color: '#000',
  '& .MuiTypography-root': {
    lineHeight: 1.2,
    fontWeight: 500,
  },
}));

export const PostMedia = styled(Box)(({ kind }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: (kind === 'video') ? '#000' : '#fff',
}));

export const CustomImage = styled('img')(() => ({
  maxWidth: '100%',
  maxHeight: '512px',
}));

export const PostText = styled('p')(() => ({
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '21px',
  wordBreak: 'break-word',
  marginBottom: 10,
  marginTop: 0,
  position: 'relative',
  cursor: 'pointer',
  maxHeight: 250,
  overflow: 'hidden',
}));

export const PostTextContainer = styled(Box)(() => ({
  top: 0,
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundImage: 'linear-gradient(to bottom, transparent 70%, white)',
}));
