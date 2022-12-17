import {
  Avatar, Box, Button, ListItem, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const CommunityListItem = styled(ListItem)(({ sidebar }) => ({
  padding: '8px 8px 8px 16px',
  cursor: 'pointer',
  ...((sidebar !== 'true') && {
    height: 64,
    padding: '8px 15px 8px 25px',

  }),
}));
export const CommunityName = styled(Typography)(() => ({
  fontSize: 14,
  color: '#1c1c1c',
  fontWeight: 'bold',
  maxWidth: 123,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));

export const CommunityImage = styled(Avatar)(({ sidebar }) => ({
  width: 32,
  height: 32,
  marginLeft: 8,
  marginRight: 8,
  ...((sidebar !== 'true') && {
    width: 40,
    height: 40,
  }),
}));

export const CommunityIndex = styled(Box)(() => ({
  marginRight: 10,
  marginLeft: 8,
  color: '#1c1c1c',
  fontWeight: 'bold',
}));

export const Joined = styled(Button)(() => ({
  textTransform: 'unset',
  borderRadius: 999,
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
  },
  fontSize: 12,
  padding: '2px 16px',
  fontWeight: 'bold',
}));
