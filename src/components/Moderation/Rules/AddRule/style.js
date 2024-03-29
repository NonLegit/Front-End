import {
  Box, Button, Dialog, DialogContent, DialogTitle, styled,
} from '@mui/material';

export const Title = styled(DialogTitle)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& .-MuiTypography-root': {
    padding: '12px 20',
  },

});
export const Dial = styled(Dialog)(({ theme }) => ({
  [theme.breakpoints.between('0', '1200')]: {
    '& .MuiTypography-root': { padding: '0px 0px' },
  },
  '& .MuiPaper-root': { width: '500px' },
}));

export const DialCont = styled(DialogContent)(({ theme }) => ({
  [theme.breakpoints.between('0', '600')]: {
    '& .DialogContent': { padding: '0px 0px' },
    '& .MuiDialogContent-root': { paddingTop: '0px' },
  },
}));

export const TitleString = styled('div')({
  flex: '1 1 100%',
  width: '100%',
  fontSize: 16,
  fontWeight: 500,
  color: 'black',
});
export const Lable = styled('div')(({ marginTop }) => ({
  paddingBottom: 8,
  fontFamily: 'Noto Sans,Arial,sans-serif',
  fontSize: 14,
  fontWeight: 400,
  marginTop,
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
});
export const FullDiscTextArea = styled('textarea')({
  fontFamily: 'Noto Sans,Arial,sans-serif',
  fontSize: 14,
  fontWeight: 400,
  padding: 8,
  height: 96,
  maxHeight: 200,
  resize: 'vertical',
  backgroundColor: '#ffffff',
  borderRadius: 4,
  boxSizing: 'border-box',
  color: '#1c1c1c',
  display: 'block',
  width: '100%',
});
export const Container = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  background: '#ffffff',
  boxSizing: 'border-box',
  padding: 0,
  position: 'relative',
  borderRadius: '0 4px 4px 0',
  flex: '1 1 100%',
  margin: 'auto',
  maxHeight: '100%',
  maxWidth: '100vw',
  overflowY: 'auto',
  marginTop: 0,
});
export const Disc = styled('p')(({ theme }) => ({
  fontWeight: 400,
  color: '#7c7c7c',
  fontSize: 12,
  height: 16,
  margin: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  [theme.breakpoints.between('0', '1200')]: {
    marginTop: -5,
  },
}));
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
    backgroundColor: '#848484',
    border: '1px solid #848484',

  }),

  [theme.breakpoints.between('0', '600')]: {
    margin: '-5px 24px 0px ',
  },
}));
export const Cancel = styled(Button)(({ condition, theme }) => ({
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
  ...((condition) && {
    color: '#ffffff80',
    backgroundColor: 'transparent',
    border: '1px solid #848484',
  }),
  [theme.breakpoints.between('0', '600')]: {
    margin: '-5px 150px 0px ',
  },
}));
