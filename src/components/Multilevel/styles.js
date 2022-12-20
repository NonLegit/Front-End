// MUI Components
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// theme
import theme from '../../styles/theme/index';

// MultiLevel Container
export const MultiLevelConatiner = styled(Box)(() => ({
  backgroundColor: theme.palette.offwhite.dark,

  padding: '0px 60px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',

  '&': {
    [theme.breakpoints.down('sm')]: {
      padding: '0px 0px',
    },
  },

  // border: '10px solid black',

}));

// MultiLevelBody Left Container
export const MultiLevelContentConatiner = styled(Box)(() => ({
  flexBasis: '100%',
  backgroundColor: theme.palette.offwhite.main,

  padding: '20px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  flexWrap: 'wrap',

  // border: '10px solid pink',

}));
