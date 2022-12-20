// MUI Components
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Statictics Bar
export const StaticticsContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',

  '&': {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  // marginLeft: '-5px',

  // '& > * :not(p)': {
  //   height: '100%',
  //   cursor: 'pointer',
  // },

  // border: '2px solid red',

}));

// StatisticsIcon
export const StatisticsIcon = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10px',
  // border: '2px solid black',
}));

// StatisticsIcon
export const StatisticsCaption = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  // border: '2px solid green',

  '& > *': {
    margin: '0px 2px',
  },

}));
