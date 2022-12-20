import { Box, Button, styled } from '@mui/material';

export const SearchByCommunitiesHeader = styled(Box)(({ theme }) => ({
  [theme.breakpoints.between('0', '1000')]: {
    width: 'fit-content',
  },
  [theme.breakpoints.between('0', '440')]: {
    margin: 0,
  },
  width: 976,
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  paddingTop: '8px',
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
