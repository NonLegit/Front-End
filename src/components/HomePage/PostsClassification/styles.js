import { Button } from '@mui/material';
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
