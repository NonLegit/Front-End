// MUI Components
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// StatisticsIcon
export const StatisticsIcon = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  border: '2px solid black',
}));

// StatisticsIcon
export const StatisticsCaption = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',

  border: '2px solid green',
}));
