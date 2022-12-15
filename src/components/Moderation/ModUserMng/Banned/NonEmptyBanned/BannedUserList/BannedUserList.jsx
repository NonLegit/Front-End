import { BannedUsers } from '../../List';
import BannedUser from '../BannedUser/BannedUser';
import calculateTime from '../../../utils/calculateTime';

function BannedUserList() {
  return (
    <>
      {
      BannedUsers.map((user) => {
        const {
          id, userName, profilePicture, banDate, baninfo,
        } = user;
        console.log(id);
        return (
          <BannedUser
            userName={userName}
            profilePicture={profilePicture}
            banDate={calculateTime(banDate)}
            punishType={baninfo.punish_type}
            note={baninfo.Note}
            punishReason={baninfo.punishReason}
            duration={baninfo.duration}
          />
        );
      })
    }
    </>
  );
}

export default BannedUserList;
