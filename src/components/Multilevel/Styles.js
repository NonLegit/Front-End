// MUI Components
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// MultiLevel Container
export const MultiLevelConatiner = styled(Box)(() => ({
  backgroundColor: '#2E2F30',

  padding: '0px 60px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  // alignItems: 'space-around',
  // justifyContent: 'flex-start',
}));

// MultiLevelBody Left Container
export const MultiLevelContentConatiner = styled(Box)(() => ({
  flexBasis: '100%',
  backgroundColor: '#DAE0E6',

  padding: '20px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  flexWrap: 'nowrap',
}));
