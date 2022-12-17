import { styled } from '@mui/material/styles';
// import RedditButton from '../../../Search/RedditButton/RedditButton';

export const Container = styled('div')({
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: '.5px',
  textTransform: 'uppercase',
  backgroundColor: '#ffffff',
  borderRadius: '3px 3px 0 0',
  color: '#1a1a1b',
  display: 'flex',
  fill: '#1a1a1b',
  padding: '0 12px 12px',
  height: 42,
});
export const String = styled('h2')({
  fontSize: 14,
  fontWeight: 700,
  textTransform: 'none',
});
export const Button = styled('div')(({ backgroundColor, color }) => ({
  backgroundColor,
  borderRadius: 20,
  color,
  fontSize: 14,
  padding: '5px 12px 7px',
  fontWeight: 500,
  display: 'inline-block',
  marginRight: 5,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  verticalAlign: ' text-bottom',
  whiteSpace: 'pre',
  wordBreak: 'normal',
  marginLeft: 0,
  marginBottom: 3,
  height: 30,
  width: 'auto',
  cursor: 'pointer',
}));
export const See = styled('button')({
  padding: '0 12px',
  position: 'relative',
  border: '1px solid transparent',
  color: '#0079d3',
  fill: '#0079d3',
  fontFamily: 'Noto Sans,Arial,sans-serif',
  fontSize: 14,
  fontWeight: 700,
  letterSpacing: 'unset',
  textTransform: 'unset',
  minHeight: 32,
  minWidth: 32,
  alignItems: 'center',
  borderRadius: 9999,
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  width: 'auto',
  background: 'transparent',
  cursor: 'pointer',
  '&:hover': {
    content: '\'""\'',
    borderRadius: 9999,
    background: '#ededed',
  },
  marginBottom: 16,
});
export const Span = styled('span')(({ color }) => ({
  color,
}));
