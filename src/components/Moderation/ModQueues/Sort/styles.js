import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Select = styled(Box)(() => ({
  display: 'flex',
  '&:hover': {
    cursor: 'pointer',
  },
}));

export const SelectText = styled(Typography)(() => ({
  fontWeight: 700,
  display: 'flex',
  alignItems: 'center',
}));
