import {
  List, styled,
} from '@mui/material';

export const StyledList = styled(List)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
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
    overflow: 'auto',
    '&:hover': {
      backgroundColor: '#cacbcd',
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
