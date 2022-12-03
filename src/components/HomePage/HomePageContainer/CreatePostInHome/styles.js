import { styled } from '@mui/system';
import { Avatar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export const CreatePostContainer = styled('div')(() => ({
  width: '100%',
  margin: '16px 0',
  backgroundColor: '#fff',
  padding: '12px 12px',
  borderRadius: 4,
  display: 'flex',
  gap: 8,
  border: '1px solid #ccc',
}));

export const CustomIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: 8,
  padding: 5,
  [theme.breakpoints.down('xs')]: {
    display: 'none',
  },
}));

export const PostTitle = styled('input')(({ theme }) => ({
  padding: 10,
  border: 0,
  '&:focus-visible': {
    outline: '1px solid #ccc',
  },
  '&:hover': {
    outline: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: '#fff',
  },
  borderRadius: 4,
  fontSize: 14,
  caretColor: 'transparent',
  fontWeight: 100,
  backgroundColor: '#f6f7f8',
  flexGrow: 1,
  cursor: 'text',
}));

export const AvatarContainer = styled('div')(() => ({
  position: 'relative',
  width: 40,
  height: 40,
  backgroundColor: '#f6f7f8',
  borderRadius: '50%',
}));

export const CustomAvatar = styled(Avatar)(() => ({
  width: 43,
  height: 43,
  borderRadius: '50%',
  WebkitBorderRadius: '50%',
  MozBorderRadius: '50%',
  border: '2px solid #eeeeee',
}));

export const CustomLink = styled(Link)(() => ({
  textDecoration: 'none',
}));
