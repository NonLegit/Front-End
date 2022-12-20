import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PostsContainer2 = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  paddingTop: '8px',

}));
export const PostsContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    width: 640,
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));
export const NotFoundBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  // position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: 'white',
  marginTop: '10%',

}));

export const NotFountImage = styled('img')(() => ({
  backgroundColor: 'white',
  height: 136,
  width: 124,
  marginBottom: 40,
}));

export const BackHomeButton = styled(Button)(() => ({
  width: 200,
  borderRadius: 30,
  height: 30,
  boxShadow: 'none',
  marginLeft: 10,
  marginRight: 10,
  '&:hover': { boxShadow: 'none' },
}));

export const ImageWarning = styled('img')(() => ({
  width: 240,
  height: 128,
  marginBottom: 30,
}));
