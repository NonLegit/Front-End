import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ModMainPage = styled(Box)(({ theme }) => ({
  backgroundColor: '#dae0e6',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('lg')]: {
    marginLeft: 280,
  },
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
