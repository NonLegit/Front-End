/* eslint-disable import/no-named-default */
import { default as MyProfileHeader } from '../components/Profile/Header/Header';
import { default as MyProfileContent } from '../components/Profile/MainContent/MainContent';

function Profile() {
  return (
    <>
      <MyProfileHeader />
      <MyProfileContent />
    </>
  );
}

export default Profile;
