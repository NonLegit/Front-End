import AddIcon from '@mui/icons-material/Add';
import Badge from '@mui/material/Badge';
import { grey } from '@mui/material/colors';
import OutboundOutlinedIcon from '@mui/icons-material/OutboundOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { IconButton, Zoom, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import StyledTooltip from './styles';

/**
 *  NavIcons
 * @component
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
            <Link to="/notifications">
              <NotificationsNoneIcon sx={{ color: grey[600], fontSize: 25 }} />
            </Link>
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
          <Link to="/submit">
            <AddIcon sx={{ color: 'black', fontSize: 30 }} />
          </Link>
        </IconButton>
      </StyledTooltip>
    </Box>
  );
}

export default NavIcons;
