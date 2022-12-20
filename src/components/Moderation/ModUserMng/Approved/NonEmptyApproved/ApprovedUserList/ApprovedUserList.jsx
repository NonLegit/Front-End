import React from 'react';
import { useParams } from 'react-router-dom';
import { ApprovedFetch } from './ApprovedServer';
import ApprovedUser from '../ApprovedUser/ApprovedUser';
import calculateTime from '../../../../../../utils/calculateTime';
import SearchBar from '../../../SearchBar/SearchBar';
import SearchResultBar from '../../../SearchResultBar/SearchResultBar';
import NoResult from '../../../NoResult/NoResult';

function ApprovedUserList() {
  const [data, setData] = React.useState('');
  const childToParent = (childData) => {
    setData(childData);
  };

  const { subReddit } = useParams();
  const [ApprovedUsers] = ApprovedFetch(subReddit);

  const [filteredData, setfilteredData] = React.useState([]);

  React.useEffect(() => {
    setfilteredData(ApprovedUsers.filter((user) => user.userName.toLowerCase().includes(data)));
    return () => {

    };
  }, [data, ApprovedUsers]);

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
            id, userName, profilePicture, joiningDate,
          } = user;
          console.log(id);
          return (
            <ApprovedUser
              userName={userName}
              profilePicture={profilePicture}
              joiningDate={calculateTime(joiningDate)}
            />
          );
        })
      }
    </>
  );
}

export default ApprovedUserList;
