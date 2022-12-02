import { useState, useEffect } from 'react';
import checkTimeNow from '../../../utils/checkTimeNow';
import axios from '../../../services/instance';
/**
 * - Notifications Fetch
 */
const NotificationsFetch = () => {
  // earlier data
  const [earlier, setEarlier] = useState([]);
  // today data
  const [today, setToday] = useState([]);
  const api = '/user/notifications';
  useEffect(() => {
    axios.get(api) // fetch api
      .then((actualData) => {
        console.log(actualData.data);
        setToday(actualData.data.filter((e) => checkTimeNow(e.createdAt)));
        setEarlier(actualData.data.filter((e) => !checkTimeNow(e.createdAt)));
      })
      .catch((error) => {
        if (error.response.status === 401) {
          window.location.href = './login';
        }

        console.log(error);
      });
  }, [api]);
  return [today, earlier];
};
export default NotificationsFetch;
