/* eslint-disable import/no-named-default */

import { useCookies } from 'react-cookie';
import { default as OtherProfileHeader } from '../components/OtherProfile/OtherHeader/OtherProfileHeader';
import { default as OtherProfileContent } from '../components/OtherProfile/OtherProfileMainContent/OtherProfileMainContent';
import { default as MyProfileHeader } from '../components/Profile/Header/ProfileHeader';
import { default as MyProfileContent } from '../components/Profile/MainContent/ProfileMainContent';

function Profile() {
  const [cookies] = useCookies(['redditUser']);
  const isLoggedIn = true;
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

export default Profile;
