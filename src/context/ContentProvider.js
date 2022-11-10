/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ContentContext = createContext();

function ContentProvider(props) {
  const { children } = props;
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const client = axios.create({
    baseURL: 'https://eec81823-8c2a-4b43-a068-05d358081539.mock.pstmn.io',
  });

  useEffect(() => {
    client.get('users/nour/overview/200') // fetch api
      .then((actualData) => {
        setPosts(actualData.data.posts);
        setComments(actualData.data.comments);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ContentContext.Provider value={{ posts, comments }}>
      {children}
    </ContentContext.Provider>

  );
}

export default ContentProvider;
