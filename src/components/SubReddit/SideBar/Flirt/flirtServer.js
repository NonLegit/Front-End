import { useState, useEffect } from 'react';
import axios from '../../../../services/instance';
/**
 * Get flairs for subreddit
 *
 * @property {string} Name - name of subreddit

 */
const useFetch = (Name) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [statusCode, setStatusCode] = useState(null);

  useEffect(() => {
    axios.get(`/subreddits/${Name}/flair`).then((response) => {
      // console.log(response);
      setData(response.data);
      setStatusCode(response.status);
      // console.log(response.data);
      setError(null);
    }).catch((error) => {
      setError(error);
      setStatusCode(error.response.status);
      console.log(error);
    });
  }, []);
  if (statusCode === 401) {
    window.location.pathname = 'login';
  }
  return [data?.data, error];
};
export default useFetch;
