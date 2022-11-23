// import { useState } from 'react';
import axios from '../../../../../services/instance';

const useFetch = async (url) => {
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  let data;
  let statusCode;
  await axios.get(url).then((response) => {
    console.log(response);
    statusCode = response.status;
    // setData(true);
    data = true;
  }).catch((error) => {
    // setError(error);
    // setData(false);
    console.log(error);
    data = false;
  });
  return { data, statusCode };
};
export default useFetch;
