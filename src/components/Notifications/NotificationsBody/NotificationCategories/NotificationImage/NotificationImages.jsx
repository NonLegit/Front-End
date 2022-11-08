/* eslint-disable import/no-cycle */
import { useContext } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  ImageContiner, ChildImage, NotificationImage,
} from './styles';
import { ReplayContext } from '../NotificationCategories';

/**
 * Notification Images
 * @param {string} value - type of notifiaction
 * @return {React.Component} - Retrun all image beside notification body
 */
function NotificationImages() {
  const
    value = useContext(ReplayContext);
  return (
    <ImageContiner data-testid="notification-image">
      { (value === 'comment_reply' || value === 'post_reply') ? (
        <>
          <NotificationImage src="https://styles.redditmedia.com/t5_78ssv9/styles/profileIcon_snoocf705ea1-8fa3-4bb7-8251-87244be506cc-headshot.png?width=64&height=64&frame=1&crop=64:64,smart&s=1cf9bff3cf29717ffc57976fb69334888e4774ef" alt="profile iamge" />
          <ChildImage>
            <ModeCommentIcon />
          </ChildImage>
        </>
      ) : (value === 'user_mention') ? (
        <>
          <NotificationImage src="https://styles.redditmedia.com/t5_78ssv9/styles/profileIcon_snoocf705ea1-8fa3-4bb7-8251-87244be506cc-headshot.png?width=64&height=64&frame=1&crop=64:64,smart&s=1cf9bff3cf29717ffc57976fb69334888e4774ef" alt="profile iamge" />
          <ChildImage>
            <PersonIcon />
          </ChildImage>
        </>
      ) : (value === 'follower') ? (
        <>
          <NotificationImage src="https://styles.redditmedia.com/t5_78ssv9/styles/profileIcon_snoocf705ea1-8fa3-4bb7-8251-87244be506cc-headshot.png?width=64&height=64&frame=1&crop=64:64,smart&s=1cf9bff3cf29717ffc57976fb69334888e4774ef" alt="profile iamge" />
          <ChildImage>
            <FavoriteIcon />
          </ChildImage>
        </>
      ) : (
        <>
          <NotificationImage src="https://www.redditstatic.com/notifications/default_subreddit_avatar.png" alt="ring" />
          <ChildImage>
            { ' ' }
            <NotificationsIcon />
            { ' ' }
          </ChildImage>
        </>
      ) }
    </ImageContiner>
  );
}

export default NotificationImages;
