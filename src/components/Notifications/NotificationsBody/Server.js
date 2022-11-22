import { useState, useEffect } from 'react';
import moment from 'moment/moment';
import axios from '../../../services/instance';

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
        setToday(actualData.data.filter((e) => moment(e.createdAt).isSame(moment(), 'day')));
        setEarlier(actualData.data.filter((e) => !moment(e.createdAt).isSame(moment(), 'day')));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [api]);
  return [today, earlier];
};
export default NotificationsFetch;
