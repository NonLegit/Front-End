import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function SnackBar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <Snackbar onClick={handleClick} open={open} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert sx={{ width: '100%' }} elevation={6} variant="filled">
        This is a success message!
      </MuiAlert>
    </Snackbar>
  );
}

export default SnackBar;
