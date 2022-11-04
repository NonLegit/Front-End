/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import NotificationCategories from './NotificationCategories/NotificationCategories';
import
{
  Notification, NotificationsContiner, NotificationsHead,
} from './styles';

export const EarlierContext = createContext();
function NotificationsBody() {
  const api = 'https://d441e0bc-931f-4cc7-ab12-a51e81f70be4.mock.pstmn.io/fruits';
  const [earlier, setEarlier] = useState([]);
  const [today, setToday] = useState([]);
  useEffect(() => {
    axios.get(api) // fetch api
      .then((actualData) => {
        setEarlier(actualData.data.Earlier);
        setToday(actualData.data.Today);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [api]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [select, setSelect] = useState(null);
  const [type, setType] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setSelect(event.currentTarget.getAttribute('id'));
    setType(event.currentTarget.getAttribute('catorige'));
  };
  const handleClose = (event) => {
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
    <Notification>
      <NotificationsContiner>
        {(today.length !== 0) && <NotificationsHead>Today</NotificationsHead> }

        <EarlierContext.Provider value={{
          today, handleClose, handleClick, open, anchorEl,
        }}
        >
          <NotificationCategories />
        </EarlierContext.Provider>
        { (earlier.length !== 0)
          && <NotificationsHead>Earlier</NotificationsHead> }
        <EarlierContext.Provider value={{
          earlier, handleClose, handleClick, open, anchorEl,
        }}
        >
          <NotificationCategories />
        </EarlierContext.Provider>
      </NotificationsContiner>
    </Notification>
  );
}

export default NotificationsBody;
