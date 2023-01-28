// import ShortcutOutlinedIcon from '@mui/icons-material/ShortcutOutlined';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {
  Divider, Menu, MenuItem, Typography,
} from '@mui/material';
import { useState } from 'react';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import ShortcutOutlinedIcon from '@mui/icons-material/ShortcutOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import EighteenUpRatingOutlinedIcon from '@mui/icons-material/EighteenUpRatingOutlined';
import LockIcon from '@mui/icons-material/Lock';
// import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
// import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
// import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import {
  FooterBox, FooterButton, MoreList, SelectItem,
} from './styles';

/**
 * left side bar on top communities
 *
 * @component Categories
 * @property {string} modState - the state of the post (approved-removed-spam)
 * @property {boolean} locked - is the post locked
 * @property {boolean} hidden - is the post hidden
 * @property {function} handleHide - function to handle hide event
 * @property {function} handleLock - function to handle lock comments event
 * @property {function} handleNsfw - function to handle mark as nsfw event
 * @property {function} handleApprove - function to handle approve event
 * @property {function} handleRemove - function to handle remove event
 * @property {function} handleSpam - function to handle spam event
 * @returns {React.Component} Categories
 */
function FooterQueue(props) {
  const {
    modState,
    locked,
    hidden,
    handleHide,
    handleLock, handleNsfw, handleApprove, handleRemove, handleSpam,
  } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleShare = () => {
  //   console.log('share');
  // };

  return (
    <FooterBox>
      {modState !== 'approved'
        ? (
          <FooterButton variant="contained" startIcon={<CheckIcon fontSize="small" />} onClick={handleApprove}>Approve</FooterButton>
        )
        : <FooterButton variant="outlined" startIcon={<CheckIcon fontSize="medium" />} condition="true" onClick={handleApprove}>Approved</FooterButton>}
      <FooterButton variant="outlined" startIcon={<CloseIcon fontSize="medium" />} condition="true" onClick={handleRemove}>Remove</FooterButton>
      <MoreList onClick={handleClick}>
        <MoreHorizOutlinedIcon />
      </MoreList>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '170px',
            padding: 5,
          },
        }}
        sx={{ '& .MuiButtonBase-root': { padding: '3px 3px' } }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 700, color: '#4b6066', marginLeft: 1, fontSize: '12px',
          }}
        >
          MODERATION
        </Typography>

        <MenuItem>
          <SelectItem onClick={handleSpam}>
            <CancelPresentationOutlinedIcon sx={{ marginRight: 1 }} fontSize="small" />
            Remove As Spam
          </SelectItem>

        </MenuItem>
        {/* <Divider /> */}

        <MenuItem>

          <SelectItem onClick={handleLock}>
            {!locked ? <LockOutlinedIcon sx={{ marginRight: 1 }} fontSize="small" /> : <LockIcon sx={{ marginRight: 1 }} fontSize="small" />}
            Lock Comments
          </SelectItem>

        </MenuItem>
        {/* <Divider /> */}
        <MenuItem>

          <SelectItem onClick={handleNsfw}>
            <EighteenUpRatingOutlinedIcon sx={{ marginRight: 1 }} fontSize="small" />
            Mark As NSFW
          </SelectItem>

        </MenuItem>
        <Divider />

        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 700, color: '#4b6066', marginLeft: 1, fontSize: '12px',
          }}
        >
          OTHER
        </Typography>

        {/* <MenuItem>

          <SelectItem onClick={handleShare}>
            <ShortcutOutlinedIcon sx={{ marginRight: 1 }} fontSize="small" />
            Share
          </SelectItem>

        </MenuItem> */}

        <MenuItem>
          <SelectItem onClick={handleHide}>
            <VisibilityOffOutlinedIcon sx={{ marginRight: 1 }} fontSize="small" />
            {hidden ? 'Unhide' : 'Hide'}
          </SelectItem>
        </MenuItem>

      </Menu>
    </FooterBox>
  );
}

export default FooterQueue;
