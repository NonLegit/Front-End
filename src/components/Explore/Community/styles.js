import { Box, styled, Button } from '@mui/material';

export const StyledCommunityContainer = styled(Box)(() => ({
  background: 'white',
  display: 'flex',
  maxWidth: '640px',
  marin: 'auto',
}));

export const StyledCommunity = styled(Box)(() => ({
  display: 'flex',
  padding: '16px',
}));

export const StyledDiscription = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  maxWidth: '486px',
}));

export const VisitButton = styled(Button)(() => ({
  fontSize: '12px',
  fontWeight: 'bold',
  textTransform: 'lowercase',
  padding: '8px 0px',
  justifyContent: 'flex-start',
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));
