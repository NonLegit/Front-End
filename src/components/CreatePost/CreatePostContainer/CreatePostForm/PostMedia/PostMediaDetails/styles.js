import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const PostMediaDetailsContainer = styled(Box)(() => ({
  display: 'flex',
}));

export const PostMediaScreenshot = styled(Box)(() => ({
  width: '50%',
  marginRight: 10,
  height: 324,
  backgroundColor: '#f6f7f8',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const MediaDetailsContainer = styled(Box)(() => ({
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
}));

export const Caption = styled('input')(({ theme }) => ({
  padding: 10,
  marginBottom: 10,
  border: '1px solid #edeff1',
  '&:focus-visible': {
    outline: '1px solid #1a1a1b',
  },
  borderRadius: 4,
  fontSize: 14,
  caretColor: theme.palette.primary.main,
  fontWeight: 400,
  fontFamily: 'inherit',
}));

export const PostLink = styled('input')(({ theme }) => ({
  padding: 10,
  border: '1px solid #edeff1',
  '&:focus-visible': {
    outline: '1px solid #1a1a1b',
  },
  borderRadius: 4,
  fontSize: 14,
  caretColor: theme.palette.primary.main,
  fontWeight: 400,
  fontFamily: 'inherit',
}));

export const Screenshot = styled('img')(() => ({
  maxHeight: '100%',
  maxWidth: '100%',
}));
