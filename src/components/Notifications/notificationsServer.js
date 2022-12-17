import { useState, useEffect } from 'react';
import checkTimeNow from '../../utils/checkTimeNow';
import axios from '../../services/instance';
import { redirectLogin } from '../../utils/Redirect';
/**
 * - Notifications Fetch
 */
const notificationsFetch = () => {
  // earlier data
  const [earlier, setEarlier] = useState([]);
  // today data
  const [today, setToday] = useState([]);
  const api = '/users/notifications';
  useEffect(() => {
    axios.get(api) // fetch api
      .then((actualData) => {
        console.log(actualData.data);
        setToday(actualData.data.data.filter((e) => checkTimeNow(e.createdAt)));
        setEarlier(actualData.data.data.filter((e) => !checkTimeNow(e.createdAt)));
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
export default notificationsFetch;
export const notificationMarkAll = async () => {
  const api = '/users/notifications/mark_as_read';
  await axios.patch(`${api}`)
    .then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
      if (error.message !== 'Network Error') {
        if (error?.response.status === 401) {
          redirectLogin();
        }
      }
    });
};
export const notificationMarkRead = async (notificationId) => {
  const api = `/users/notifications/${notificationId}/mark_as_read`;
  await axios.patch(`${api}`)
    .then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
      if (error.message !== 'Network Error') {
        if (error?.response.status === 401) {
          redirectLogin();
        }
      }
    });
};
export const notificationHide = async (notificationId) => {
  const api = `/users/notifications/${notificationId}/hide`;
  await axios.patch(`${api}`)
    .then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
      if (error.message !== 'Network Error') {
        if (error?.response.status === 401) {
          redirectLogin();
        }
      }
    });
};
