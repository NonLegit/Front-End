import { useEffect, useState } from 'react';
import axios from '../../services/instance';
import { redirectLogin } from '../../utils/Redirect';
/**
 * - Notifications Fetch
 */

export const repliesServer = () => {
  const api = '/messages/post_replies';
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(api)
      .then((actualData) => {
        setData(actualData.data);
        console.log(actualData.data);
      }).catch((error) => {
        console.log(error);

        if (error?.response?.status === 401) {
          redirectLogin();
        }
      });
  }, [api]);
  return [data];
};

export const deleteMessage = (id) => {
  console.log('sa');
  const api = `/messages/${id}`;

  axios.delete(api)
    .then((actualData) => {
      console.log(actualData.data);
    }).catch((error) => {
      console.log(error);

      if (error?.response?.status === 401) {
        redirectLogin();
      }
    });
};
export const replayMessage = (id, text) => {
  console.log('sa');
  const api = `/messages/${id}/reply`;
  axios.post(api, { text })
    .then((actualData) => {
      console.log(actualData.data);
    }).catch((error) => {
      console.log(error);

      if (error?.response?.status === 401) {
        redirectLogin();
      }
    });
};
