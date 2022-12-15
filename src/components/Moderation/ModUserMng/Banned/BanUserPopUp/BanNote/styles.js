import { Box, Typography, styled } from '@mui/material';

export const StyledBox = styled(Box)(() => ({
  padding: '0px 16px 16px 16px',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  flexDirection: 'column',
}));

export const StyledFont = styled(Typography)(() => ({
  color: '#878A8C',
  fontSize: '10px',
  marginBottom: '8px',
}));
