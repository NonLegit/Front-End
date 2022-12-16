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
 * NotificationImages
 *  @component
 * @param {string} value - type of notifiaction
 * @return {React.Component} - Retrun all image beside notification body
 */
function NotificationImages({ image }) {
  const
    value = useContext(ReplayContext);
  return (
    <ImageContiner data-testid="notification-image">
      { (value === 'commentReply' || value === 'postReply') ? (
        <>
          <NotificationImage src={image} alt="profile iamge" />
          <ChildImage>
            <ModeCommentIcon />
          </ChildImage>
        </>
      ) : (value === 'userMention') ? (
        <>
          <NotificationImage src={image} alt="profile iamge" />
          <ChildImage>
            <PersonIcon />
          </ChildImage>
        </>
      ) : (value === 'follow') ? (
        <>
          <NotificationImage src={image} alt="profile iamge" />
          <ChildImage>
            <FavoriteIcon />
          </ChildImage>
        </>
      ) : (
        <>
          <NotificationImage src={image} alt="ring" />
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
