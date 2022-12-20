import { useState, useEffect } from 'react';
import { useListingContext } from '../../contexts/ListingContext';
import axios from '../../services/instance';

const GetSearchData = (url, q, type, sort, time) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [statusCode, setStatusCode] = useState(null);
  const { page, limit, setPage } = useListingContext();
  console.log(type);

  // const setMyData = (d) => {
  //   console.log('zzzzzzzzzzz');
  //   if (page === 0 || !d.data) {
  //     console.log('aaaaaaaaa');
  //     setData(d.data);
  //   } else {
  //     console.log('bbbbbbbbbbb');
  //     const tempData = {
  //       ...d.data,
  //     };
  //     tempData.data = [...tempData.data, ...d.data];
  //     setData(tempData);
  //   }
  // };
  useEffect(() => {
    console.log('etghayar1');
    axios.get(url, {
      params: {
        limit,
        page,
        type,
        sort,
        time,
        q,
      },
    }).then((response) => {
      console.log('hosny', response);
      console.log('ana geeeet', page, limit);
      console.log(response.data.data);
      console.log(response.data);
      // setData((data) => {
      //   console.log('zzzzzzzzzzz');
      //   if (page === 0 || !data) {
      //     console.log('aaaaaaaaa');
      //     return response.data.data;
      //   }
      //   console.log('bbbbbbbbbbb');
      //   const tempData = {
      //     ...data,
      //   };
      //   tempData.data = [...tempData.data, ...response.data.data];
      //   return tempData;
      // });
      setData(response?.data?.data);
      // setData(response.data.data);
      console.log(data);
      setStatusCode(response.status);
      // console.log(response.data);
      setError(null);
    }).catch((error) => {
      setError(error);
      setStatusCode(error.response.status);
      console.log(error);
    });
  }, [page, limit, url, q, type, sort, time]);

  useEffect(() => {
    setPage(0);
    console.log('etghayar2');
  }, [type]);
  return [data, error, statusCode];
};
export default GetSearchData;
