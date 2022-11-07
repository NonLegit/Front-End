import styled from '@emotion/styled';
import { createTheme } from '@mui/material';

export const ContinerNotifications = styled('section')(() => ({
  background: '#dae0e6',
  minHeight: '100vh',
}));
export const HeaderContiner = styled('header')(({ theme }) => ({
  height: 131,
  margin: '0 auto',
  width: 648,
  [theme.breakpoints?.down('md')]: {
    width: 'fit-content',
  },
}));
export const NotificationsHead = styled('h1')(() => ({
  padding: ' 40px 0px 21px',
  fontSize: 22,
  fontWeight: '600',
  lineHeight: '26px',
  margin: 0,
}));
export const TabsContiner = styled('nav')(({ theme }) => ({

  display: 'flex',
  [theme.breakpoints?.down('sm')]: {
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingLeft: '12px',
  },
  [theme.breakpoints?.down('xs')]: {
    justifyContent: 'space-around',
  },
}));
export const TabText = styled('div')(() => ({
  marginLeft: 6,
}));
export const Tab = styled('div')(({ theme, index, active }) => ({
  fontWeight: '700',
  fontSize: '14px',
  color: '#848485',
  marginRight: index === '2' ? 'auto' : '',
  padding: ' 15px 17px 12px',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: index === '1' ? `3px solid ${theme.palette.primary.main}` : '',
  ...((active === 1) && {
    div: {
      color: 'black',
    },
  }),
  '&:hover div': {
    color: 'black',
  },
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
  },
  [theme.breakpoints?.down('sm')]: {
    marginRight: index === '2' ? '0px' : '',
  },
  [theme.breakpoints?.down('xs')]: {
    padding: '15px 14px 12px',
  },
}));

export const theme = createTheme({
  breakpoints: {
    values: {
      md: 670,
      sm: 500,
      xs: 386,
    },
  },
});
