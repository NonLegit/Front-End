import { useState, useEffect } from 'react';
import axios from '../../services/instance';

const useFetch = (url, q, type, sort, time) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [statusCode, setStatusCode] = useState(null);

  useEffect(() => {
    axios.get(url, {
      params: {
        // limit,
        // page,
        type,
        sort,
        time,
        q,
      },
    }).then((response) => {
      console.log(response);
      console.log(response.data);
      console.log(response.data.data);

      setData(response.data.data);
      // console.log(response.data);
      setStatusCode(response.status);
      console.log(response.status);
      setError(null);
    }).catch((error) => {
      setError(error);
      setStatusCode(error.response.status);
      console.log(error);
    });
  }, [url, type]);

  return [data, error, statusCode];
};
export default useFetch;
