import { useState, useEffect } from 'react';
import axios from '../services/instance';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [statusCode, setStatusCode] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      // console.log(response);
      setData(response.data);
      console.log(response.data);
      setStatusCode(response.status);
      // console.log(response.data);
      setError(null);
    }).catch((error) => {
      setError(error);
      setStatusCode(error.response.status);
      console.log(error);
    });
  }, [url]);

  return [data, error, statusCode];
};
export default useFetch;
