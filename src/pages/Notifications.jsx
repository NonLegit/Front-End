import MainNotifications from '../components/Notifications/MainNotifications';
import { ContinerNotifications } from '../components/Notifications/styles';

/**
 * Notifications page
 *  @component
 *
 * @return {React.Component} - All Notifications page sections
 */

function Notifications() {
  return (
    <ContinerNotifications data-testid="notifications">
      <MainNotifications />

    </ContinerNotifications>
  );
}

export default Notifications;
