import {
  AppBar, Button, styled, Dialog,
} from '@mui/material';
import theme from '../../../styles/theme';

export const StyledNavbar = styled(AppBar)(() => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: 'white',
  borderColor: 'white',
  borderStyle: 'solid',
  borderWidth: 1,
  position: 'sticky',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #edeff1',
  padding: '0px 20px',
  boxShadow: 'none',
  height: '48px',
  '& .MuiToolbar-root': {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
    height: '48px',
    flexGrow: '1',
    '@media (min-width: 600px)': {
      minHeight: '48px',
    },
  },
}));

export const HomeButton = styled(Button)(() => ({
  cursor: 'default',
  fontSize: '15px',
  width: '340px',
  justifyContent: 'flex-start',
  backgroundColor: 'white',
  bottom: '0px',
  borderRadius: '4px',
  color: '#1c1c1c',
  height: '100%',
  left: '0px',
  lineHeight: '34px',
  padding: '0px 56px 0px 40px',
  position: 'relative',
  textAlign: 'left',
  textOverflow: 'ellipsis',
  top: '0px',
  whiteSpace: 'nowrap',
  border: 'none',
  textTransform: 'capitalize',
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
  },
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
  '&:hover': {
    backgroundColor: 'white',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '20px',
  },
}));

export const StyledDialog = styled(Dialog)(({ fullscreen }) => ({
  '& .MuiDialog-paper': {
    width: '400px',
    height: '640px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fullscreen,
    '& .MuiButtonBase-root': {
      justifyContent: 'center',
      alignItems: 'center',
      color: '#1A1A1B',
      textTransform: 'none',
      borderRadius: '20px',
      width: '280px',
      height: '44px',
      margin: '8px 0px',
      fontSize: '14px',
      padding: '0px 12px',
      border: '1px solid #dadce0',
      boxSizing: 'border-box',
      '&:hover': {
        backgroundColor: '#f8faff ',
        borderColor: '#d2e3fc',
      },
    },
  },
}));
