/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from 'react';
import { subscribedUser } from '../components/MainProfile/OtherProfile/OtherProfileMainContent/OtherProfileSidebar/OtherProfileCommunities/otherProfileCommunitiesServer';

export const CommunitiesSubscriberContext = createContext();

function CommunitiesSubscriberProvider(props) {
  const { children } = props;
  const [communitiesSubscriber, setCommunitiesSubscriber] = useState([]);
  const [communitiesData] = subscribedUser();
  useEffect(() => {
    setCommunitiesSubscriber(communitiesData);
  }, [communitiesData]);

  return (
    <CommunitiesSubscriberContext.Provider value={{ communitiesSubscriber }}>
      {children}
    </CommunitiesSubscriberContext.Provider>
  );
}

export default CommunitiesSubscriberProvider;
