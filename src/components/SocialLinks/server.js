import { useRef, useState, useEffect } from 'react';

import useFetch from '../../hooks/useFetch';
import axios from '../../services/instance';

export const allSocialLinks = () => {
  const [data, dataError, statusCode] = useFetch('users/social_links');

  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [data, dataError, statusCode]);

  return [data?.socialLinks];
};

export const postSocialLink = (dataToSend) => {
  const [userLink, displayText, socialId] = dataToSend;
  const [data, setData] = useState(null);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    axios.post('users/social_links/sabry', {
      userLink,
      displayText,
      socialId,
    }).then((response) => {
      if (response.status === 401) {
        window.location.pathname = 'login';
      }
      console.log(response);
      setData(response);
    }).catch((error) => {
      console.log(error);
    });
  }, [dataToSend]);
  return data;
};
