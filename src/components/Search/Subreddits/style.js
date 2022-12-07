import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const PostContainer = styled(Box)(() => ({
  width: '100%',
  backgroundColor: '#fff',
  display: 'flex',
  borderRadius: 3,
  alignItems: 'center',
  border: 'thin solid #ccc',
  '&:hover':
  {
    borderColor: '#999',
  },
  margin: 0,
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
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'spacebetween',
  color: '#000',
  '& .MuiTypography-root': {
    lineHeight: 1.2,
    fontWeight: 500,
  },
}));

export const PostMedia = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: 138,
  height: 98,
  justifyContent: 'center',
}));

export const PostRich = styled('div')({
  paddingRight: 16,
  paddingTop: 8,
  paddingBottom: 16,
  fontSize: 12,
  fontWeight: 400,
  color: '#7c7c7c',
  display: 'flex',
});

export const Video = styled('video')(({ src }) => ({
  src,
}));

export const Image = styled('img')(({ src }) => ({
  src,
}));
export const Joined = styled(Button)(() => ({
  flexShrink: 0,
  width: 86,
  height: 30,
  color: '#1383d6',
  backgroundColor: '#f6f7f8',
  borderRadius: 9999,
  '&:hover': {
    backgroundColor: '#e3edf6',
    border: 'none',
    outline: 0,
  },
  border: 'none',
  outline: 0,
  textTransform: 'initial',
  fontWeight: 700,

}));
export const SearchByCommunitiesHeader = styled(Box)(({ theme }) => ({
  [theme.breakpoints.between('0', '1000')]: {
    width: '100%',
  },
  width: 976,
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  paddingTop: '8px',
}));
