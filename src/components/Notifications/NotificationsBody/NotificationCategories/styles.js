import styled from '@emotion/styled';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export const Notification = styled('div')(() => ({
  padding: '16px',
  display: 'flex',
  borderBottom: '1px solid #EDEFF1',
}));
export const ImageContiner = styled('div')(() => ({
  paddingRight: 8,
  position: 'relative',
}));
export const NotificationImage = styled('img')(() => ({
  borderRadius: ' 50%',
  height: '32px',
  width: '32px',
  objectFit: 'cover',
}));
export const ChildImage = styled('span')(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  border: '1px solid #edeff1',
  borderRadius: ' 50%',
  boxShadow: ' 0 2px 4px rgb(0 0 0 / 5%)',
  height: '20px',
  left: '12px',
  position: 'absolute',
  top: '18px',
  width: '20px',
  color: theme.palette.primary.main,
  '& svg': {
    fontSize: 'medium',
    paddingLeft: '1px',
  },
}));
export const NotificationBody = styled('div')(() => ({
  cursor: 'pointer',
  flex: '1 0',
}));
export const ContainerHead = styled('div')(() => ({
  display: 'flex',
  justifyContent: ' space-between',
  alignItems: 'start',
}));
export const BodyHead = styled('div')(() => ({
  fontSize: ' 18px',
  lineHeight: '20px',
}));
export const Body = styled('div')(() => ({
  fontWeight: '400',
  color: '#7c7c7c',
}));
export const SeeMore = styled('div')(() => ({
  '& .MuiButtonBase-root': {
    padding: 0,
  },
}));
export const Options = styled(MenuItem)(({ theme }) => ({
  font: '-webkit-mini-control',
  fontWeight: '600',
  fontSize: '14px',
  padding: '8px',
  lineHeight: '18px',
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.grey[500],
  },
}));
export const MenuOptions = styled(Menu)(() => ({
  '& .MuiPaper-elevation': {
    boxShadow: '0 2px 4px 0 rgba(28,28,28,0.2)',
  },
}));
export const NotificationTime = styled('span')(({ theme }) => ({
  color: theme.palette.grey[500],
  fontSize: 'smaller',
}));
