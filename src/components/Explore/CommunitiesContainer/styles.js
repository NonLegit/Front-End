import { Box, styled } from '@mui/material';

export const StyledCommunitiesContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.between('0px', '650px')]: {
    width: 'auto',
  },
  [theme.breakpoints.up('650px')]: {
    minWidth: '640px',
  },
}));
