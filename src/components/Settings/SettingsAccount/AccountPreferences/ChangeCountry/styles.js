import {
  List, ListItemText, ListItemButton as li, Fab as Fa,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const ShowMoreList = styled(List)(({ theme, display }) => ({
  display,
  position: 'absolute',
  left: '-5%',
  top: '100%',
  borderRadius: 4,
  padding: 0,
  backgroundColor: 'white',
  height: '200px',
  overflowY: 'scroll',
  overflowX: 'nono',
  boxShadow: '0 2px 4px 0 rgba(28,28,28,0.2)',

  '& .MuiListItemText-root .MuiTypography-root': {
    fontSize: 13,
    fontWeight: 700,
    whiteSpace: 'pre-wrap',
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
  display: 'flex',
  flexWrap: 'wrap',
  textAlign: 'left',
  backgroundColor: 'inherit',
  outline: 'none',
  fontSize: 12,
  lineHeight: 18,
  fontWeight: '600',
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
  width: 300,
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
  width: 300,
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
  color: '#878a8c',
  lineHeight: 18,
  fontWeight: 400,
  alignItems: 'center',
  position: 'relative',
  '&:hover': {
    backgroundColor: 'none',
    outline: 'none',
  },
  '&:active': {
    backgroundColor: '#edeeef',
  },
}));
