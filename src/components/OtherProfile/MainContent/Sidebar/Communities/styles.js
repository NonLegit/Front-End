import {
  Avatar, Box, Button, styled,
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

export const HeaderAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: 32,
  height: 32,
  fontSize: 32,
  marginRight: 8,
}));

export const HeaderAvatarText = styled('p')(() => ({
  fontSize: 20,
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

  right: 0,
  '&:hover': {
    // backgroundColor: '#f5fafd',
  },
}));
