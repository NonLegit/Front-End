import {
  List, styled,
} from '@mui/material';

const StyledList = styled(List)(({ theme }) => ({
  position: 'relative',
  '& .MuiButtonBase-root': {
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    width: 'auto',
    '&:hover': {
      backgroundColor: '#f6f7f8',
    },
    '& .MuiListItemText-root': {

      paddingRight: '150px',
      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
    },
    paddingTop: '0px',
    paddingBottom: '0px',
    [theme.breakpoints.down('lg')]: {
      padding: '0px',
    },
  },
  '& .MuiCollapse-root .MuiList-root': {
    boxShadow: '0 2px 4px 0 rgba(28,28,28,0.2)',
    [theme.breakpoints.between('0', '400')]: {
      left: '-60px',
      width: '250px',
    },
  },

  '& .MuiCollapse-root .MuiButtonBase-root': {
    padding: '8px 25px',
    backgroundColor: 'white',
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
    '& .MuiAvatar-root': {
      backgroundColor: '#D7DFE2',
      width: '20px',
      height: '20px',
      borderRadius: '0px',
    },
  },
}));

export default StyledList;
