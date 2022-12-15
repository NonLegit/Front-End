import { Moderators } from '../../List';
import NonEmptyModerator from '../NonEmptyModerator';
import calculateTime from '../../../utils/calculateTime';

function ModeratorsList() {
  return (
    <>
      {
      Moderators.map((user) => {
        const {
          id, userName, joiningDate, profilePicture, moderatorPermissions,
        } = user;
        console.log(id);
        return (
          <NonEmptyModerator
            userName={userName}
            profilePicture={profilePicture}
            modDate={calculateTime(joiningDate)}
            all={moderatorPermissions.all}
            access={moderatorPermissions.access}
            config={moderatorPermissions.config}
            flair={moderatorPermissions.falir}
            posts={moderatorPermissions.posts}
            type={0}
          />
        );
      })
    }
    </>
  );
}

export default ModeratorsList;
