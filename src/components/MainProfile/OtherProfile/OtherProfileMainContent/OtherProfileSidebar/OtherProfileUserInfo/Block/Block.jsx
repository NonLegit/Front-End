import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';
import { DialogButtons } from './styles';

function Block({ onClose, username, handleBlock }) {
  return (
    <>
      <DialogTitle sx={{
        m: 0, p: 2, display: 'flex', fontWeight: 700,
      }}
      >
        Unblock u/
        {username}
        ?

        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <Typography>
          They won’t be notified, but they’ll be able to message you, follow you, and you’ll start seeing notifications from them. You won’t be able to block them again for 24 hours.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ height: '65px', bgcolor: '#edeff1' }}>
        <DialogButtons variant="outlined" size="small" condition="true" onClick={onClose}>
          Cancel
        </DialogButtons>
        <DialogButtons variant="contained" size="small" onClick={handleBlock}>
          Unblock
        </DialogButtons>
      </DialogActions>

    </>

  );
}

export default Block;
