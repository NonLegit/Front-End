/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const FilteredPostsContext = createContext();

function FilteredPostsProvider(props) {
  const { param, children } = props;
  const [posts, setPosts] = useState([]);
  const client = axios.create({
    baseURL: 'https://eec81823-8c2a-4b43-a068-05d358081539.mock.pstmn.io',
  });
  useEffect(() => {
    client.get(`users/nour/${param}/200`) // fetch api
      .then((actualData) => {
        setPosts(actualData.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <FilteredPostsContext.Provider value={{ posts }}>
      {children}
    </FilteredPostsContext.Provider>

  );
}

export default FilteredPostsProvider;
