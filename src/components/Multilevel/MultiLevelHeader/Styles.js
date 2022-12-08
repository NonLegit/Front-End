import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../styles/theme';
// MultiLevel Container
export const MultiLevelHeaderBox = styled(Box)(() => ({
  height: '50px',
  flexBasis: '100%',
  backgroundColor: 'black',

  padding: '0px 5px',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  // Postion To be fixed
}));

export const CloseButton = styled(Box)(() => ({
  '&.MuiButton-text': {
    textTransform: 'capitalize',
    backgroundColor: 'red',
  },
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
