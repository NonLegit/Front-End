import React from 'react';
import { useParams } from 'react-router-dom';
import { ApprovedFetch } from '../../ApprovedServer';
import ApprovedUser from '../ApprovedUser/ApprovedUser';
import calculateTime from '../../../../../../utils/calculateTime';
import SearchBar from '../../../SearchBar/SearchBar';
import SearchResultBar from '../../../SearchResultBar/SearchResultBar';
import NoResult from '../../../NoResult/NoResult';
import EmptyApproved from '../../EmptyApproved/EmptyApproved';

/**
 * approved user list
 * @component
 * @return {React.Component} - approved user list
 */

function ApprovedUserList() {
  const [data, setData] = React.useState('');
  const childToParent = (childData) => {
    setData(childData);
  };

  const { subReddit } = useParams();
  const [ApprovedUsers] = ApprovedFetch(subReddit);

  const [filteredData, setfilteredData] = React.useState([]);

  React.useEffect(() => {
    setfilteredData(ApprovedUsers.filter((user) => user.user.userName.toLowerCase().includes(data)));
  }, [data, ApprovedUsers]);

  return (
    (ApprovedUsers.length === 0) ? (<EmptyApproved />) : (
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
        filteredData.map((users, index) => {
          const {
            user, approvedDate,
          } = users;
          return (
            <ApprovedUser
              key={`${index + 0}`}
              userName={user.userName}
              profilePicture={user.profilePicture}
              joiningDate={calculateTime(approvedDate)}
            />
          );
        })
      }
      </>
    )
  );
}

export default ApprovedUserList;
