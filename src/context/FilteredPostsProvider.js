/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const FilteredPostsContext = createContext();

function FilteredPostsProvider(props) {
  const { param, children, name } = props;
  const [posts, setPosts] = useState([]);
  const client = axios.create({
    baseURL: 'https://d4c7978e-7da1-4346-bc22-092fa34e33fb.mock.pstmn.io',
  });
  useEffect(() => {
    client.get(`users/${name}/${param}/200`) // fetch api
      .then((actualData) => {
        setPosts(actualData.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [param, name]);

  return (
    <FilteredPostsContext.Provider value={{ posts }}>
      {children}
    </FilteredPostsContext.Provider>

  );
}

export default FilteredPostsProvider;
