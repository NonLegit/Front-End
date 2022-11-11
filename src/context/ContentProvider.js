/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ContentContext = createContext();

function ContentProvider(props) {
  const { children, name } = props;
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const client = axios.create({
    baseURL: 'https://d4c7978e-7da1-4346-bc22-092fa34e33fb.mock.pstmn.io',
  });

  useEffect(() => {
    client.get(`users/${name}/overview/200`) // fetch api
      .then((actualData) => {
        setPosts(actualData.data.posts);
        setComments(actualData.data.comments);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  return (
    <ContentContext.Provider value={{ posts, comments }}>
      {children}
    </ContentContext.Provider>

  );
}

export default ContentProvider;
