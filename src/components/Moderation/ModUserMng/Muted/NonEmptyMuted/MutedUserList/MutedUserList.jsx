import React from 'react';
import { useParams } from 'react-router-dom';
import { mutedFetch } from './MutedServer';
import MutedUser from '../MutedUser/MutedUser';
import SearchBar from '../../../SearchBar/SearchBar';
import SearchResultBar from '../../../SearchResultBar/SearchResultBar';
import NoResult from '../../../NoResult/NoResult';

function MutedUserList() {
  const [data, setData] = React.useState('');
  const childToParent = (childData) => {
    setData(childData);
  };
  const { subReddit } = useParams();
  const [MutedUsers] = mutedFetch(subReddit);
  const [filteredData, setfilteredData] = React.useState([]);
  React.useEffect(() => {
    setfilteredData(MutedUsers?.filter((user) => user.userName.toLowerCase().includes(data)));
  }, [data, MutedUsers]);

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
        filteredData?.map((user) => (
          <MutedUser
            user={user}
          />
        ))
      }
    </>
  );
}

export default MutedUserList;
