import {
  List, styled, alpha,
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
      backgroundColor: 'transparent',
    },
    '& .MuiListItemText-root': {
      paddingRight: '150px',
      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
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
    '& .MuiListItemText-root': {
      margin: '0px',
      [theme.breakpoints.down('lg')]: {
        display: 'flex',
      },
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
