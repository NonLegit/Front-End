import {
  Box,
} from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import RedditButton from '../../../RedditButton/RedditButton';

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

export const CreatedAt = styled(Box)(({ color, fontWeight }) => ({
  fontWeight,
  color,
  cursor: 'pointer',
}));

export const PostTitle = styled(Link)(() => ({
  textDecoration: 'none',
  color: '#000',
  '& .MuiTypography-root': {
    lineHeight: 1.2,
    fontWeight: 500,
  },
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
}));

export const Tag = styled(RedditButton)(() => ({
  fontSize: 12,
  padding: '0px 7px',
  borderRadius: 3,
  fontWeight: 500,
  lineHeight: 1.3,
  marginRight: 5,
}));
