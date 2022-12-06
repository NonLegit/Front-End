import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import UserProvider from '../../contexts/UserProvider';
import UserInfoServer from './mainProfileServer';
import OtherProfileHeader from './OtherProfile/OtherHeader/OtherProfileHeader';
import OtherProfileMainContent from './OtherProfile/OtherProfileMainContent/OtherProfileMainContent';
import ProfileHeader from './Profile/Header/ProfileHeader';
import ProfileMainContent from './Profile/MainContent/ProfileMainContent';
import ProfileNotFound from './ProfileNotFound/ProfileNotFound';
import UserLogin from '../../authentication';
import { BackHomeButton, ImageWarning, NotFoundBox } from './styles';

function MainProfile() {
  const [cookies] = useCookies(['redditUser']);
  const [isExist, setIsExist] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState('');
  const { username } = useParams();

  const [info, statusCode] = UserInfoServer(username);
  const isLoggedIn = UserLogin([username]);

  const [nsfw, setNsfw] = useState();
  const [userNsfw, setUserNsfw] = useState();
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    setUserLoggedIn(cookies.redditUser?.userName);

    setUserNsfw(cookies.redditUser?.adultContent);
  }, [cookies]);

  useEffect(() => {
    if (statusCode === 404) setIsExist(false); // 404

    setNsfw(info?.adultContent);
    if (userNsfw === false && nsfw === true) {
      setWarning(true);
    } else {
      setWarning(false);
    }
    // console.log(warning);
  }, [info, statusCode, userNsfw, nsfw]);

  const redirect = () => {
    window.location.pathname = '/';
  };
  return (

    isLoggedIn ? (
      <UserProvider name={username}>
        <ProfileHeader />
        <ProfileMainContent username={userLoggedIn} />
      </UserProvider>
    ) : (isExist && warning)
      ? (
        <NotFoundBox>
          <ImageWarning src="https://www.redditstatic.com/desktop2x/img/content-gate-icons/nsfw.png" />
          <Typography sx={{ fontWeight: 700, marginBottom: 2, fontSize: '18px' }}>You must be 18+ to view this community</Typography>
          <Typography sx={{ marginBottom: 4, fontSize: '14px' }}>
            You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?
          </Typography>
          <Box>
            <BackHomeButton variant="contained" onClick={redirect}>No</BackHomeButton>
            <BackHomeButton variant="outlined" onClick={() => setWarning(false)} sx={{ textTransform: 'unset' }}>Yes</BackHomeButton>
          </Box>
        </NotFoundBox>
      )
      : (isExist && !warning) ? (
        <>
          <OtherProfileHeader />
          <OtherProfileMainContent username={userLoggedIn} />
        </>
      )
        : <ProfileNotFound />
  );
}

export default MainProfile;
