import { List } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AboutContent = styled('h2')({
  // padding: 12,
  margin: 0,
  color: '#1c1c1c',
  fill: '#1c1c1c',
  wordWrap: 'break-word',
  marginBlockStart: 0,
  marginBlockEnd: 0,
  // height: 127,
});

export const Lists = styled(List)({
  width: '100%',
  backgroundColor: 'white',
  overflow: 'auto',
  boxShadow: '0 2px 4px 0 rgba(28,28,28,0.2)',
  '& ul': { padding: 0 },
  '& ul>li': {
    paddingTop: 0,
    '&:hover': {
      backgroundColor: '#0079d3',
      color: 'white',
    },
  },
  position: 'absolute',
  zIndex: 1,
  height: 200,
});
