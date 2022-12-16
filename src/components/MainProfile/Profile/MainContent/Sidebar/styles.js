import {
  Box, Card, styled,
} from '@mui/material';

export const SidebarBox = styled(Box)(({ theme }) => ({
  width: 312,
  minHeight: 'calc(100vh - 48px);',
  marginLeft: 24,
  flex: '0 0 312px',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.between('0', '1000')]: {
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
