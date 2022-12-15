import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const EmptyBox = styled(Box)(() => ({
  height: 380,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  marginTop: 10,
  padding: 85,
  flexDirection: 'column',
}));
export const Image = styled('img')(({ src }) => ({
  src: `url(${src})`,
  height: 150,
  width: 150,
  marginBottom: 20,
}));
