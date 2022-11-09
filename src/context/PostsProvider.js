/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const PostsContext = createContext();

function PostsProvider(props) {
  const { children } = props;
  const [posts, setPosts] = useState([]);
  const client = axios.create({
    baseURL: 'https://eec81823-8c2a-4b43-a068-05d358081539.mock.pstmn.io',
  });
  useEffect(() => {
    client.get('users/nour/post/200') // fetch api
      .then((actualData) => {
        setPosts(actualData.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <PostsContext.Provider value={{ posts }}>
      {children}
    </PostsContext.Provider>

  );
}

export default PostsProvider;
