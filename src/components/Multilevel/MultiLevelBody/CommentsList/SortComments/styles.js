import {
  List, ListItemText, ListItemButton as li, Fab as Fa,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const ShowMoreList = styled(List)(({ theme, display }) => ({
  display,
  position: 'absolute',
  left: 0,
  top: '100%',
  borderRadius: 4,
  padding: 0,
  backgroundColor: 'white',
  '& .MuiListItemText-root .MuiTypography-root': {
    fontSize: 13,
    fontWeight: 400,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    margin: '0px 8px',
  },
  '& .MuiListItemButton-root': {
    padding: 8,
  },
  '& .MuiListItemButton-root:hover >*': {
    color: '#000',
  },
  zIndex: theme.zIndex.tooltip,
  '& .MuiListItemButton-root:first-of-type': {
    borderRadius: '7px 7px 0 0',
  },
}));

export const ShowMoreListItemText = styled(ListItemText)(({ Condition }) => ({
  textTransform: 'capitalize',
  whiteSpace: 'nowrap',
  textAlign: 'left',
  backgroundColor: 'inherit',
  outline: 'none',
  fontSize: 12,
  lineHeight: 18,
  fontWeight: 400,
  alignItems: 'center',
  '&:hover': {
    backgroundColor: '#e9f5fd',
    outline: 'none',
  },
  '&:active': {
    color: '#0079d3',
  },
  ...((Condition === 'true') && {
    color: '#0079d3',
  }),
}));

export const ListItemButton = styled(li)(() => ({
  textTransform: 'capitalize',
  whiteSpace: 'nowrap',
  textAlign: 'left',
  backgroundColor: 'white',
  height: 34,
  width: 120,
  outline: 'none',
  color: '#878a8c',
  fontSize: 12,
  lineHeight: 18,
  fontWeight: 400,
  alignItems: 'center',
  '&:hover': {
    backgroundColor: '#e9f5fd',
    outline: 'none',
  },
  '&:active': {
    color: '#0079d3',
  },
}));

export const Fab = styled(Fa)(() => ({
  fontSize: 12,
  textTransform: 'capitalize',
  '& .MuiFab-root': {
    boxShadow: 'none',
    borderRadius: 999,
    backgroundColor: '#edeeef',
  },
  boxShadow: 'none',
  py: 0.4,
  m: 2,
  backgroundColor: 'transparent',
  borderRadius: 999,
  marginRight: 0,
  paddingTop: 8,
  paddingBottom: 8,
  whiteSpace: 'nowrap',
  textAlign: 'left',
  height: 24,
  outline: 'none',
  color: '#1a1a1b',
  fontWeight: 400,
  alignItems: 'center',
  '&:hover': {
    backgroundColor: '#edeeef',
    outline: 'none',
  },
  '&:active': {
    backgroundColor: '#edeeef',
  },
}));

export const Header = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  marginRight: 4,
  height: 24,
  width: 917,
  alignItems: 'center',
  boxSizing: 'border-box',
  textAlign: 'center',
  fontFamily: 'Noto Sans,Arial,sans-serif',
  fontSize: 14,
  letterSpacing: 'unset',
  lineHeight: 17,
  textTransform: 'unset',
  marginBottom: 4,
});
