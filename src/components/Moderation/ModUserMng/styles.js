import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const UserMngButton = styled(Button)(() => ({
  backgroundColor: 'white',
  fontSize: '14px',
  fontWeight: 'bold',
  textTransform: 'Capitalize',
  borderRadius: 20,
  '&:hover': {
    backgroundColor: '#ededed',
  },
}));
