/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
import { createContext, useState, useEffect } from 'react';
import NotificationCategories from './NotificationCategories/NotificationCategories';
import
{
  Notification, NotificationsContiner, NotificationsHead,
} from './styles';

export const CategoriesContext = createContext();
/**
 * Notifications Body
 * The component fetch data from api
 *  and it has functions handleClick and handleClose
 * @return {React.Component} - Body of each Notification depandent it's type
 */

function NotificationsBody() {
  const api = 'https://d441e0bc-931f-4cc7-ab12-a51e81f70be4.mock.pstmn.io/fruits';
  const [earlier, setEarlier] = useState([]);
  const [today, setToday] = useState([]);
  useEffect(() => {
    fetch(api) // fetch api
      .then((response) => response.json())
      .then((actualData) => {
        setEarlier(actualData.Earlier);
        setToday(actualData.Today);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [api]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [select, setSelect] = useState(null);
  const [type, setType] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => { // function to set what notifiacation we select and it's type
    setAnchorEl(event.currentTarget);
    setSelect(event.currentTarget.getAttribute('id'));
    setType(event.currentTarget.getAttribute('catorige'));
  };
  const handleClose = (event) => { // function to handel if delete when close
    const tabindex = event.currentTarget.getAttribute('tabindex');
    console.log(tabindex);
    if (select != null && tabindex === '0') {
      if (type === 'today') {
        setToday(
          today.filter((e, i) => i !== Number(select)),
        );
      } else {
        setEarlier(
          earlier.filter((e, i) => i !== Number(select)),
        );
      }
      setSelect(null);
    }
    setAnchorEl(null);
  };
  return (
    <Notification data-testid="notifications-body-test">
      <NotificationsContiner>
        {(today.length !== 0) && <NotificationsHead>Today</NotificationsHead> }

        <CategoriesContext.Provider value={{
          today, handleClose, handleClick, open, anchorEl,
        }}
        >
          <NotificationCategories />
        </CategoriesContext.Provider>
        { (earlier.length !== 0)
          && <NotificationsHead>Earlier</NotificationsHead> }
        <CategoriesContext.Provider value={{
          earlier, handleClose, handleClick, open, anchorEl,
        }}
        >
          <NotificationCategories />
        </CategoriesContext.Provider>
      </NotificationsContiner>
    </Notification>
  );
}

export default NotificationsBody;
