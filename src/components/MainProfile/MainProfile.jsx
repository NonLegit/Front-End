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
import UserLogin from '../../authentication';
import ProfileBlocked from './ProfileBlocked/ProfileBlocked';

function MainProfile() {
  const [cookies] = useCookies(['redditUser']);
  const [isExist, setIsExist] = useState(true);
  const [isBlocked, setIsBlocked] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState('');
  const { username } = useParams();

  const [info, statusCode] = UserInfoServer(username);
  const isLoggedIn = UserLogin([username]);
  useEffect(() => {
    setUserLoggedIn(cookies.redditUser?.userName);
    setIsBlocked(true);
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
    ) : isExist && !isBlocked ? (
      <>
        <OtherProfileHeader />
        <OtherProfileMainContent username={userLoggedIn} />
      </>
    ) : isExist && isBlocked ? (
      <ProfileBlocked username={username} handleCont={() => { setIsBlocked(false); }} />
    ) : <ProfileNotFound />
  );
}

export default MainProfile;
