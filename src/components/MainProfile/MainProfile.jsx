import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';
import Nsfw from '../NSFW/Nsfw';
import UserProvider from '../../contexts/UserProvider';
import UserInfoServer from './mainProfileServer';
import OtherProfileHeader from './OtherProfile/OtherHeader/OtherProfileHeader';
import OtherProfileMainContent from './OtherProfile/OtherProfileMainContent/OtherProfileMainContent';
import ProfileHeader from './Profile/Header/ProfileHeader';
import ProfileMainContent from './Profile/MainContent/ProfileMainContent';
import ProfileNotFound from './ProfileNotFound/ProfileNotFound';
import UserLogin from '../../authentication';
import ProfileBlocked from './ProfileBlocked/ProfileBlocked';
import cleanPage from '../../utils/cleanPage';

/**
 * MainProfile
 *
 * @component MainProfile
 * @property {function} cleanPage - return number of page to 0 when unmount component

 * @returns {React.Component} MainProfile
 */
function MainProfile() {
  const [cookies] = useCookies(['redditUser']);
  const [isExist, setIsExist] = useState(true);
  const [isBlocked, setIsBlocked] = useState(false);
  const [warning, setWarning] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState('');
  const { username } = useParams();
  const [info, statusCode] = UserInfoServer(username);
  const isLoggedIn = UserLogin([username]);

  const [nsfw, setNsfw] = useState();
  const [userNsfw, setUserNsfw] = useState();

  cleanPage();

  useEffect(() => {
    console.log(username);
  }, [username]);

  useEffect(() => {
    setUserLoggedIn(cookies.redditUser?.userName);
    setIsBlocked(false);
    setUserNsfw(cookies.redditUser?.adultContent);
  }, [cookies]);

  useEffect(() => {
    if (statusCode === 404) setIsExist(false); // 404

    setNsfw(info?.nsfw);
    if (userNsfw === false && nsfw === true) {
      setWarning(true);
    } else {
      setWarning(false);
    }
    // console.log(warning);
  }, [info, statusCode, userNsfw, nsfw]);

  return (

    isLoggedIn ? (
      <UserProvider name={username}>
        <ProfileHeader />
        <ProfileMainContent username={userLoggedIn} />
      </UserProvider>
    ) : isExist && !isBlocked && !warning ? (
      <>
        <OtherProfileHeader />
        <OtherProfileMainContent username={userLoggedIn} />
      </>
    ) : isExist && isBlocked && !warning ? (
      <ProfileBlocked username={username} handleCont={() => { setIsBlocked(false); }} />
    ) : isExist && warning && !isBlocked ? (
      <Nsfw handleWarning={() => { setWarning(false); }} />
    ) : <ProfileNotFound />

  );
}

export default MainProfile;
