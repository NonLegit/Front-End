import { useEffect, useState } from 'react';
import axios from '../../../services/instance';
import { redirectLogin } from '../../../utils/Redirect';
/**
 * - Notifications Fetch
 */

export const messagesServer = () => {
  const api = '/messages';
  const [data, setData] = useState([]);
  const [message, setMessage] = useState([]);
  useEffect(() => {
    axios.get(api)
      .then((actualData) => {
        // const All = actualData.data.data.filter((e) => e.type !== 'userMessage');
        const output = [];
        // const userMessage = actualData.data.data.filter((e) => e.type === 'userMessage');
        // const ids = [...new Set(userMessage.map((i) => i?.subject?._id))];
        // ids.forEach((id) => {
        //   const res = userMessage.filter((name) => name?.subject?._id === id);
        //   output.push(res);
        // });
        // console.log(output);
        // console.log(All);
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
