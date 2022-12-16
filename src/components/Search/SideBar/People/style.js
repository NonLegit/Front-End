import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const PeopleString = styled('h4')({
  fontWeight: 500,
  fontSize: 16,
  color: 'black',
  padding: '16px 16px 0',
  display: 'block',
  marginBlockStart: '1.33em',
  marginBlockEnd: '1.33em',
  marginInlineStart: 0,
  marginInlineEnd: 0,
  height: 36,
  border: 0,
  margin: 0,
});
export const Suggestion = styled('div')({
  margin: 0,
  padding: 0,
  border: 0,
  font: 'inherit',
  verticalAlign: 'baseline',
  cursor: 'pointer',
});
export const OneSuggeest = styled('a')({
  marginBottom: 0,
  borderBottom: 'thin solid #ccc',
  paddingBottom: 16,
  borderRadius: '4px 4px 0 0',
  paddingTop: 16,
  display: 'flex',
  flexDirection: 'row',
  padding: 13,
  marginTop: -1,
});
export const TextContainer = styled('div')({
  flexGrow: 1,
  padding: '0 8px',
  overflow: 'hidden',
  overflowWrap: 'break-word',
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'baseline',
  height: 32,
});
export const Text = styled(Link)({
  maxWidth: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: 12,
  color: '#1c1c1c',
  fontWeight: 700,
  display: 'block',
  marginBlockStart: '1.33em',
  marginBlockEnd: '1.33em',
  marginInlineStart: 0,
  marginInlineEnd: 0,
  height: 16,
  margin: 0,
});
export const TextP = styled('p')({
  fontSize: 12,
  fontWeight: 400,
  color: '#7c7c7c',
  overflowWrap: 'break-word',
  display: 'block',
  marginBlockStart: '1.33em',
  marginBlockEnd: '1.33em',
  marginInlineStart: 0,
  marginInlineEnd: 0,
  height: 16,
  margin: 0,
});
export const Btn = styled(Button)({
  flexShrink: 0,
  width: 86,
  height: 30,
  color: '#1383d6',
  backgroundColor: '#f6f7f8',
  borderRadius: 9999,
  '&:hover': {
    backgroundColor: '#e3edf6',
    border: 'none',
    outline: 0,
  },
  textTransform: 'initial',
  border: 'none',
  outline: 0,
});

export const Joined = styled(Button)(() => ({
  flexShrink: 0,
  width: 86,
  height: 30,
  color: '#1383d6',
  backgroundColor: '#f6f7f8',
  borderRadius: 9999,
  '&:hover': {
    backgroundColor: '#e3edf6',
    border: 'none',
    outline: 0,
  },
  border: 'none',
  outline: 0,
  textTransform: 'initial',
}));
export const ShowMore = styled(Link)({
  marginLeft: '20%',
  fontSize: 14,
  color: '#0079d3',
  padding: 16,
  height: 50,
  fontWeight: 500,
  margin: 0,
  cursor: 'pointer',
  '&:hover': {
    color: '#0079d3',
  },
  textDecoration: 'none',

});
