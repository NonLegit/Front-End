import {
  Box, List,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const Select = styled('p')({
  fontSize: 16,
  fontWeight: 500,
  background: 'none',
  border: 'none',
  color: '#0079d3',
  padding: '4px  0',
  textAlign: 'left',
  // maxHeight: 25,
  cursor: 'pointer',
  height: 28,
  margin: 0,

});

export const Lists = styled(List)({
  width: 260,
  backgroundColor: 'white',
  overflow: 'auto',
  maxHeight: 198,
  overflowY: 'auto',
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

export const SelectContainer = styled(Box)({
  display: 'flex',
  textAlign: 'left',
  // width: '100%',
  alignItems: 'center',
  paddingLeft: '12px',
});
