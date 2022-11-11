/* eslint-disable import/no-named-default */

import { default as OtherProfileHeader } from '../components/OtherProfile/Header/ProfileHeader';
import { default as OtherProfileContent } from '../components/OtherProfile/MainContent/ProfileMainContent';
import { default as MyProfileHeader } from '../components/Profile/Header/ProfileHeader';
import { default as MyProfileContent } from '../components/Profile/MainContent/ProfileMainContent';

function Profile() {
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
