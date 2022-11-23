import { useEffect, useState } from 'react';

import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';
import OtherProfileHeader from './OtherProfile/OtherHeader/OtherProfileHeader';
import OtherProfileContent from './OtherProfile/OtherProfileMainContent/OtherProfileMainContent';
import MyProfileHeader from './Profile/Header/ProfileHeader';
import MyProfileContent from './Profile/MainContent/ProfileMainContent';

function MainProfile() {
  const [cookies] = useCookies(['redditUser']);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { username } = useParams();
  useEffect(() => {
    setIsLoggedIn(cookies.redditUser?.userName === username);
  }, [cookies]);
  return (
    isLoggedIn ? (
      <>
        <MyProfileHeader />
        <MyProfileContent />

      </>
    ) : (
      <>
        <OtherProfileHeader />
        <OtherProfileContent />

      </>
    )
  );
}

export default MainProfile;
