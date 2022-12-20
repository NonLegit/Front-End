import React from 'react';
import { MutedUsers } from '../../List';
import MutedUser from '../MutedUser/MutedUser';
import calculateTime from '../../../utils/calculateTime';
import SearchBar from '../../../SearchBar/SearchBar';
import SearchResultBar from '../../../SearchResultBar/SearchResultBar';
import NoResult from '../../../NoResult/NoResult';

function MutedUserList() {
  const [data, setData] = React.useState('');
  const childToParent = (childData) => {
    setData(childData);
  };

  const [filteredData, setfilteredData] = React.useState([]);

  React.useEffect(() => {
    setfilteredData(MutedUsers.filter((user) => user.userName.toLowerCase().includes(data)));
  }, [data]);

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
