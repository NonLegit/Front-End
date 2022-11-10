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
const client = axios.create({
  baseURL: 'https://3fa9144e-7687-495e-9c29-266e723973b7.mock.pstmn.io',
});
/**
 * Notifications Body
 * - fech notifications data from api
 * @property  {function} handleClick to set what notifiacation we select and it's type
 * @property {function} handel deleteing when click hide
 * @return {React.Component} - Body of each Notification depandent it's type
 */

function NotificationsBody() {
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
    client.get('notifications') // fetch api
      .then((actualData) => {
        setToday(actualData.data.filter((e) => moment(e.createdAt).isSame(moment(), 'day')));
        setEarlier(actualData.data.filter((e) => !moment(e.createdAt).isSame(moment(), 'day')));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // function to set what notifiacation we select and it's type
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setSelect(event.currentTarget.getAttribute('id'));
    setType(event.currentTarget.getAttribute('catorige'));
  };
  // function to handel deleteing when click hide
  const handleClose = (event) => {
    const tabindex = event.currentTarget.getAttribute('tabindex');
    if (select !== null && tabindex === '0') {
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
    <Notification data-testid="notifications-body">
      <NotificationsContiner>
        { (today.length !== 0)
        && (
        <>
          <NotificationsHead>Today</NotificationsHead>

          <CategoriesContext.Provider value={{
            today, handleClose, handleClick, open, anchorEl,
          }}
          >
            <NotificationCategories />
          </CategoriesContext.Provider>
        </>
        )}
        { (earlier.length !== 0)
          && (
          <>
            {' '}
            <NotificationsHead>Earlier</NotificationsHead>
            <CategoriesContext.Provider value={{
              earlier, handleClose, handleClick, open, anchorEl,
            }}
            >
              <NotificationCategories />
            </CategoriesContext.Provider>
          </>
          )}
      </NotificationsContiner>
    </Notification>
  );
}

export default NotificationsBody;