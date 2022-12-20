import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CrossBox = styled(Box)(() => ({
  display: 'flex',
  marginTop: 10,
  minHeight: 24,
  marginBottom: 3,
  flexWrap: 'wrap',
  alignItems: 'center',
  maxWidth: '90%',
  padding: 4,
  border: 'thin solid #edeff1',
  borderRadius: 4,
}));
