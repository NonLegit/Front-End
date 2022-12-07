import { styled } from '@mui/system';
import {
  Dialog,
} from '@mui/material';

export const AddSocialLinks = styled('div')(({ lenght }) => ({
  marginTop: '12px',
  fontSize: '12px',
  fontWeight: '700',
  lineHeight: '16px',
  alignItems: 'center',
  backgroundColor: '#EDEFF1',
  borderRadius: '9999px',
  cursor: lenght ? 'pointer' : 'arrow',
  color: lenght ? '#1c1c1c' : '#7c7c7c',
  display: 'flex',
  height: '47px',
  marginRight: '8px',
  padding: ' 10px 12px',
  width: 'fit-content',

}));
export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiPaper-root': {
    minWidth: 410,
    maxWidth: 538,
  },

}));
export const Social = styled('span')(() => ({
  height: 40,
  width: 'fit-content',
  fontSize: 12,
  fontWeight: 700,
  backgroundColor: '#edeff1',
  padding: '10px 12px',
  borderRadius: 9999,
  color: 'black',
  cursor: 'pointer',
  marginBottom: 8,
  marginRight: 4,
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5px',
}));
export const PlatformIcon = styled('img')(() => ({
  height: 16,
  width: 16,
  marginRight: 5,
}));
export const DeleteIcon = styled('span')(() => ({

  fontSize: 'small',
}));
