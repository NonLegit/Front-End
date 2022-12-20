import { useState, useEffect } from 'react';
import axios from '../../../../../../services/instance';

export const mutedFetch = (subredditName) => {
  const [data, setData] = useState([]);

  const api = `/subreddits/${subredditName}/muted`;
  useEffect(() => {
    axios.get(api) // fetch api
      .then((actualData) => {
        console.log(actualData.data.status);
        setData(actualData.data.data.filter((users) => users.type.includes('muted')));
      })
      .catch((error) => {
        if (error.response.status === 401) {
          window.location.href = './login';
        }

        console.log(error);
      });
  }, [api]);
  return [data];
};
