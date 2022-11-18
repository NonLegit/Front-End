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
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#24a0ed',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E9E9EA',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));
