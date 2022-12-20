import { useEffect, useState } from 'react';
import axios from '../../../services/instance';
import { redirectLogin } from '../../../utils/Redirect';
/**
 * - Notifications Fetch
 */

export const messagesAllServer = () => {
  const api = '/messages/unread';
  const markAsRead = '/messages/mark_as_read ';
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
    axios.post(markAsRead)
      .then((actualData) => {
        setData(actualData.data.data);
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
