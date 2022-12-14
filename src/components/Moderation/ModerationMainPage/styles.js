import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ModMainPage = styled(Box)(() => ({
  backgroundColor: '#dae0e6',
  marginLeft: 280,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
}));

export const ModBox = styled(Box)(() => ({
  backgroundColor: 'white',
  margin: 30,
  padding: 60,
  height: '40%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
}));
