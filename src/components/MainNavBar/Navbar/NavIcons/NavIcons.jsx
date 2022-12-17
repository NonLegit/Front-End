/* eslint-disable react/jsx-no-constructed-context-values */
import AddIcon from '@mui/icons-material/Add';
import Badge from '@mui/material/Badge';
import { grey } from '@mui/material/colors';
import OutboundOutlinedIcon from '@mui/icons-material/OutboundOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {
  IconButton, Zoom, Box, Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
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
  const [today, setToday] = useState([]);
  const [select, setSelect] = useState(null);
  const [dataToday, dataEarlier] = notificationsFetch();
  //  anchor element
  const [anchorEl, setAnchorEl] = useState(null);
  const [unread, setUnread] = useState(1);
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
    console.log(dataToday);
    console.log(dataEarlier);
  }, [dataEarlier, dataToday]);
  useEffect(() => {
    console.log('doaa');
    onForegroundNottification()
      .then((payload) => {
        console.log('Received foreground message: ', payload);
        const { data: { val } } = payload;
        setToday((oldArray) => [JSON.parse(val), ...oldArray]);
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
            <LinkTo to="/settings">
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
