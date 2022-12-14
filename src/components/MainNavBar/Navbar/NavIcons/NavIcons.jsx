import AddIcon from '@mui/icons-material/Add';
import Badge from '@mui/material/Badge';
import { grey } from '@mui/material/colors';
import OutboundOutlinedIcon from '@mui/icons-material/OutboundOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {
  IconButton, Zoom, Box, MenuItem, Menu, Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { onForegroundNottification } from '../../../../lib/firebase';
import { StyledTooltip, NotificationButton } from './styles';
/**
 *  NavIcons
 * @component
 * @returns {React.Component} the three icons in the navbar (Popular - notifications - create post)
 */
function NavIcons() {
  const [unread, setUnread] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    console.log('doaa');
    onForegroundNottification()
      .then((payload) => {
        console.log('Received foreground message: ', payload);
        // const { data: { val } } = payload;
        setUnread(unread + 1);
      })
      .catch((err) => console.log('An error occured while retrieving foreground message. ', err));
  });
  return (
    <Box sx={{ alignItems: 'flex-start', display: { xs: 'none', sm: 'flex' }, flexDirection: 'row' }}>
      <StyledTooltip
        title="Popular"
        TransitionComponent={Zoom}
        enterDelay={700}
        enterNextDelay={700}
      >
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          sx={{ '&:hover': { backgroundColor: 'transparent' } }}
        >
          <OutboundOutlinedIcon sx={{ color: grey[600], fontSize: 25 }} />
        </IconButton>
      </StyledTooltip>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <NotificationButton
          size="large"
          aria-label={`show ${unread} new notifications`}
          color="inherit"
        >
          <Badge badgeContent={unread} color="error">
            <NotificationsNoneIcon sx={{ color: grey[600], fontSize: 25 }} />
          </Badge>
        </NotificationButton>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
      </Menu>

      <StyledTooltip
        title="Add Post"
        TransitionComponent={Zoom}
        enterDelay={700}
        enterNextDelay={700}
      >
        <IconButton
          sx={{ '&:hover': { backgroundColor: 'transparent' } }}
        >
          <Link to="/submit">
            <AddIcon sx={{ color: 'grey', fontSize: 30 }} />
          </Link>
        </IconButton>
      </StyledTooltip>

    </Box>
  );
}

export default NavIcons;
