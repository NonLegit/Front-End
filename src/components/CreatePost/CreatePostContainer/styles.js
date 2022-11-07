import { styled } from '@mui/system';

export const MainContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
}));

export const OuterContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#DAE0E6',
  width: '100%',
  height: '450vh',
  padding: '0 24px',
  [theme.breakpoints.down('sm')]: {
    padding: '0 10px',
  },
}));
