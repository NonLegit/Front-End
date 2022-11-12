import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const MainContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
});

export const OuterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#DAE0E6',
  width: '100%',
  padding: '0 24px',
  [theme.breakpoints.down('sm')]: {
    padding: 5,
  },
}));
