import { styled } from '@mui/material/styles';

export const SideBarContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  width: 312,
  height: 4000,
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 24,
  backgroundColor: 'transparent',
  position: 'relative',
}));
export const CommunityContainer = styled('div')({
  background: 'white',
  borderRadius: 4,
  marginBottom: 16,
  maxWidth: '100%',
  backgroundColor: 'white',
});
