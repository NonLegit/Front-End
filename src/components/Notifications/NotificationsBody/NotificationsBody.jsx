/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
import { createContext, useState, useEffect } from 'react';
import { onForegroundNottification } from '../../../lib/firebase';
import notificationsFetch, { notificationHide } from '../notificationsServer';
import NotificationCategories from './NotificationCategories/NotificationCategories';
import
{
  Notification, NotificationsContiner, NotificationsHead,
} from './styles';

export const CategoriesContext = createContext();

/**
 * - Notifications Body
 * - fech notifications data from api
 *  @component
 * @param {function} setToday - to update today notifiactions
 * @param {function} setEarlier - to update eariler notifiactions
 * @param {Array} earlier - Array of eariler notifiactions
 * @param {Array} today - Array of today notifiactions
 * @property  {function} handleClick - to set what notifiacation we select and it's type
 * @property {function} handel - deleteing when click hide
 * @return {React.Component} - Body of each Notification depandent it's type
 */

function NotificationsBody({
  setEarlier, setToday, earlier, today,
}) {
  // earlier data
  // const [earlier, setEarlier] = useState([]);
  // // today data
  // const [today, setToday] = useState([]);
  const [dataToday, dataEarlier] = notificationsFetch();
  //  anchor element
  const [anchorEl, setAnchorEl] = useState(null);
  // index selected element
  const [select, setSelect] = useState(null);
  // type  selected element
  const [type, setType] = useState(null);
  // boll anchor element
  const open = Boolean(anchorEl);

  useEffect(() => {
    setEarlier(dataEarlier);
    setToday(dataToday);
    console.log(dataToday);
    console.log(dataEarlier);
  }, [dataEarlier, dataToday]);
  // function to set what notifiacation we select and it's type
  const handleClick = (event, id) => {
    event.stopPropagation();
    console.log(id);
    console.log(event);
    setAnchorEl(event.currentTarget);
    setSelect(id);
    setType(event.currentTarget.getAttribute('catorige'));
  };

  useEffect(() => {
    console.log('doaa');
    onForegroundNottification()
      .then((payload) => {
        console.log('Received foreground message: ', payload);
        const { data: { val } } = payload;
        setToday((oldArray) => [JSON.parse(val), ...oldArray]);
      })
      .catch((err) => console.log('An error occured while retrieving foreground message. ', err));
  });
  // function to handel deleteing when click hide
  const handleClose = (event) => {
    event.stopPropagation();
    console.log(select);
    const tabindex = event.currentTarget.getAttribute('tabindex');
    if (select !== null && tabindex === '0') {
      if (type === 'today') {
        setToday(
          today.filter((e) => (e._id !== (select))),
        );
      } else {
        setEarlier(
          earlier.filter((e) => (e._id !== (select))),
        );
      }
      notificationHide(select);
      setSelect(null);
    }
    setAnchorEl(null);
  };
  return (
    <Notification data-testid="notifications-body">
      <NotificationsContiner>
        { (today?.length !== 0)
        && (
        <>
          <NotificationsHead>Today</NotificationsHead>

          <CategoriesContext.Provider value={{
            today, handleClose, handleClick, open, anchorEl,
          }}
          >
            <NotificationCategories NavBar={false} />
          </CategoriesContext.Provider>
        </>
        )}
        { (earlier?.length !== 0)
          && (
          <>
            {' '}
            <NotificationsHead>Earlier</NotificationsHead>
            <CategoriesContext.Provider value={{
              earlier, handleClose, handleClick, open, anchorEl,
            }}
            >
              <NotificationCategories NavBar={false} />
            </CategoriesContext.Provider>
          </>
          )}
      </NotificationsContiner>

    </Notification>
  );
}

export default NotificationsBody;
