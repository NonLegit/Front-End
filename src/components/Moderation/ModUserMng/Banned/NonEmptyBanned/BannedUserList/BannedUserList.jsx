import React from 'react';
import { useParams } from 'react-router-dom';
import { bannedFetch } from './BannedServer';
import BannedUser from '../BannedUser/BannedUser';
import calculateTime from '../../../../../../utils/calculateTime';
import SearchBar from '../../../SearchBar/SearchBar';
import SearchResultBar from '../../../SearchResultBar/SearchResultBar';
import NoResult from '../../../NoResult/NoResult';
import EmptyBanned from '../../EmptyBanned/EmptyBanned';

function BannedUserList() {
  const [data, setData] = React.useState('');
  const childToParent = (childData) => {
    setData(childData);
  };

  const { subReddit } = useParams();
  const [BannedUsers] = bannedFetch(subReddit);
  const [filteredData, setfilteredData] = React.useState([]);

  React.useEffect(() => {
    setfilteredData(BannedUsers?.filter((users) => users.user.userName.toLowerCase().includes(data)));
  }, [data, BannedUsers]);

  return (
    (BannedUsers.length === 0) ? (<EmptyBanned />) : (
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
        {
      filteredData.map((users) => {
        const {
          user, banInfo,
        } = users;
        return (
          <BannedUser
            userName={user.userName}
            profilePicture={user.profilePicture}
            banDate={calculateTime(banInfo.banDate)}
            punishType={banInfo.punish_type}
            note={banInfo.Note}
            punishReason={banInfo.punishReason}
            duration={banInfo.duration}
          />
        );
      })
    }
      </>
    )
  );
}

export default BannedUserList;
