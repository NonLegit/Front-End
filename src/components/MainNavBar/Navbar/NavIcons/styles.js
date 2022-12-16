import {
  styled, Tooltip, MenuItem,
  IconButton, Menu,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { tooltipClasses } from '@mui/material/Tooltip';

export const StyledTooltip = styled(({ className, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export const NotificationButton = styled(IconButton)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '&:active::after': {
    boxShadow: '0 0 0 0 rgba(0, 123, 255, 0.5)',
    position: 'absolute',
    borderRadius: '5px',
    left: 0,
    top: 0,
    opacity: 1,
    transition: '0s',
  },
}));
export const NotificationContent = styled(MenuItem)(() => ({
  padding: '8px',
  width: '400px',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'default',
  '&:hover': {
    backgroundColor: 'white',
  },
}));
export const NotificationHeaderIcons = styled('div')(() => ({
  fontSize: '15px',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
}));
export const NotificationIcons = styled('div')(() => ({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
}));
export const NotificationContanier = styled(Menu)(() => ({
  '.MuiPaper-root': {

    cursor: 'default',
    '.MuiList-root': {
      cursor: 'default',
      '.MuiButtonBase-root': {
        cursor: 'default',
        backgroundColor: 'white !important',
        '&:hover': {
          backgroundColor: 'white',
        },
        '&:click': {
          backgroundColor: 'white',
        },
      },
    },
  },
  height: '600px',
  left: '-10%',
}));
export const LinkTo = styled(Link)(() => ({
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'black',
  paddingRight: '5px',
  borderRight: '1px solid #EDEFF1',
}));
export const SeeAll = styled(Link)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#24A0ED',
  background: '#F6F7F8',
  padding: ' 0 12px',
  height: '49px',
  fontWeight: '700',
  fontSize: 'large',
  cursor: 'pointer',
  textDecoration: 'none',
}));
