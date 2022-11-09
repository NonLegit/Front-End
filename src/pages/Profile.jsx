/* eslint-disable import/no-named-default */
import { default as MyProfileHeader } from '../components/Profile/Header/Header';
import { default as MyProfileContent } from '../components/Profile/MainContent/MainContent';
// import { default as OtherProfileHeader } from '../components/OthersProfile/Header/Header';
// import { default as OtherProfileContent }
// from '../components/OthersProfile/MainContent/MainContent';

function Profile() {
  const loggedin = true;
  return (
    <>
      {loggedin
        && (
          <>
            <MyProfileHeader />
            <MyProfileContent />
          </>
        )}
      {/* {!loggedin
        && (
          <>
            <OtherProfileHeader />
            <OtherProfileContent />
          </>
        )} */}
    </>
  );
}

export default Profile;
