import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const RedditPersonal = styled('div')(() => ({
  padding: 12,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  marginTop: 16,
  borderRadius: 7,
  border: '1px solid #ccc',
}));

export const Paragraph = styled(Box)(() => ({
  fontSize: 14,
  fontWeight: '400',
  lineHeight: '21px',
  marginTop: 70,
}));

export const MiddleBox = styled(Box)(() => ({
  position: 'relative',
}));
export const RedditImage = styled('img')(() => ({
  width: 70,
  height: 126,
  position: 'absolute',
  bottom: -67,
  transform: 'translateX(-50%)',
  left: '50%',

}));
export const UpperImage = styled('img')(() => ({
  margin: '-12px -12px 0 -12px',
}));
export const CustomLink = styled(Link)(() => ({
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'column',
}));
export const Home = styled(Typography)(() => ({
  fontWeight: 500,
  textTransform: 'capitalize',
  marginLeft: 56,
  paddingBottom: 6.4,
  paddingTop: 24,
}));
