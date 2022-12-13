import {
  Box, IconButton,
} from '@mui/material';
import { styled } from '@mui/system';
import { Carousel } from 'react-bootstrap';
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
  justifyContent: (kind === 'self') ? 'flex-start' : 'center',
  alignItems: 'center',
  backgroundColor: (kind === 'video') ? '#000' : '#fff',
}));

export const CustomImage = styled('img')(({ maxHeight }) => ({
  maxWidth: '100%',
  maxHeight,
}));

export const PostText = styled('p')(({ maxHeight }) => ({
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '21px',
  wordBreak: 'break-word',
  marginBottom: 10,
  marginTop: 0,
  position: 'relative',
  cursor: 'pointer',
  maxHeight,
  overflow: 'hidden',
}));

export const PostTextContainer = styled(Box)(() => ({
  top: 0,
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundImage: 'linear-gradient(to bottom, transparent 70%, white)',
}));

export const CustomCarousel = styled(Carousel)(({ activeIndex: index, length }) => ({
  '& .carousel-control-next': {
    opacity: 1,
    display: index !== length ? 'flex' : 'none',
  },
  '& .carousel-control-prev': {
    opacity: 1,
    display: index !== 0 ? 'flex' : 'none',
  },
}));

export const ControlsIcon = styled(IconButton)(() => ({
  backgroundColor: '#fff',
  '&:hover': {
    backgroundColor: '#fff',
  },
}));
