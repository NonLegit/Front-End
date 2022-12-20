import { useState, useEffect } from 'react';
import axios from '../../services/instance';
/**
 * get Posts to subreddit
 *
 * @property {string} Name - name of subreddit
 * @property {string} postClass - type of posts

 */
const PostsData = (Name, postClass) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(postClass);

    axios.get(`/subreddits/${Name}/${postClass || 'hot'}`).then((response) => {
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
