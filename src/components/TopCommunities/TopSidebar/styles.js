import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TopSideBox = styled(Box)(() => ({
  backgroundColor: 'white',
  width: 312,
  marginLeft: 24,
  borderRadius: 4,
  border: '1px solid #ccc',
  position: 'relative',
  height: 'fit-content',
  marginBottom: 20,
}));

export const HeaderText = styled(Typography)(() => ({
  marginTop: -30,
  marginLeft: 20,
  color: 'white',
  fontSize: 16,
  fontWeight: 700,
  position: 'absolute',
  letterSpacing: 1,
}));

export const ShadowBox = styled(Box)(() => ({
  backgroundImage: 'linear-gradient(0deg,#000000b3,transparent)',
  height: '80px',
  width: '100%',
  marginTop: '-80px',
  position: 'absolute',
}));

export const ShowAllBtn = styled(Button)(({ theme }) => ({
  margin: '10px auto',
  borderRadius: 999,
  width: '90%',
  textTransform: 'unset',
  letterSpacing: 1,
  fontWeight: 700,
  height: 30,
  border: `1px solid ${theme.palette.primary.main}`,
}));
