/* eslint-disable import/no-cycle */
import { useContext } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment/moment';
import { EarlierContext } from '../NotificationsBody';
import {
  Notification, NotificationImage, Options, MenuOptions, NotificationTime,
  NotificationBody, ImageContiner, ChildImage, BodyHead, Body, ContainerHead, SeeMore,
} from './styles';

function NotificationCategories() {
  const {
    earlier, today, handleClose, handleClick, open, anchorEl,
  } = useContext(EarlierContext);
  const options = ['Hide this notification', 'Disable updates from this community'];
  const value = (today) || earlier;
  moment.updateLocale('en', {
    relativeTime: {
      s: 'now',
      m: '%d m',
      h: '%dh',
      dd: '%dd',
      MM: moment().format('MMM d'),
      y: '%dy',
    },
  });
  return (
    value?.map((ele, indx) => (
      <Notification key={`${ele.date}${indx + 0}`}>
        <ImageContiner>
          { (ele.replay === '1') ? (
            <>
              <NotificationImage src="https://styles.redditmedia.com/t5_78ssv9/styles/profileIcon_snoocf705ea1-8fa3-4bb7-8251-87244be506cc-headshot.png?width=64&height=64&frame=1&crop=64:64,smart&s=1cf9bff3cf29717ffc57976fb69334888e4774ef" alt="message" />
              <ChildImage>
                <ModeCommentIcon />
              </ChildImage>
            </>
          ) : (
            <>
              <NotificationImage src="https://www.redditstatic.com/notifications/default_subreddit_avatar.png" alt="ring" />
              <ChildImage>
                {' '}
                <NotificationsIcon />
                {' '}
              </ChildImage>
            </>
          ) }
        </ImageContiner>
        <NotificationBody>
          <ContainerHead>
            <BodyHead>
              { ele.head}
              <NotificationTime>
                { ' · ' }
                { (moment.utc(ele.date).local().startOf('seconds')
                  .fromNow())}
              </NotificationTime>
            </BodyHead>
            <SeeMore>
              <IconButton
                id={indx}
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                catorige={(today) ? 'today' : 'earlier'}
              >
                <MoreHorizIcon />
              </IconButton>
              <MenuOptions
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                id={indx}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                {options.map((option) => (
                  <Options
                    key={option}
                    selected={option === 'Pyxis'}
                    onClick={handleClose}
                  >
                    {option}
                  </Options>
                ))}
              </MenuOptions>
            </SeeMore>
          </ContainerHead>
          <Body>{ ele.body}</Body>
        </NotificationBody>
      </Notification>
    ))
  );
}

export default NotificationCategories;
