import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const PostsClassContainer = styled('div')(() => ({
  width: '100%',
  margin: '16px 0',
  backgroundColor: '#fff',
  padding: '14px 12px',
  borderRadius: 4,
  display: 'flex',
  gap: 10,
  border: '1px solid #ccc',
}));

export const CustomClassLink = styled(Link)(() => ({
  textDecoration: 'none',
  position: 'relative',
}));

export const PostClassesList = styled(Box)(() => ({
  position: 'absolute',
  top: '100%',
  left: 0,
  backgroundColor: '#fff',
  borderRadius: 4,
  display: 'flex',
}));

export const PostClassSmButton = styled(Link)(({ active, theme }) => ({
  padding: 8,
  fontWeight: 400,
  fontSize: 14,
  textDecoration: 'none',
  display: 'flex',
  textTransform: 'capitalize',
  gap: 4,
  justifyContent: 'center',
  alignItems: 'center',
  color: (active ? theme.palette.primary.main : theme.palette.third.main),
  '&:hover': {
    color: (active ? theme.palette.primary.main : '#000'),
    backgroundColor: '#e9f5fd',
  },
}));

export const ClassButton = styled(Button)(({ active }) => ({
  display: 'flex',
  gap: 6,
  borderRadius: 20,
  textTransform: 'capitalize',
  minWidth: 'auto',
  padding: '4px 10px',
  fontSize: 14,
  fontWeight: 'bolder',
  backgroundColor: (active ? '#f6f7f8' : null),
}));
