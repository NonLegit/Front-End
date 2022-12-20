import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SwitchPagesBox = styled(Box)(() => ({
  backgroundColor: 'white',
  display: 'flex',
  height: 36,
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginTop: 10,
  marginBottom: 30,
}));
export const SwitchButton = styled(Button)(() => ({
  textTransform: 'none',
  minWidth: 60,
}));
