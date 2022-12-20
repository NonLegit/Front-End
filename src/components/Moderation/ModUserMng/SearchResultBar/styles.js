import { Box, styled } from '@mui/material';

export const StyledSearchResultBar = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#ffffff',
  borderRadius: '4px 4px 0 0',
  height: '48px',
  margin: '0px 24px',
  '& .MuiButtonBase-root': { marginRight: '25px' },
}));
