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
export const Add = styled('div')({
  transition: 'all .1s linear 0s',
  display: 'flex',
  backgroundColor: '#f6f7f8',
  borderRadius: 4,
  padding: 8,
  marginBottom: 12,
  marginTop: 8,
  border: '1px solid #dae0e6',
  cursor: 'pointer',
  flexFlow: 'column',
  '&:hover': {
    border: '1px solid #0079d3',
  },
  '&:focus-visible': {
    outline: 'none',
    border: 'none',
  },
});
export const Text = styled(Box)({
  fontSize: 12,
  fontWeight: 700,
  color: '#0079d3',
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
});
