import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// MultiLevel Container
export const MultiLevelConatiner = styled(Box)(() => ({
  backgroundColor: '#2E2F30',

  padding: '0px 20px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  // alignItems: 'space-around',
  // justifyContent: 'flex-start',
}));
