import {
  Box, Button, styled,
} from '@mui/material';

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

export const Image = styled('img')(() => ({
  width: 125,
  height: 125,
  marginBottom: 30,
}));

export const BackHomeButton = styled(Button)(() => ({
  width: 400,
  borderRadius: 30,
  height: 30,
  boxShadow: 'none',
  '&:hover': { boxShadow: 'none' },
}));
