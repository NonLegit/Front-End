import { styled } from '@mui/system';
import { IconButton } from '@mui/material';

export const CreatePostContainer = styled('div')(() => ({
  width: '100%',
  margin: '16px 0',
  backgroundColor: '#fff',
  padding: '14px 12px',
  borderRadius: 4,
  display: 'flex',
  gap: 8,
  border: '1px solid #ccc',
}));

export const CustomIconButton = styled(IconButton)(() => ({
  borderRadius: 8,
  padding: 5,
}));

export const PostTitle = styled('input')(({ theme }) => ({
  padding: 10,
  border: 0,
  '&:focus-visible': {
    outline: '1px solid #ccc',
  },
  '&:hover': {
    outline: `1px solid ${theme.palette.primary.main}`,
  },
  borderRadius: 4,
  fontSize: 14,
  caretColor: 'transparent',
  fontWeight: 100,
  backgroundColor: '#f6f7f8',
  flexGrow: 1,
  cursor: 'pointer',
}));

export const AvatarContainer = styled('div')(() => ({
  position: 'relative',
  width: 38,
  height: 38,
  backgroundColor: '#f6f7f8',
  borderRadius: '50%',
}));

export const Avatar = styled('img')(() => ({
  width: 50,
  height: 50,
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  borderRadius: 20,
  WebkitBorderRadius: 20,
  MozBorderRadius: 20,
}));
