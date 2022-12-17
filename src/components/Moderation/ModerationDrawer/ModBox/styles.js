import {
  Box, ListItemButton, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const NavbarBox = styled(Box)(() => ({
  display: 'flex',
  height: 36,
  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 20,
  paddingRight: 20,
  alignItems: 'center',
  color: '#878a8c',
}));

export const QueueTypography = styled(Typography)(() => ({
  marginLeft: 8,
  fontSize: 10,
  textTransform: 'uppercase',
  letterSpacing: 0.5,
  fontWeight: 700,
  textAlign: 'center',
  height: 10,
}));

export const ModListButton = styled(ListItemButton)(({ theme, condition }) => ({
  height: 34,
  fontSize: 14,
  paddingTop: 8,
  paddingBottom: 8,
  paddingRight: 24,
  paddingLeft: 24,
  ...((condition === 'true') && {
    '&:before': {
      content: '" "',
      width: 4,
      height: '100%',
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      left: 0,
    },
    backgroundColor: '#edeff1',
  }),
}));
