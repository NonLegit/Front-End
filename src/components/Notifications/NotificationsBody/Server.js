import { useState, useEffect } from 'react';
import moment from 'moment/moment';
import axios from '../../../services/instance';

const NotificationsFetch = (url) => {
  // earlier data
  const [earlier, setEarlier] = useState([]);
  // today data
  const [today, setToday] = useState([]);
  useEffect(() => {
    axios.get(url) // fetch api
      .then((actualData) => {
        console.log(actualData.data);
        setToday(actualData.data.filter((e) => moment(e.createdAt).isSame(moment(), 'day')));
        setEarlier(actualData.data.filter((e) => !moment(e.createdAt).isSame(moment(), 'day')));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return [today, earlier];
};
export default NotificationsFetch;
