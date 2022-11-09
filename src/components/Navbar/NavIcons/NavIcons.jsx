import AddIcon from '@mui/icons-material/Add';
import Badge from '@mui/material/Badge';
import { grey } from '@mui/material/colors';
import OutboundOutlinedIcon from '@mui/icons-material/OutboundOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { IconButton, Zoom } from '@mui/material';
import StyledTooltip from './styles';

function navIcons() {
  return (
    <>
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
        <IconButton>
          <AddIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </StyledTooltip>
    </>
  );
}

export default navIcons;
