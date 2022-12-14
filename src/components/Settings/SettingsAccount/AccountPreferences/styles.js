import { styled } from '@mui/system';
import {
  Dialog,
} from '@mui/material';

export const ChangeButton = styled('div')(() => ({
  fontSize: '14px',
  fontWeight: '700',
  minHeight: '32px',
  minWidth: '32px',
  padding: ' 4px 16px',
  cursor: 'pointer',
  border: '1px solid #0079D3',
  color: '#0079D3',
  borderRadius: '9999px',
  '&:hover': {
    background: '#f5fafd',
  },

}));
export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiPaper-root': {
    // width: '700px',
    // heigh: '500px',
    // minWidth: 360,
    // maxWidth: 538,
  },

}));
