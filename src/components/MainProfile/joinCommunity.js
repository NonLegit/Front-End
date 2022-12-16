import { useRef, useState, useEffect } from 'react';

import axios from '../../services/instance';

/**
 * submit a post request when user join or leave a sommunity
 *
 * @property {boolean} sub - boolean to set
 * @property {string} subredditName - name of entity community
 * @returns {object} provided response through backend
 */

const joinCommunity = (sub, subredditName) => {
  const [data, setData] = useState(null);
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    axios.post(`subreddits/${subredditName}/subscribe`, {
      sub,
    }).then((response) => {
      console.log(response);
      setData(response);
    }).catch((error) => {
      console.log(error);
    });
  }, [subredditName, sub]);
  return data;
};

export default joinCommunity;
