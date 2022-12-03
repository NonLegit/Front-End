import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';
import UserProvider from '../../contexts/UserProvider';
import UserInfoServer from './mainProfileServer';
import OtherProfileHeader from './OtherProfile/OtherHeader/OtherProfileHeader';
import OtherProfileMainContent from './OtherProfile/OtherProfileMainContent/OtherProfileMainContent';
import ProfileHeader from './Profile/Header/ProfileHeader';
import ProfileMainContent from './Profile/MainContent/ProfileMainContent';
import ProfileNotFound from './ProfileNotFound/ProfileNotFound';

function MainProfile() {
  const [cookies] = useCookies(['redditUser']);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isExist, setIsExist] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState('');
  const { username } = useParams();

  const [info, statusCode] = UserInfoServer(username);

  useEffect(() => {
    setIsLoggedIn(cookies.redditUser?.userName === username);
    setUserLoggedIn(cookies.redditUser?.userName);
  }, [cookies]);

  useEffect(() => {
    if (statusCode === 404) setIsExist(false); // 404
  }, [info, statusCode]);

  return (
    isLoggedIn ? (
      <UserProvider name={username}>
        <ProfileHeader />
        <ProfileMainContent username={userLoggedIn} />
      </UserProvider>
    ) : isExist ? (
      <>
        <OtherProfileHeader />
        <OtherProfileMainContent username={userLoggedIn} />
      </>
    ) : <ProfileNotFound />
  );
}

export default MainProfile;
