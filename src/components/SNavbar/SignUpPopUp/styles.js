import { Dialog, styled } from '@mui/material';

const StyledDialog = styled(Dialog)(({ fullscreen }) => ({
  '& .MuiDialog-paper': {
    width: '400px',
    height: '640px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fullscreen,
    '& .MuiButtonBase-root': {
      justifyContent: 'center',
      alignItems: 'center',
      color: '#1A1A1B',
      textTransform: 'none',
      borderRadius: '20px',
      width: '280px',
      height: '44px',
      margin: '8px 0px',
      fontSize: '14px',
      padding: '0px 12px',
      border: '1px solid #dadce0',
      boxSizing: 'border-box',
      '&:hover': {
        backgroundColor: '#f8faff ',
        borderColor: '#d2e3fc',
      },
    },
  },
}));

export default StyledDialog;
