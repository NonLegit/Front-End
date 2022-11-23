import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Join, JoinCommunity } from './style';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const {
    falseShow, children, onClose, ...other
  } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other} onClick={onClose}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={() => { falseShow(); onClose(); }}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon onClick={() => { falseShow(); onClose(); }} />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  const [openForm, setopenForm] = React.useState(false);
  const { falseShow, SaveAction, decord } = props;
  const handleClickOpen = () => {
    setopenForm(true);
  };
  const handleClose = () => {
    setopenForm(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} id="ListAlert" sx={{ display: 'none' }}>
        openForm dialog
      </Button>
      {openForm && (
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openForm}
        falseShow={falseShow}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Save changes before leaving?
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            You have made some changes to your community, do you wish to leave this menu without saving?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Join autoFocus onClick={(e) => { e.stopPropagation(); handleClose(); decord(); }}>
            Discard
          </Join>
          <JoinCommunity autoFocus onClick={(e) => { e.stopPropagation(); handleClose(); SaveAction(); }}>
            Save
          </JoinCommunity>
        </DialogActions>
      </BootstrapDialog>
      )}
    </div>
  );
}
