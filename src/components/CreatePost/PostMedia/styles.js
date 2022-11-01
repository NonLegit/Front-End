import { Box } from '@mui/material';
import { styled } from '@mui/system';
import RedditButton from '../../RedditButton/RedditButton';

export const PostEmptyMediaContainer = styled(Box)(({ theme }) => ({
  padding: 10,
  border: '1px dashed #edeff1',
  borderRadius: 4,
  fontSize: 14,
  color: theme.palette.primary.main,
  fontFamily: 'inherit',
  minHeight: 280,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 12,
}));

export const PostOneMediaContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: 10,
  overflowX: 'auto',
  overflowY: 'hidden',
  paddingBottom: 10,
}));

export const PostMediaOuterContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
  padding: 12,
  border: '1px solid #edeff1',
  borderRadius: 4,
}));

export const UploadButton = styled(RedditButton)(() => ({
  padding: '3px 16px',
  fontSize: 14,
  fontWeight: 'bold',
}));

export const AddMoreMediaFiles = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px dashed #edeff1',
  minWidth: 100,
  height: 100,
  borderRadius: 5,
}));
