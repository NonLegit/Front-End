import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

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
export const InputName = styled('input')({
  backgroundColor: 'white',
  border: '1px solid #edeff1',
  color: '#1c1c1c',
  boxSizing: 'border-box',
  height: 48,
  marginBottom: 8,
  borderRadius: 4,
  padding: '12px 24px 4px 12px',
  width: '100%',
  fontSize: 14,
  fontWeight: 400,
  fontFamily: 'inherit',
  marginLeft: 17,

});
export const Count = styled('p')(({ condition }) => ({
  fontWeight: 400,
  color: '#7c7c7c',
  fontSize: 12,
  // height: 16,
  margin: 0,
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: 17,
  justifyContent: 'flex-start',
  ...((condition === 'true') && {
    color: 'red',
  }),
}));
export const SmallDisc = styled(Box)(({ marginTop }) => ({
  fontSize: 12,
  fontWeight: 400,
  color: '#7c7c7c',
  paddingLeft: 17,
  marginTop,
}));
export const Section = styled(Box)(() => ({
  marginBottom: 32,
  paddingRight: 17,
}));
export const TextArea = styled('textarea')({
  fontFamily: 'Noto Sans,Arial,sans-serif',
  fontSize: 14,
  fontWeight: 400,
  padding: 8,
  height: 48,
  maxHeight: 70,
  resize: 'vertical',
  backgroundColor: '#ffffff',
  borderRadius: 4,
  boxSizing: 'border-box',
  color: '#1c1c1c',
  display: 'block',
  width: '100%',
  marginLeft: 17,

});
export const Adult = styled(Box)({
  cursor: 'pointer',
  display: 'flex',
  paddingLeft: 17,
  flexDirection: 'row',
  alignItems: 'center',
});
export const NSFWs = styled(Box)({
  fontSize: 12,
  display: 'inline-block',
  backgroundColor: '#ff585b',
  borderRadius: 2,
  padding: '0 4px',
  color: '#fff',
  margin: '0 4px 0 7px',
  verticalAlign: 'text-top',
  fontWeight: 500,
});
export const Warning = styled(Box)({
  fontWeight: 500,
  color: '#1c1c1c',
  fontSize: 14,
  display: 'inline-block',
  verticalAlign: 'top',
  marginTop: -1,
});
