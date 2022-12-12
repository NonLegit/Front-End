import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

function CahngePassword({ setOpenPass }) {
  return (
    <DialogTitle sx={{
      m: 0, p: 2, display: 'flex', justifyContent: 'center', fontWeight: 700,
    }}
    >

      <IconButton
        aria-label="close"
        onClick={() => { setOpenPass(false); }}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

    </DialogTitle>

  );
}

export default CahngePassword;
