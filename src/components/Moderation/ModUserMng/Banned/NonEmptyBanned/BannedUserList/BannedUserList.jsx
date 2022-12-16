import React from 'react';
// import { BannedUsers } from '../../List';
import { useParams } from 'react-router-dom';
import { bannedFetch } from './BannedServer';
import BannedUser from '../BannedUser/BannedUser';
import calculateTime from '../../../utils/calculateTime';
import SearchBar from '../../../SearchBar/SearchBar';
import SearchResultBar from '../../../SearchResultBar/SearchResultBar';
import NoResult from '../../../NoResult/NoResult';

function BannedUserList() {
  const [data, setData] = React.useState('');
  const childToParent = (childData) => {
    setData(childData);
  };
  const { subReddit } = useParams();
  const [BannedUsers] = bannedFetch(subReddit);
  const [filteredData, setfilteredData] = React.useState([]);

  React.useEffect(() => {
    setfilteredData(BannedUsers?.filter((user) => user.userName.toLowerCase().includes(data)));
  }, [data, BannedUsers]);

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
      {
      filteredData.map((user) => {
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
