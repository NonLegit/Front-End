import {
  Box, Button, IconButton, styled,
} from '@mui/material';

export const BlockedBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  alignItems: 'center',
  width: '100%',
  height: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

export const Image = styled('img')(() => ({
  top: 0,
  width: '100%',
  marginBottom: 30,
  zIndex: -1,
}));

export const Icon = styled('img')(() => ({
  marginTop: -90,
  width: 122,
  height: 122,
  borderRadius: 108,
  border: '7px solid white',
}));

export const BlockedIcon = styled(IconButton)(() => ({
  marginTop: -30,
  marginLeft: 80,
}));

export const BlockedButton = styled(Button)(() => ({
  marginTop: 20,
  width: 260,
  borderRadius: 5,
  height: 50,
  fontWeight: 700,
  boxShadow: 'none',
  '&:hover': { boxShadow: 'none' },
}));
