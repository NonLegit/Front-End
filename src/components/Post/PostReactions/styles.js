import {
  Box, Button, List, ListItemText,
} from '@mui/material';
import { styled } from '@mui/system';

export const ActionButton = styled(Button)(() => ({
  fontSize: 13,
  textTransform: 'capitalize',
  fontWeight: 'bold',
  '& .MuiSvgIcon-root': {
    marginRight: 3,
    width: 20,
    height: 20,
  },
  paddingTop: 8,
  paddingBottom: 8,
}));

export const ShowMoreList = styled(List)(({ theme, display }) => ({
  display,
  position: 'absolute',
  left: 0,
  top: '100%',
  backgroundColor: '#fff',
  borderRadius: 7,
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

export const ShowMoreListItemText = styled(ListItemText)(() => ({
  textTransform: 'capitalize',
  whiteSpace: 'nowrap',
}));

export const PostActions = styled(Box)(() => ({
  display: 'flex',
}));
