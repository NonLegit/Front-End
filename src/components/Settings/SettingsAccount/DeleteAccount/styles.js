import { styled } from '@mui/system';
import {
  Button,
  Dialog,
} from '@mui/material';

import IconButton from '@mui/material/IconButton';

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiPaper-root': {
    width: '350px',
    // width: '700px',
    // heigh: '500px',
    // minWidth: 360,
    // maxWidth: 538,
  },

}));
export const IconClose = styled(IconButton)(() => ({
  position: 'absolute',
  right: 8,
  top: 4,
  color: (theme) => theme.palette.grey[500],
}));
export const Contanier = styled('div')(() => ({
  position: 'relative',
  width: '100%',
  padding: '15px',
}));
export const Header = styled('div')(() => ({
  fontWeight: '700',
  paddingBottom: '7px',
  marginBottom: '15px',
  borderBottom: '1px solid #EDEFF1',
}));
export const Pargraph = styled('div')(() => ({
  fontSize: '15px',
  width: '100%',
  color: 'black',
  marginBottom: '7px',
}));
export const PargraphSmall = styled('div')(() => ({
  fontSize: '10px',
  color: '#7c7c7c',
  marginBottom: '4px',
}));
export const TeaxArea = styled('textarea')(() => ({
  width: '100%',
  resize: 'vertical',
}));
export const Input = styled('input')(() => ({
  width: '100%',

  padding: '10px',
  marginBottom: '10px',
}));
export const CheckBox = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',

}));
export const CheckText = styled('div')(() => ({
  fontSize: '12px',

}));
export const Footer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '12px',
}));
export const CancelButton = styled('div')(() => ({
  color: '#0079D3',
  border: '1px solid #0079D3',
  padding: '5px 10px',
  borderRadius: '20px',
  cursor: 'pointer',
  fontSize: '16px',

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
