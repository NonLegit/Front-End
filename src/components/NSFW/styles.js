import {
  Box, Button, styled,
} from '@mui/material';

export const ImageWarning = styled('img')(() => ({
  width: 240,
  height: 128,
  marginBottom: 30,
}));

export const NotFoundBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

export const BackHomeButton = styled(Button)(() => ({
  width: 150,
  borderRadius: 30,
  height: 30,
  boxShadow: 'none',
  marginLeft: 10,
  marginRight: 10,
  '&:hover': { boxShadow: 'none' },
}));
