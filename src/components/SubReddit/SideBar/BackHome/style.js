import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

// eslint-disable-next-line import/prefer-default-export
export const BackHome = styled(Button)(({
  fontSize, padding, fontWeight, backgroundColor,
}) => ({
  boxShadow: 'none',
  backgroundColor,
  fontSize,
  padding,
  borderRadius: 20,
  textTransform: 'initial',
  minWidth: 'auto',
  fontWeight,
  top: 'calc(100vh - 8px)',
  transform: 'translateY(-100%)',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'sticky',
  margin: 90,
}));
export default BackHome;
