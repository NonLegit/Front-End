import { useEffect, useState } from 'react';
import axios from '../../../services/instance';
import { redirectLogin } from '../../../utils/Redirect';
/**
 * - Notifications Fetch
 */

export const messagesAllServer = () => {
  const api = '/messages/unread';

  const [data, setData] = useState([]);
  const [message, setMessage] = useState([]);
  useEffect(() => {
    axios.get(api)
      .then((actualData) => {
        const output = [];
        setData(actualData.data.data);
        setMessage(output);
        console.log(actualData.data);
      }).catch((error) => {
        console.log(error);
        if (error?.response?.status === 401) {
          redirectLogin();
        }
      });
  }, [api]);

  return [data, message];
};
export const markAllRead = () => {
  const markAsRead = '/messages/mark_as_read';

  axios.patch(markAsRead)
    .then((actualData) => {
      console.log(actualData.data);
    }).catch((error) => {
      console.log(error);
      if (error?.response?.status === 401) {
        redirectLogin();
      }
    });
};
