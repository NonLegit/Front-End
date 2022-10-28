import { Box } from '@mui/material';
import { styled } from '@mui/system';
import RedditButton from '../RedditButton/RedditButton';

export const BackToTopButton = styled(RedditButton)(() => ({
  padding: '4px 16px',
  fontWeight: 'bold',
}));

export const BackToTopContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  margin: '16px 0',
  position: 'sticky',
  top: window.innerHeight - 45,
}));
