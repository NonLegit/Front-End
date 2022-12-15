import { MutedUsers } from '../../List';
import MutedUser from '../MutedUser/MutedUser';
import calculateTime from '../../../utils/calculateTime';

function MutedUserList() {
  return (
    <>
      {
        MutedUsers.map((user) => {
          const {
            id, userName, profilePicture, joiningDate, muteInfo,
          } = user;
          console.log(id);
          console.log(muteInfo);
          return (
            <MutedUser
              userName={userName}
              profilePicture={profilePicture}
              joiningDate={calculateTime(joiningDate)}
              modNote={muteInfo.muteMessage}
            />
          );
        })
}
    </>
  );
}

export default MutedUserList;
