/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment/moment';
import NotificationCategories from './NotificationCategories/NotificationCategories';
import
{
  Notification, NotificationsContiner, NotificationsHead,
} from './styles';

export const CategoriesContext = createContext();
/**
 * Notifications Body
 * - fech notifications data from api
 * - and it has functions handleClick to set what notifiacation we select and it's type
 * - and handleClose handel deleteing when click hide
 * @return {React.Component} - Body of each Notification depandent it's type
 */

function NotificationsBody() {
  // api
  const api = 'https://d441e0bc-931f-4cc7-ab12-a51e81f70be4.mock.pstmn.io/fruits';

  // earlier data
  const [earlier, setEarlier] = useState([]);
  // today data
  const [today, setToday] = useState([]);
  //  anchor element
  const [anchorEl, setAnchorEl] = useState(null);
  // index selected element
  const [select, setSelect] = useState(null);
  // type  selected element
  const [type, setType] = useState(null);
  // boll anchor element
  const open = Boolean(anchorEl);
  useEffect(() => {
    axios.get(api) // fetch api
      .then((actualData) => {
        setToday(actualData.data.filter((e) => moment(e.createdAt).isSame(moment(), 'day')));
        setEarlier(actualData.data.filter((e) => !moment(e.createdAt).isSame(moment(), 'day')));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [api]);
  const handleClick = (event) => { // function to set what notifiacation we select and it's type
    setAnchorEl(event.currentTarget);
    setSelect(event.currentTarget.getAttribute('id'));
    setType(event.currentTarget.getAttribute('catorige'));
  };
  const handleClose = (event) => { // function to handel deleteing when click hide
    const tabindex = event.currentTarget.getAttribute('tabindex');
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