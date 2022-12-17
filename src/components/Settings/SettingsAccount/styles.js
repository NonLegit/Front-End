import { styled } from '@mui/system';
import {
  Dialog,
} from '@mui/material';

export const DeleteAccount = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  color: '#ff585b',
  alignItems: 'center',
  fontWeight: 'bold',
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
