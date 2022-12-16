import {
  Box, IconButton,
} from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import LaunchIcon from '@mui/icons-material/Launch';

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

export const PostMedia = styled(Box)(({ kind, spoiler }) => ({
  display: 'flex',
  justifyContent: (kind === 'self' || kind === 'link') ? 'flex-start' : 'center',
  alignItems: 'center',
  backgroundColor: (kind === 'video') ? '#000' : '#fff',
  position: 'relative',
  filter: spoiler && 'blur(3px)',
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

export const ControlsIcon = styled(IconButton)(({ left, right, display }) => ({
  backgroundColor: '#fff',
  '&:hover': {
    backgroundColor: '#fff',
  },
  left,
  right,
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%);',
  display,
}));

export const PostUrlLink = styled(Box)(() => ({
  width: 135,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: 'inherit',
}));

export const PostUrl = styled('a')(({ theme }) => ({
  fontSize: 13,
  color: theme?.palette?.primary?.light,
  height: 22,
  display: 'flex',
  alignItems: 'center',
  '&:visited ': {
    color: theme?.palette?.primary?.light,
  },
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
  marginBottom: 10,
}));

export const LinkIcon = styled(LaunchIcon)(() => ({
  width: 13,
  height: 13,
  color: 'inherit',
}));
