// import { Moderators } from '../../List';
import { useParams } from 'react-router-dom';
import { moderatorsFetch } from './moderatorsServer';
import NonEmptyModerator from '../NonEmptyModerator';
import calculateTime from '../../../../../../utils/calculateTime';

function ModeratorsList() {
  const { subReddit } = useParams();
  const [moderators] = moderatorsFetch(subReddit);
  return (
    <>
      {
      moderators.map((user) => {
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
            type="0"
          />
        );
      })
    }
      {
      moderators.map((user) => {
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
            type="1"
          />
        );
      })
    }
      {
      moderators.map((user) => {
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
            type="2"
          />
        );
      })
    }
    </>
  );
}

export default ModeratorsList;
