import { useState, useEffect } from 'react';
import axios from '../services/instance';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
      // console.log(response.data);
      setError(null);
    }).catch((error) => {
      if (error.response.status === 401) {
        window.location.href = './login';
      }
      setError(error);
      console.log(error);
    });
  }, [url]);

  return [data, error];
};
export default useFetch;
