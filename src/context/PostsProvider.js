/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const PostsContext = createContext();

function PostsProvider(props) {
  const { children, name } = props;
  const [posts, setPosts] = useState([]);
  const client = axios.create({
    baseURL: 'https://d4c7978e-7da1-4346-bc22-092fa34e33fb.mock.pstmn.io',
  });
  useEffect(() => {
    client.get(`user/${name}/post/200`) // fetch api
      .then((actualData) => {
        setPosts(actualData.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  return (
    <PostsContext.Provider value={{ posts }}>
      {children}
    </PostsContext.Provider>

  );
}

export default PostsProvider;
