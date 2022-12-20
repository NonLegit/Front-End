import { Box, styled, Link } from '@mui/material';

export const HeaderContainer = styled(Box)(() => ({
  backgroundColor: '#dae0e6',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexDirection: 'column',
  padding: '16px 0px',
  margin: 'auto',
}));

export const StyledLink = styled(Link)(() => ({
  color: '#0079D3',
  cursor: 'pointer',
  fontSize: '12px',
}));
