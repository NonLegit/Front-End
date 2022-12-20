import { Box, styled } from '@mui/material';

export const NoResultBox = styled(Box)(() => ({
  backgroundColor: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '290px',
  width: 'auto',
  margin: '0px 24px',
  '& .MuiSvgIcon-root': {
    color: '#878A8C',
  },
}));
