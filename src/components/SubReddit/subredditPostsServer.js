import { useState, useEffect } from 'react';
import axios from '../../services/instance';

const PostsData = (Name, postClass) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(postClass);

    axios.get(`/subreddits/${Name}/${postClass || 'best'}`).then((response) => {
      console.log(response);
      if (response?.status === 401) {
        window.location.pathname = 'login';
      }
      setData(response?.data);
      setError(null);
    }).catch((error) => {
      setError(error);
      console.log(error);
    });
  }, [postClass, Name]);
  return [data, error];
};
export default PostsData;
