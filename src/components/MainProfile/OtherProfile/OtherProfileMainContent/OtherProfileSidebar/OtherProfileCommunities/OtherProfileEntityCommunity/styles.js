import {
  Box, Button, styled,
} from '@mui/material';
import { Link } from 'react-router-dom';

export const ComminityBox = styled(Box)(() => ({
  width: '100%',
  height: 36,
  display: 'flex',
  alignItems: 'center',
  marginTop: 10,
  position: 'relative',
}));

export const HeaderAvatar = styled(Box)(() => ({
  width: 32,
  height: 32,
  fontSize: 32,
  marginRight: 8,
}));

export const HeaderAvatarImage = styled('img')(() => ({
  width: 32,
  height: 32,
}));

export const SubReddit = styled(Link)(() => ({
  color: 'black',
  textDecoration: 'none',
  fontSize: 13,
  height: 'fit-content',
  fontFamily: "'Mukta', sans-serif",
  fontWeight: 500,
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const Joined = styled(Button)(() => ({
  textTransform: 'unset',
  borderRadius: 999,
  height: 32,
  width: 106,
  position: 'absolute',
  fontWeight: 700,
  right: 0,
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
  },
}));
