import { styled } from '@mui/system';

export const SideBarContainer = styled('div')(({ theme, responsive }) => ({

  [theme.breakpoints.between('0', '1000')]: {
    display: responsive ? 'none' : 'block',
  },

  width: 312,
  marginLeft: 24,
  position: 'relative',
}));
