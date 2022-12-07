import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MyCategory = styled('Button')(({ condition }) => ({
  height: 41,
  fontSize: 'inherit',
  borderRadius: 9999,
  borderColor: 'transparent',
  backgroundColor: 'transparent',
  fontWeight: 700,
  paddingTop: 11,
  paddingBottom: 12,
  paddingRight: 20,
  paddingLeft: 20,
  marginRight: 4,
  '&:hover': {
    backgroundColor: '#edeeef',
  },
  '&:active': {
    backgroundColor: '#f6f7f8',
  },
  ...((condition === 'true') && {
    backgroundColor: '#f6f7f8',
  }),
}));
export const Header = styled('div')({
  display: 'flex',
  position: 'relative',
  marginRight: 4,
  height: 41,
  width: 917,
  boxSizing: 'border-box',
  textAlign: 'center',
  fontFamily: 'Noto Sans,Arial,sans-serif',
  fontSize: 14,
  letterSpacing: 'unset',
  lineHeight: 17,
  textTransform: 'unset',
  minHeight: 32,
  minWidth: 32,
});

export const HeaderContainer = styled('div')({
  alignItems: 'left',
  marginBottom: 24,
});

export const TotalHeader = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  background: '#dae0e6',
  height: '100vh',
  margin: '0 auto',
});

export const SearchContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '24px 24px 0',
  maxWidth: 'calc(100% - 48px)',
  margin: '0 auto',
});

export const PostsContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    width: 640,
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

export const SearchHeadderContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    width: 976,
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  margin: '0 auto',
}));
