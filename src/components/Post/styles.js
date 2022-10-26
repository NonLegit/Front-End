import {
  Box, Button, List, ListItemText,
} from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const PostContainer = styled(Box)(() => ({
  width: '100%',
  backgroundColor: '#fff',
  display: 'flex',
  borderRadius: 3,
  border: '1px solid #ccc',
  '&:hover':
  {
    borderColor: '#999',
  },
}));

export const Voting = styled(Box)(() => ({
  width: 40,
  padding: '8px 4px',
  backgroundColor: '#F8F9FA',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '3px 0 0 3px',
  alignItems: 'center',
}));

export const Votes = styled(Box)(() => ({
  fontSize: '12px',
  fontWeight: 'bold',
}));

export const Popularity = styled(Box)(() => ({
  fontSize: '15px',
  color: '#1c1c1c',
  cursor: 'pointer',
}));

export const PostInfo = styled(Box)(() => ({
  display: 'flex',
  fontSize: '12px',
  gap: '4px',
}));

export const PostInfoLink = styled(Link)(({ color, fontWeight }) => ({
  fontWeight,
  color,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const PostTitle = styled(Link)(() => ({
  textDecoration: 'none',
  color: '#000',
  '& .MuiTypography-root': {
    lineHeight: 1.2,
    fontWeight: 500,
  },
}));

export const PostMedia = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const PostActions = styled(Box)(() => ({
  display: 'flex',
}));

export const ActionButton = styled(Button)(() => ({
  fontSize: 13,
  textTransform: 'capitalize',
  fontWeight: 'bold',
  '& .MuiButton-startIcon': {
    marginRight: 3,
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
