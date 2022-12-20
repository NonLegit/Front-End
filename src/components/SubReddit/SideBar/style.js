import { styled } from '@mui/material/styles';

export const SideBarContainer = styled('div')(({ theme, createPost }) => ({
  [theme.breakpoints.between('0', '1000')]: {
    display: 'none',
  },
  width: 312,
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 24,
  backgroundColor: 'transparent',
  position: 'relative',
  marginTop: createPost ? 70 : 16,
}));
export const CommunityContainer = styled('div')({
  background: 'white',
  borderRadius: 4,
  marginBottom: 16,
  maxWidth: '100%',
  backgroundColor: 'white',
});
