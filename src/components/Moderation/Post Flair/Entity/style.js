import { Box, styled, TableCell } from '@mui/material';

export const BodyCell = styled(TableCell)(() => ({
  fontSize: 12,
  fontWeight: 500,
  borderRadius: 2,
  marginRight: 5,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'pre',
  wordBreak: 'normal',
  padding: '0 4px',
  height: 54.4,
  backgroundColor: 'white',
}));
export const BodyFirstCell = styled(TableCell)(() => ({
  fontSize: 12,
  fontWeight: 500,
  borderRadius: 2,
  marginRight: 5,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'pre',
  wordBreak: 'normal',
  padding: '0 4px',
  height: 54.4,
  paddingLeft: 17,
  backgroundColor: 'white',
}));
export const Filter = styled('button')(({ condition }) => ({
  padding: '0 12px',
  position: 'relative',
  border: '1px solid transparent',
  color: '#0079d3',
  fill: '#0079d3',
  fontFamily: 'Noto Sans,Arial,sans-serif',
  fontSize: 14,
  fontWeight: 700,
  letterSpacing: 'unset',
  textTransform: 'uppercase',
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
  ...((condition) && {
    color: 'gray',
    backgroundColor: 'transparent',
    border: '1px solid #848484',
  }),
}));

export const Actions = styled('div')({
  marginLeft: '20%',
  marginRight: '20%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  backgroundColor: 'white',
});
export const Text = styled('span')(({ color, backgroundColor }) => ({
  backgroundColor,
  color,
}));
export const SplitArea = styled(Box)({
  width: '50%',

});
