import {
  List, styled, alpha, Link, Typography,
} from '@mui/material';

const StyledList = styled(List)(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
  },
  '& .MuiCollapse-wrapperInner': {
    height: '465px',
    overflowY: 'scroll',
  },
  '& .MuiButtonBase-root': {
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    width: 'auto',
    '&:hover': {
      backgroundColor: '#edeff1 !important',
    },
    '& .MuiListItemText-root': {
      paddingRight: '150px',
      marginLeft: 3,
      fontSize: 12,
      fontWeight: 600,
      display: 'flex',
    },
    [theme.breakpoints.down('lg')]: {
      padding: '0px',
    },
    paddingTop: '0px',
    paddingBottom: '0px',
  },

  '& .MuiCollapse-root .MuiButtonBase-root': {
    padding: '8px 25px',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: alpha('#000000', 0.04),
    },
    '&.Mui-disabled': {
      opacity: 1,
      '& .MuiTypography-root': { color: '#878a8c !important' },
      '& .MuiSvgIcon-root': { color: '#878a8c !important' },
    },
    '& .MuiListItemText-root': {
      margin: '0px',
      '& .MuiTypography-root': {
        fontSize: '14px',
        marginLeft: '8px',
        whiteSpace: 'nowrap',
        color: '#000000',
        textTransform: 'capitalize',
      },
    },
  },
  '& .MuiListItemIcon-root': {
    display: 'contents',
    '& .MuiSvgIcon-root': {
      fontSize: 22,
      color: '#3a3643',
    },
  },
}));

export default StyledList;

export const HeaderText = styled('div')(({ theme }) => ({
  marginLeft: 3,
  fontSize: 12,
  fontWeight: 600,
  display: 'flex',
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
  },
}));

export const HeaderLink = styled(Link)(({ theme }) => ({
  marginLeft: 3,
  fontWeight: 'bolder',
  letterSpacing: 0.7,
  textTransform: 'uppercase',
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
  },
}));

export const HeaderSubpage = styled(Typography)(() => ({
  marginLeft: 3,
  fontSize: 12,
  letterSpacing: 0.7,
  fontWeight: 700,
  textTransform: 'uppercase',
}));
