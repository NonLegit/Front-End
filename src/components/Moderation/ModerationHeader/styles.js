import { styled } from '@mui/material/styles';
import {
  AppBar, Avatar, Link, Toolbar, Typography,
} from '@mui/material';

export const Header = styled(AppBar)(() => ({
  height: 40,
  marginTop: 48,
  paddingLeft: 24,
  boxShadow: 'none',
}));

export const HeaderText = styled('div')(() => ({
  marginLeft: 3,
  fontSize: 12,
  fontWeight: 600,
  display: 'flex',
}));

export const HeaderLink = styled(Link)(() => ({
  marginLeft: 3,
  fontWeight: 'bolder',
  letterSpacing: 0.7,
  textTransform: 'uppercase',
}));

export const HeaderToolbar = styled(Toolbar)(() => ({
  minHeight: 40,
}));

export const HeaderSubpage = styled(Typography)(() => ({
  marginLeft: 3,
  fontSize: 12,
  letterSpacing: 0.7,
  fontWeight: 700,
  textTransform: 'uppercase',
}));

export const HeaderAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: 20,
  height: 20,
}));

export const HeaderAvatarText = styled('p')(() => ({
  fontSize: 15,
}));
