import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
// MultiLevel Container
export const MultiLevelHeaderBox = styled(Box)(() => ({
  flexBasis: '100%',
  backgroundColor: 'black',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}));

export const CloseButton = styled(() => (
  <Button variant="text" startIcon={<CloseIcon fontSize="small" />} color="third">Close</Button>
))(() => ({
//   '&.MuiButton-text': {
//     textTransform: 'capitalize',
//     backgroundColor: 'red',
//   },
}));

export const MultiLevelHeaderVotes = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}));
