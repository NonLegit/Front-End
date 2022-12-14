import {
  Box,
  Button,
  FormControl,
  OutlinedInput,
  styled,
} from '@mui/material';

export const Container = styled('div')({
  backgroundColor: '#edeff1',
  color: 'black',
  padding: 16,
});

export const Lable = styled('div')({
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: 0.5,
  textTransform: 'uppercase',
  color: '#7c7c7c',
});
export const SecondLable = styled('div')({
  display: 'block',
  marginBottom: 8,
});
export const FieldData = styled('div')({
  fontSize: 14,
  fontWeight: 500,
  marginTop: 16,

});
export const Count = styled('p')(({ condition }) => ({
  fontWeight: 400,
  color: '#7c7c7c',
  fontSize: 12,
  // height: 16,
  margin: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  ...((condition === 'true') && {
    color: 'red',
  }),
}));
export const Input = styled(OutlinedInput)({
  backgroundColor: '#f6f7f8',
  outline: 'none',
  userSelect: 'text',
  whiteSpace: 'pre-wrap',
  overflowWrap: 'break-word',
  padding: '8px 30px 8px 8px',
  height: 'inherit',
  textAlign: 'initial',
  fontSize: 14,
  fontWeight: 400,
  fontFamily: 'inherit',
  width: 240,
  '& .MuiInputBase-input': {
    padding: 0,
  },
});
export const Color = styled(OutlinedInput)(({ backgroundColor }) => ({
  backgroundColor,
  height: 26,
  width: 26,
  fill: backgroundColor,
  '& .MuiInputBase-input': {
    padding: 0,
    height: 26,
  },

}));
export const FormCont = styled(FormControl)({
  padding: 0,
});
export const ColorData = styled('div')({
  fontSize: 14,
  fontWeight: 500,
  marginTop: 16,
  display: 'flex',
  justifyContent: 'space-between',
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
  right: 0,

});
export const Save = styled(Button)(() => ({
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
}));
export const Cancel = styled(Button)(() => ({
  backgroundColor: 'transparent',
  color: '#0079d3',
  textTransform: 'unset',
  borderRadius: 999,
  border: '1px solid #0079d3',
  height: 32,
  width: 106,
  fontWeight: 700,
  position: 'absolute',
  boxShadow: 'none',
  right: 0,
  margin: '0 150px',
}));
export const SplitArea = styled(Box)({
  width: '50%',

});
