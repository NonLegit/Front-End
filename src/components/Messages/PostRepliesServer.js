import { useEffect, useState } from 'react';
import axios from '../../services/instance';
import { redirectLogin } from '../../utils/Redirect';
/**
 * - post replies Server Fetch
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
/**
 * - delete Message Server
 *  @param {Number} id - id of deleted message

 */

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
/**
 * - replay Message Server
 *  @param {Number} id - id of message which replied
 *  @param {String} id - text of replay
 */

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
