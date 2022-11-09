import {
  Box, Card, styled,
} from '@mui/material';

export const SidebarBox = styled(Box)(({ theme }) => ({
  width: 312,
  height: 'fit-content',
  marginLeft: 24,
  flex: '0 0 312px',
  display: 'block',
  [theme.breakpoints.between('0', '950')]: {
    display: 'none',
  },
}));

export const InfoBox = styled(Card)(() => ({
  height: 'fit-content',
  backgroundColor: 'white',
  border: '1px solid #ccc',
  boxShadow: 'none',
  marginTop: 10,
  marginBottom: 10,
  padding: 12,
}));
