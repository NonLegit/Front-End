/* eslint-disable react/jsx-no-constructed-context-values */
import AddIcon from '@mui/icons-material/Add';
import Badge from '@mui/material/Badge';
import { grey } from '@mui/material/colors';
import OutboundOutlinedIcon from '@mui/icons-material/OutboundOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {
  IconButton, Zoom, Box, Button,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { onForegroundNottification } from '../../../../lib/firebase';
import {
  StyledTooltip, NotificationButton, NotificationContent, NotificationContanier,
  NotificationHeaderIcons, NotificationIcons, LinkTo, SeeAll,
} from './styles';
import notificationsFetch from '../../../Notifications/notificationsServer';
import NotificationCategories from '../../../Notifications/NotificationsBody/NotificationCategories/NotificationCategories';
import { CategoriesContext } from '../../../Notifications/NotificationsBody/NotificationsBody';

/**
 *  NavIcons
 * @component
 * @returns {React.Component} the three icons in the navbar (Popular - notifications - create post)
 */
function NavIcons() {
  const navigate = useNavigate();
  const handleRoutePopular = () => {
    navigate('/r/popular');
  };
  const [today, setToday] = useState([]);
  const [select, setSelect] = useState(null);
  const [dataToday, dataEarlier] = notificationsFetch();
  //  anchor element
  const [anchorEl, setAnchorEl] = useState(null);
  const [unread, setUnread] = useState(0);
  const [message, setMessage] = useState(false);
  const [anchorElWindow, setAnchorElWindow] = useState(null);
  const openWindow = Boolean(anchorElWindow);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorElWindow(event.currentTarget);
  };
  const handleCloseWindow = () => {
    setAnchorElWindow(null);
  };
  useEffect(() => {
    const data = dataToday.concat(dataEarlier);
    setToday(data.slice(0, 5));
  }, [dataEarlier, dataToday]);
  useEffect(() => {
    onForegroundNottification()
      .then((payload) => {
        const { data: { val } } = payload;
        const value = JSON.parse(val);
        if (value.type === 'follow' || value.type === 'commentReply' || value.type === 'userMention' || value.type === 'firstPostUpVote' || value.type === 'firstCommentUpVote') { setToday((oldArray) => [value, ...oldArray]); } else {
          setMessage(true);
        }
        if (value.type === 'postReply') {
          setToday((oldArray) => [value, ...oldArray]);
        }
        setUnread(unread + 1);
      })
      .catch((err) => console.log('An error occured while retrieving foreground message. ', err));
  });
  const handleClose = (event) => {
    const tabindex = event.currentTarget.getAttribute('tabindex');
    if (select !== null && tabindex === '0') {
      setToday(
        today.filter((e, i) => i !== Number(select)),
      );
      setSelect(null);
    }
    setAnchorEl(null);
  };
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
          onClick={handleRoutePopular}
        >
          <OutboundOutlinedIcon sx={{ color: grey[600], fontSize: 25 }} />
        </IconButton>
      </StyledTooltip>
      <Button
        id="basic-button"
        aria-controls={openWindow ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openWindow ? 'true' : undefined}
        onClick={handleClick}
        disableRipple
        sx={{
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <NotificationButton
          disableRipple
          size="large"
          aria-label={`show ${unread} new notifications`}
          color="inherit"
        >
          <Badge badgeContent={unread} color="error">
            <NotificationsNoneIcon sx={{ color: grey[600], fontSize: 25 }} />
          </Badge>
        </NotificationButton>
      </Button>
      <NotificationContanier
        disableRipple
        id="basic-menu"
        anchorEl={anchorElWindow}
        open={openWindow}
        onClose={handleCloseWindow}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <NotificationContent disableRipple>
          Notifications
          <NotificationHeaderIcons>
            <LinkTo to="/messages/unread" sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              { (message) && <ErrorOutlineIcon fontWeight="bold" color="error" />}
              {' '}
              Messages
            </LinkTo>
            <NotificationIcons>
              <BeenhereOutlinedIcon />
            </NotificationIcons>
            <NotificationIcons>
              <SettingsOutlinedIcon />
            </NotificationIcons>
          </NotificationHeaderIcons>

        </NotificationContent>
        <NotificationContent disableRipple>
          <CategoriesContext.Provider value={{
            today, handleClose, handleClick, open, anchorEl,
          }}
          >
            <NotificationCategories NavBar />
          </CategoriesContext.Provider>
        </NotificationContent>
        <SeeAll to="/notifications" onClick={handleCloseWindow}>
          SEE ALL
        </SeeAll>
      </NotificationContanier>

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
