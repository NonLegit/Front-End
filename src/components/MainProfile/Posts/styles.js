import { Box, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import RedditButton from '../../RedditButton/RedditButton';

export const PostsQueueBox = styled(Box)(({ condition }) => ({
  minHeight: 120,
  display: 'flex',
  backgroundColor: 'white',
  marginTop: 10,
  borderRadius: 3,
  '&:hover': {
    outline: '1px solid #898989',
    cursor: 'pointer',
  },
  ...((condition === 'true') && {
    marginBottom: 10,
    border: '1px solid #ccc;',
  }),
}));

export const PostContentBox = styled(Box)(() => ({
  height: '100%',
  width: '100%',
}));

export const TitlePost = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[600],

}));

export const ParagraphPost = styled(Box)(({ theme }) => ({
  color: theme.palette.grey[500],
  minHeight: 36,
  fontSize: '1rem',
}));

export const ParagraphBox = styled(Box)(() => ({
  maxHeight: '250px',
  position: 'relative',
  overflow: 'hidden',
  marginTop: 8,
}));

export const ParagraphWhite = styled(Box)(() => ({
  backgroundImage: 'linear-gradient(to bottom, transparent 70%, white)',
  position: 'absolute',
  height: '100%',
  width: '100%',
}));

export const Flair = styled(RedditButton)(({ backgroundcolor, flaircolor }) => ({
  fontSize: 10,
  padding: '2px 10px',
  fontWeight: 'normal',
  backgroundColor: backgroundcolor,
  color: flaircolor,
  marginLeft: 5,
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
