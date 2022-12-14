import { Button, styled } from '@mui/material';

export const AboutString = styled('div')({
  fontSize: 18,
  fontWeight: 500,
  color: 'black',
  marginBottom: 16,
  paddingLeft: 17,

});
export const LeftAlighne = styled('div')({
  marginLeft: 303,
  paddingTop: 49,
  backgroundColor: '#dae0e6',
});
export const AddFlair = styled('div')({
  minWidth: 400,
  whiteSpace: 'nowrap',
  alignItems: 'center',
  backgroundColor: '#edeff1',
  display: 'flex',
  flexDirection: 'row',
  height: 48,
  justifyContent: 'flex-end',
  left: 280,
  padding: '0 24px',
  position: 'fixed',
  right: 0,
  marginTop: 9,
  Zindex: 3,
});
export const Add = styled(Button)(({ condition }) => ({
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
}));
export const TotalContainer = styled('div')({
  backgroundColor: '#dae0e6',
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
  fontSize: 18,
  fontWeight: 500,
  color: 'black',
  paddingLeft: 17,

});
