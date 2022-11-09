import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../../styles/theme';

export const ChooseUsernameContainer = styled(Box)(() => ({
  width: '100%',
  minHeight: '100vh',
  minWidth: '320px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
}));

export const Header = styled(Box)(() => ({
  width: '100%',
  padding: '10px 24px',
  borderBottom: '1px solid hsla(195,2%,65%,.36)',
  display: 'flex',
  flexDirection: 'column',
  flex: 0,
}));

export const Body = styled(Box)(() => ({
  width: '100%',
  padding: '20px',
  flex: '1',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
}));

export const SuggestionBox = styled(Box)(() => ({
  minWidth: '200px',
  margin: '5px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
}));

export const TopBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

}));

export const SuggestLink = styled('a')(() => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
  margin: '2px 0px',
}));

export const Footer = styled(Box)(() => ({
  width: '100%',
  padding: '0px 10px',
  borderTop: '1px solid hsla(195,2%,65%,.36)',
  bottom: 0,
  flex: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

}));

export const BackLink = styled('a')(() => ({
  color: 'black',
  fontSize: '14px',
  textDecoration: 'none',
  fontWeight: 500,

  '&:hover': {
    color: theme.palette.primary.main,
  },
}));
