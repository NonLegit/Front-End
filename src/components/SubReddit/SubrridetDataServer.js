import { useState, useEffect } from 'react';
import axios from '../../services/instance';
/**
 * get all subreddit data
 *
 * @property {string} Name - name of subreddit

 */
const getSubredditAllData = (Name) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [statusCode, setStatusCode] = useState(null);

  useEffect(() => {
    axios.get(`/subreddits/${Name}`).then((response) => {
      console.log(response);

      setData(response.data);
      setStatusCode(response.status);
      // console.log(response.data);
      setError(null);
    }).catch((error) => {
      setError(error);
      setStatusCode(error.response.status);
      console.log(error);
    });
    if (statusCode === 401 || statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [Name]);
  // console.log('hosny', data);

  return [data?.data, error, statusCode];
};
export default getSubredditAllData;
