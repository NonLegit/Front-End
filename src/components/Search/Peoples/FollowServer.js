import { useRef, useState, useEffect } from 'react';

import axios from '../../../services/instance';

export const followRequest = (username, isFollowed) => {
  const [data, setData] = useState(null);

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFollowed === undefined) {
      return;
    }
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    axios.post(`users/${username}/${isFollowed ? 'follow' : 'unfollow'}`, {

    }).then((response) => {
      if (response.status === 401) {
        window.location.pathname = 'login';
      }
      setData(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }, [username, isFollowed]);
  return [data];
};
