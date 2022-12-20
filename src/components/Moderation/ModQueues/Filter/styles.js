import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FilterBox = styled(Box)(() => ({
  backgroundColor: 'white',
  display: 'flex',
  height: 36,
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 10,
  flexDirection: 'row-reverse',
}));

export const FilterText = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[500],
  fontWeight: 700,
  marginRight: 4,
}));
