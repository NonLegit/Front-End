import {
  Avatar,
  Box, Button, styled,
} from '@mui/material';
import { Link } from 'react-router-dom';

export const FollowerBox = styled(Box)(() => ({
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '8px 16px',
  display: 'flex',
}));

export const LinkToProfile = styled(Link)(() => ({
  padding: '4px 8px 4px 4px',
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'unset',
  color: 'black',
  '&:hover': {
    backgroundColor: '#edeff1',
  },
}));

export const FollowerPhoto = styled(Avatar)(() => ({
  marginRight: 10,
  width: 32,
  height: 32,
  borderRadius: 2,
}));

export const FollowingButton = styled(Button)(({ notfollowing }) => ({
  color: '#878a8c',
  textTransform: 'unset',
  fontWeight: 700,
  borderRadius: 9999,
  padding: '4px 16px',
  minWidth: 112,
  minHeight: 40,
  '&:hover': {
    backgroundColor: '#ededed',
  },
  ...((notfollowing === 'true') && {
    color: '#0079d3',
    backgroundColor: '#f6f7f8',
    '&:hover': {
      backgroundColor: '#f6f7f8',
    },

  }),
}));
