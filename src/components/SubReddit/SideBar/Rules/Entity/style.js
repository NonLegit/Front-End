import { styled } from '@mui/material/styles';

export const Hr = styled('hr')({
  backgroundColor: '#1a1a1b12',
  border: 'none',
  height: 1,
});

export const AboutContent = styled('h2')({
  paddingLeft: 12,
  margin: 0,
  color: '#1c1c1c',
  fill: '#1c1c1c',
  wordWrap: 'break-word',
  padding: '0 12px',
  // height: 127,
});
export const AboutDisc = styled('h2')({
  position: 'relative',
  fontFamily: 'Noto Sans,Arial,sans-serif',
  fontSize: 14,
  fontWeight: 400,
  wordWrap: 'break-word',

});

export const AboutCountainerRule = styled('div')({
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: 0.5,
  backgroundColor: '#ffffff',
  borderRadius: '3px 3px 0 0',
  color: '#1a1a1b',
  // display: 'flex',
  fill: '#1a1a1b',
  margin: 0,
});

export const AboutStringRule = styled('h2')({
  margin: 0,
  fontSize: 14,
  fontWeight: 700,
  textTransform: 'none',
  display: 'flex',
  justifyContent: 'space-between',
});
