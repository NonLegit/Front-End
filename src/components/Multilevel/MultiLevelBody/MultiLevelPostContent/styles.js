// MUI Components
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// MultiLevelContentConatiner
export const MultiLevelContentConatiner = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',

  padding: '0px 10px',
  marginTop: '5px',

  '& > *': {
    margin: '10px 0px',
  },

  // border: '5px solid #abcabc',
}));
