// MUI Components
import { Box, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

// theme
import theme from '../../../styles/theme';

// MultiLevel Container
export const MultiLevelHeaderBox = styled(Box)(() => ({
  height: '50px',
  flexBasis: '100%',
  backgroundColor: 'black',

  padding: '0px 45px',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  // Postion To be fixed
  // position: 'sticky',
  position: 'sticky',
  top: '48px',
  zIndex: 100,

}));

// Vertical Align of comment
export const HeaderVerticalDivider = styled(Divider)(() => ({
  '&.MuiDivider-vertical': {
    width: '1px',
    flex: 1, // Extend on the main axis of the flex box
    margin: '10px auto',
    border: 'none',
    color: theme.palette.third?.main,
    backgroundColor: theme.palette.third?.main,
  },
}
));

export const TopPostVotesConatiner = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  // justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: '5px',

  '& > *': {
    margin: '0px 5px',
    color: theme.palette.white.main,
  },

  '& > .MuiDivider-root': {
    backgroundColor: theme.palette.white.main,
  },

  '&': {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));
export const MultiLevelHeaderVotes = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  // justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: '5px',

  '& > *': {
    margin: '0px 5px',
    color: theme.palette.white.main,
  },

  '& > .MuiDivider-root': {
    backgroundColor: theme.palette.white.main,
  },

}));

export const CloseButton = styled(Box)(() => ({
  '&.MuiButton-text': {
    textTransform: 'capitalize',
    backgroundColor: 'red',
  },
}));
