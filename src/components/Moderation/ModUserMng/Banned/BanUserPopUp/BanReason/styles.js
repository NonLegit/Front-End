import {
  Box, Typography, styled, MenuItem,
} from '@mui/material';

export const StyledBox = styled(Box)(() => ({
  padding: '0px 16px 16px 16px',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  flexDirection: 'column',
}));

export const StyledFont = styled(Typography)(() => ({
  color: '#878A8C',
  fontSize: '12px',
  marginBottom: '8px',
}));

export const StyledMenuItem = styled(MenuItem)(() => ({
  padding: '8px 16px 8px 8px',
  fontSize: '14px',
  '&:hover': {
    backgroundColor: '#e9f5fd',
    color: 'black',
  },
}));
