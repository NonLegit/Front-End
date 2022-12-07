import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import theme from '../../../styles/theme';
// MultiLevel Container
export const MultiLevelHeaderBox = styled(Box)(() => ({
  flexBasis: '100%',
  backgroundColor: 'black',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  // Postion To be fixed
}));

export const CloseButton = styled((close) => (
  <Button variant="text" startIcon={<CloseIcon fontSize="small" />} color="third" onClick={close}>Close</Button>
))(() => ({
//   '&.MuiButton-text': {
//     textTransform: 'capitalize',
//     backgroundColor: 'red',
//   },
}));

export const MultiLevelHeaderVotes = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  // justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: '5px',

  '& > *': {
    margin: '0px 10px',
    color: theme.palette.white.main,
  },

  '& > .MuiDivider-root': {
    backgroundColor: theme.palette.white.main,
  },
}));
