import { Box, styled } from '@mui/material';

export const StyledDetails = styled(Box)(() => ({
  backgroundColor: '#edeff1',
  flexDirection: 'column',
  '& .MuiBox-root': {
    width: '100%',
    display: 'flex',
  },
}));
