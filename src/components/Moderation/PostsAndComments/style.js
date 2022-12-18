import { Box, Button, styled } from '@mui/material';

export const AboutString = styled('div')({
  fontSize: 18,
  fontWeight: 500,
  color: 'black',
  marginBottom: 16,
  paddingLeft: 17,

});
export const AboutSubString = styled('div')({
  fontSize: 16,
  fontWeight: 500,
  color: 'black',
  marginBottom: 16,
  paddingLeft: 17,

});
export const LeftAlighne = styled('div')(({ theme }) => ({
  marginLeft: 0,
  paddingTop: 49,
  backgroundColor: '#dae0e6',
  [theme.breakpoints.between('1200', '5000')]: {
    marginLeft: 303,
    paddingTop: 49,
    backgroundColor: '#dae0e6',
  },
}));
export const AddFlair = styled('div')(({ theme }) => ({
  minWidth: 400,
  whiteSpace: 'nowrap',
  alignItems: 'center',

  display: 'flex',
  flexDirection: 'row',
  height: 48,
  justifyContent: 'flex-end',
  left: 280,
  padding: '0 24px',
  right: 0,
  marginTop: 9,
  Zindex: 3,
  [theme.breakpoints.between('1200', '5000')]: {
    backgroundColor: '#edeff1',
    marginTop: -17,
  },
}));
export const Add = styled(Button)(({ condition, theme }) => ({
  backgroundColor: '#0079d3',
  color: 'white',
  textTransform: 'unset',
  borderRadius: 999,
  height: 32,
  width: 106,
  fontWeight: 700,
  position: 'absolute',
  boxShadow: 'none',
  right: 0,
  margin: '0 24px',
  '&:hover': {
    backgroundColor: '#0079d3',
    color: 'white',
  },
  ...((condition) && {
    color: '#ffffff80',
    backgroundColor: 'transparent',
    border: '1px solid #848484',
  }),
  [theme.breakpoints.between('0', '1200')]: {
    margin: 0,
  },
}));
export const TotalContainer = styled('div')({
  backgroundColor: '#dae0e6',
  // horiz: 'none',
});
export const Container = styled('div')({
  backgroundColor: 'white',
  borderRadius: 4,
  boxSizing: 'border-box',
  maxWidth: 856,
  padding: '16px 24px',
});
export const Disc = styled('p')((marginTop) => ({
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: 0.5,
  textTransform: 'uppercase',
  borderBottom: '1px solid #edeff1',
  color: '#7c7c7c',
  marginBottom: 20,
  paddingBottom: 6,
  paddingLeft: 17,
  marginTop,
}));
export const FlexBox = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 10,
});

export const FlexBoxColumn = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});
export const SortString = styled('div')({
  fontSize: 16,
  fontWeight: 500,
  color: 'black',
  paddingLeft: 17,

});
export const NotFoundBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

export const NotFountImage = styled(Box)(() => ({
  backgroundColor: '#a8a8a8',
  borderRadius: '100%',
  height: 100,
  width: 100,
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
