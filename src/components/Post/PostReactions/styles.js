import {
  Box, Button, List, ListItemText,
} from '@mui/material';
import { styled } from '@mui/system';

export const ActionButton = styled(Button)(() => ({
  fontSize: 12,
  letterSpacing: 0.75,
  textTransform: 'capitalize',
  fontWeight: 'bold',
  '& .MuiButton-startIcon': {
    marginRight: 5,
    width: 20,
    height: 20,
  },
  paddingTop: 0,
  paddingBottom: 0,
}));

export const ShowMoreList = styled(List)(({ match, theme, display }) => ({
  display,
  position: 'absolute',
  left: (match ? '-100%' : 0),
  top: '100%',
  backgroundColor: '#fff',
  borderRadius: 4,
  padding: 0,
  '& .MuiListItemText-root .MuiTypography-root': {
    fontSize: 13,
    fontWeight: 'bold',
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    margin: '1px 8px',
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

export const ShowMoreListItemText = styled(ListItemText)(({ theme }) => ({
  textTransform: 'capitalize',
  whiteSpace: 'nowrap',
  color: theme.palette.third.main,
  marginRight: 10,
}));

export const PostActions = styled(Box)(() => ({
  display: 'flex',
}));
