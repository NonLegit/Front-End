// import { Moderators } from '../../List';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import * as React from 'react';
import NoResult from '../../../NoResult/NoResult';
import SearchResultBar from '../../../SearchResultBar/SearchResultBar';
import SearchBar from '../../../SearchBar/SearchBar';
import { moderatorsFetch, invitedmoderatorsFetch } from './moderatorsServer';
import NonEmptyModerator from '../NonEmptyModerator';
import { ModeratorsTypeContainer } from '../../../styles';
import calculateTime from '../../../../../../utils/calculateTime';

function ModeratorsList() {
  const { subReddit } = useParams();
  const [data, setData] = React.useState('');
  const childToParent = (childData) => {
    setData(childData);
  };
  const [moderators] = moderatorsFetch(subReddit);
  const [invitedModerators] = invitedmoderatorsFetch(subReddit);
  const [filteredData, setfilteredData] = React.useState([]);

  React.useEffect(() => {
    setfilteredData(moderators?.filter((users) => users.user.userName.toLowerCase().includes(data)));
  }, [data, moderators]);

  return (
    <>
      <SearchBar childToParent={childToParent} />
      {
        (filteredData.length !== 0 && data !== '') && (
        <SearchResultBar
          resultNumber={filteredData.length}
          filteredData={filteredData}
          childToParent={childToParent}
        />
        )
      }
      {
        (filteredData.length === 0 && data !== '') && <NoResult query={data} childToParent={childToParent} />
      }
      <ModeratorsTypeContainer>
        {
      filteredData.map((users) => {
        const {
          user, moderatorPermissions,
        } = users;
        console.log(user);
        return (
          <NonEmptyModerator
            userName={user.userName}
            profilePicture={user.profilePicture}
            modDate={calculateTime(user.joinDate)}
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
      </ModeratorsTypeContainer>
      {(invitedModerators.length !== 0 && filteredData.length === moderators.length) && (
        <ModeratorsTypeContainer>
          <Typography
            fontSize="15px"
            color="#1C1C1C"
            fontWeight={600}
            margin="0px 0px 8px 24px"
          >
            Invited moderators
          </Typography>
          {
      invitedModerators.map((users) => {
        const {
          user, moderatorPermissions,
        } = users;
        return (
          <NonEmptyModerator
            userName={user.userName}
            profilePicture={user.profilePicture}
            modDate={calculateTime(user.joinDate)}
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
        </ModeratorsTypeContainer>
      )}
    </>
  );
}

export default ModeratorsList;