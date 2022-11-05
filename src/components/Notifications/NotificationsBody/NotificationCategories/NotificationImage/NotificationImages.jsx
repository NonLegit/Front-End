/* eslint-disable import/no-cycle */
import { useContext } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import {
  ImageContiner, ChildImage, NotificationImage,
} from './styles';
import { ReplayContext } from '../NotificationCategories';

function NotificationImages() {
  const {
    value,
  } = useContext(ReplayContext);
  return (
    <ImageContiner>
      { (value === '1') ? (
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
  );
}

export default NotificationImages;
