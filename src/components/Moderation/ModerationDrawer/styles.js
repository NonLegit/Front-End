import {
  Drawer,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const Navbar = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
  },
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
  marginTop: 2,
  '& .MuiDrawer-paper': {
    backgroundColor: '#f6f7f8',
    width: 280,
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  },
}));
