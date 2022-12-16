import { styled } from '@mui/system';

export const MainContentContainer = styled('div')(({ theme, width }) => ({
  [theme.breakpoints.up('md')]: {
    width,
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));
