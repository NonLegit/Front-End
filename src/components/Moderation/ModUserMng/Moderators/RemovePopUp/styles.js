import { Dialog, styled } from '@mui/material';

const StyledDialog = styled(Dialog)(({ fullscreen }) => ({
  '& .MuiDialog-paper': {
    width: '490px',
    height: '190px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'space-between',
    fullscreen,
  },
}));

export default StyledDialog;
