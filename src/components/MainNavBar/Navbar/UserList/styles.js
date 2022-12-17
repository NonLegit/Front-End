import {
  List, styled, Switch,
} from '@mui/material';

export const StyledList = styled(List)(({ theme }) => ({
  position: 'relative',
  '& .MuiButtonBase-root': {
    paddingTop: '0px',
    '& .MuiAvatar-root': {
      backgroundColor: '#D7DFE2',
      width: '20px',
      height: '20px',
      borderRadius: '0px',
      marginRight: '10px',
    },
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  '& .MuiCollapse-root': {
    '& .MuiList-root': {
      boxShadow: '0 2px 4px 0 rgba(28,28,28,0.2)',
      position: 'absolute',
      width: '252px',
      left: '-80px',
      height: '340px',
      overflowY: 'auto',
      [theme.breakpoints.down('md')]: {
        left: '-135px',
      },
      [theme.breakpoints.between('0', '400')]: {
        left: '-155px',
      },
    },
    '& .MuiButtonBase-root': {
      padding: '8px 25px',
      backgroundColor: 'white',
      width: '100%',
      '&:hover': {
        backgroundColor: '#cacbcd',
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
  },
  '& .MuiListItemIcon-root': {
    display: 'contents',
    '& .MuiSvgIcon-root': {
      fontSize: 22,
      color: '#3a3643',
    },
  },
}));

export const SwitchButton = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  // the track width and heigth
  width: '44px',
  height: '23px',
  padding: 0,
  '& .MuiSwitch-switchBase': {
    width: '22px !important',
    height: '22px !important',
    padding: '0px !important',
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(22px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#24a0ed',
        opacity: 1,
        border: 0,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: '22px',
    height: '22px',
  },
  '& .MuiSwitch-track': {
    borderRadius: '35px',
    backgroundColor: '#cacbcd',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));
