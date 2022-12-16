/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from 'react';
import communitiesServer from '../components/MainProfile/Profile/MainContent/Sidebar/Communities/communitiesServer';

export const CommunitiesContext = createContext();

function CommunitiesProvider(props) {
  const { children } = props;
  const [communities, setCommunities] = useState([]);
  const [communitiesData] = communitiesServer();
  useEffect(() => {
    setCommunities(communitiesData);
  }, [communitiesData]);

  return (
    <CommunitiesContext.Provider value={{ communities }}>
      {children}
    </CommunitiesContext.Provider>
  );
}

export default CommunitiesProvider;
