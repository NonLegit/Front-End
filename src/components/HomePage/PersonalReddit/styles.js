import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const RedditPersonal = styled('div')(() => ({
  padding: 12,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  marginTop: 16,
  borderRadius: 7,
}));

export const Paragraph = styled(Box)(() => ({
  fontSize: 14,
  fontWeight: '400',
  lineHeight: '21px',
  marginTop: 12,
}));

export const MiddleBox = styled(Box)(() => ({
  position: 'relative',
}));
export const RedditImage = styled('img')(() => ({
  width: 40,
  height: 68,
  position: 'absolute',
  bottom: 0,
}));
export const UpperImage = styled('img')(() => ({
  margin: '-12px -12px 0 -12px',
}));
