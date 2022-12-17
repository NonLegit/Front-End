import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const UserMngButton = styled(Button)(() => ({
  fontSize: '14px',
  fontWeight: 'bold',
  textTransform: 'Capitalize',
  borderRadius: 20,
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: '#ededed',
  },
}));
