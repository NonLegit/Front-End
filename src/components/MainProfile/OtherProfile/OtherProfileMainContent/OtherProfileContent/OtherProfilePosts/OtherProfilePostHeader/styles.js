import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const HeaderPost = styled(Box)(() => ({
  display: 'flex',
  marginTop: 8,
  minHeight: 24,
  marginBottom: 8,
  flexWrap: 'nowrap',
  position: 'relative',
  width: '100%',
  alignItems: 'center',
}));

export const HeaderAvatar = styled(Box)(() => ({
  width: 20,
  height: 20,
  borderRadius: 20,
}));

export const HeaderAvatarImage = styled('img')(() => ({
  width: 20,
  height: 20,
}));

export const Joined = styled(Button)(() => ({
  textTransform: 'unset',
  borderRadius: 999,
  height: 24,
  width: 'fit-content',
  position: 'absolute',
  fontSize: 12,
  fontWeight: 700,
  right: 7,
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
  },
}));

export const LinkTo = styled(Link)(() => ({
  textDecoration: 'none',
  color: '#787c7e',
  display: 'flex',
  alignItems: 'center',
  marginLeft: 8,
}));
