import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AboutContent = styled('h2')({
  padding: 12,
  margin: 0,
  color: '#1c1c1c',
  fill: '#1c1c1c',
  wordWrap: 'break-word',
  marginBlockStart: 0,
  marginBlockEnd: 0,
  // height: 127,
});
export const Add = styled('span')(({ condition }) => ({
  flexFlow: 'column',
  transition: 'all .1s linear 0s',
  border: 'none',
  padding: '8px 8px 0',
  display: 'flex',
  marginBottom: 12,
  marginTop: 8,
  borderRadius: 4,
  height: 40,
  cursor: 'pointer',
  '&:hover': {
    border: '1px solid #0079d3',
  },
  '&:focus-visible': {
    outline: 'none',
    border: 'none',
  },
  alignItems: 'flex-start',
  ...((condition === 'true') && {
    flexFlow: 'row',
  }),
}));
export const Text = styled('span')({
  fontFamily: 'Noto Sans,Arial,sans-serif',
  fontSize: 14,
  fontWeight: 400,
  backgroundColor: '#f6f7f8',
  borderRadius: 12,
  border: '1px solid transparent',
  color: '#0079d3',
  cursor: 'pointer',
  marginBottom: 8,
  marginRight: 4,
  padding: '2px 10px',
  textAlign: 'center',
  maxWidth: 245,
  marginTop: -3,
  display: 'flex',
});
export const Input = styled('textarea')({
  fontFamily: 'Noto Sans,Arial,sans-serif',
  backgroundColor: 'transparent',
  color: 'gray',
  width: '100%',
  border: 'none',
  resize: 'none',
  fontSize: 14,
  fontWeight: 400,
  '&:focus-visible': {
    outline: 'none',
    border: 'none',
  },
});

export const Count = styled('p')(({ condition }) => ({
  fontWeight: 400,
  color: '#7c7c7c',
  fontSize: 12,
  height: 16,
  margin: 0,
  marginBottom: 12,
  marginRight: 46,
  padding: 0,
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: 4,
  justifyContent: 'flex-start',
  ...((condition === 'true') && {
    color: 'red',
  }),
}));
export const Action = styled('p')(({ color }) => ({
  fontSize: 12,
  fontWeight: 700,
  color,
  marginTop: 0,

}));

export const InputFooter = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '-12px',
  width: '100%',
});

export const BOX = styled(Box)(({ condition }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-start',
  flexFlow: 'column',
  ...((condition === 'true') && {
    flexFlow: 'row',
  }),
}));
