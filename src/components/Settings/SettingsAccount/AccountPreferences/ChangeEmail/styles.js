import { styled } from '@mui/system';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DialogTitle from '@mui/material/DialogTitle';

export const Header = styled('div')(() => ({
  margin: 0,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontWeight: 700,
  gap: '8px',
}));
export const Container = styled(DialogTitle)(() => ({
  margin: 0,
  padding: '24px 32px',
}));
export const IconClose = styled(IconButton)(() => ({
  position: 'absolute',
  right: 8,
  top: 8,
  color: (theme) => theme.palette.grey[500],
}));
export const HeaderIcon = styled('div')(() => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#d3ecfb',
  height: ' 48px',
  width: '48px',
  borderRadius: ' 50%',

}));
export const IconError = styled('div')(() => ({
  position: 'absolute',
  top: '0px',
  right: '0px',
  color: 'white',
  background: '#ff4500',
  width: '24px',
  height: ' 24px',
  borderRadius: ' 50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px white solid',

}));
export const Pragraph = styled('p')(() => ({
  paddingRight: '8px',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '20px',
  marginTop: '15px',
}));
export const Input = styled('input')(({ error }) => ({
  fontSize: '16px',
  marginTop: '12px',
  width: '100%',
  padding: '12px',
  ...((error === true) && {
    border: '1px solid #ea0027 ',
  }),
}));
export const Footer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: '12px',
}));
export const SaveBtn = styled(Button)(({ condition }) => ({
  borderRadius: 20,
  textTransform: 'unset',
  fontWeight: 700,
  height: 32,
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',

  },
  ...((condition === false) && {
    cursor: 'not-allowed',
    color: '#ffffff80',
    filter: 'grayscale(1)',
  }),
}));
export const Error = styled('div')(() => ({
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '16px',
  color: '#ea0027',
  marginTop: '8px',
}));
