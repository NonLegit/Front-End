import NotificationsBody from '../components/Notifications/NotificationsBody/NotificationsBody';
import NotificationsHeader from '../components/Notifications/NotificationsHeader/NotificationsHeader';
import { ContinerNotifications } from '../components/Notifications/NotificationsHeader/styles';

function Notifications() {
  return (
    <ContinerNotifications>
      <NotificationsHeader />
      <NotificationsBody />
    </ContinerNotifications>
  );
}

export default Notifications;
