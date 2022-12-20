import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import LaunchIcon from '@mui/icons-material/Launch';
import RedditButton from '../RedditButton/RedditButton';

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
export const Flair = styled(RedditButton)(({ backgroundColor, flairColor }) => ({
  fontSize: 10,
  padding: '2px 10px',
  fontWeight: 'normal',
  backgroundColor,
  color: flairColor,
  '&:hover': {
    backgroundColor,
  },
  marginLeft: 10,
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
  // height: 22,
  display: 'flex',
  alignItems: 'center',
  '&:visited ': {
    color: theme?.palette?.primary?.light,
  },
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
  // marginBottom: 10,
}));

export const LinkIcon = styled(LaunchIcon)(() => ({
  width: 13,
  height: 13,
  color: 'inherit',
}));
