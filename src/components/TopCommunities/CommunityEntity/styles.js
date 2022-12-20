import {
  Avatar, Box, Button, ListItem, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const CommunityListItem = styled(ListItem)(({ sidebar, theme }) => ({
  padding: '8px 8px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
  ...((sidebar !== 'true') && {
    minHeight: 64,
    padding: '8px 15px 8px 25px',
  }),
  [theme.breakpoints.between('0', '450')]: {
    flexDirection: 'column',
    alignItems: 'baseline',
  },
}));
export const CommunityName = styled(Typography)(() => ({
  fontSize: 14,
  color: '#1c1c1c',
  fontWeight: 'bold',
  maxWidth: 200,
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

export const Joined = styled(Button)(({ theme }) => ({
  textTransform: 'unset',
  borderRadius: 999,
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
  },
  fontSize: 12,
  padding: '2px 16px',
  fontWeight: 'bold',
  position: 'absolute',
  right: 100,
  [theme.breakpoints.between('0', '450')]: {
    position: 'relative',
    right: 0,

  },
}));

export const ResposiveBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.between('0', '450')]: {
    marginTop: 20,
    display: 'flex',
  },
}));
