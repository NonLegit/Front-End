import AddIcon from '@mui/icons-material/Add';
import Badge from '@mui/material/Badge';
import { grey } from '@mui/material/colors';
import OutboundOutlinedIcon from '@mui/icons-material/OutboundOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { IconButton, Zoom, Box } from '@mui/material';
import StyledTooltip from './styles';

/**
 *
 * @returns {React.Component} the three icons in the navbar (Popular - notifications - create post)
 */
function NavIcons() {
  return (
    <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'row' }}>
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

      <StyledTooltip
        title="Notifications"
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
          <Badge badgeContent={17} color="error">
            <NotificationsNoneIcon sx={{ color: grey[600], fontSize: 25 }} />
          </Badge>
        </IconButton>
      </StyledTooltip>

      <StyledTooltip
        title="Add Post"
        TransitionComponent={Zoom}
        enterDelay={700}
        enterNextDelay={700}
      >
        <IconButton
          sx={{ '&:hover': { backgroundColor: 'transparent' } }}
        >
          <AddIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </StyledTooltip>
    </Box>
  );
}

export default NavIcons;
