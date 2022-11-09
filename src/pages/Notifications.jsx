import NotificationsBody from '../components/Notifications/NotificationsBody/NotificationsBody';
import NotificationsHeader from '../components/Notifications/NotificationsHeader/NotificationsHeader';
import { ContinerNotifications } from '../components/Notifications/NotificationsHeader/styles';

/**
 * Notifications page
 * @return {React.Component} - All Notifications page sections
 */

function Notifications() {
  return (
    <ContinerNotifications data-testid="notifications">
      <NotificationsHeader />
      <NotificationsBody />
    </ContinerNotifications>
  );
}

export default Notifications;
