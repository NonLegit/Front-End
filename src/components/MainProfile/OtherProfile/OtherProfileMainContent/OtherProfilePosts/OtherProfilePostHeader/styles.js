import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const HeaderPost = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  minHeight: 24,
  flexWrap: 'wrap',
}));

export const Joined = styled(Button)(() => ({
  textTransform: 'unset',
  borderRadius: 999,
  height: 24,
  width: 'fit-content',
  fontSize: 12,
  fontWeight: 700,
  marginLeft: 5,
  alignSelf: 'center',
  marginTop: -5,
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
}));

export const LinkCross = styled(Link)(() => ({
  color: '#787c7e',
  textDecoration: 'none',
  '&:hover': {
    color: 'black',
    textDecoration: 'underline',
  },
}));
