/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UserInfoContext = createContext();

function UserInfoProvider(props) {
  const { children, name } = props;
  const [info, setInfo] = useState([]);
  const client = axios.create({
    baseURL: 'https://d4c7978e-7da1-4346-bc22-092fa34e33fb.mock.pstmn.io',
  });
  useEffect(() => {
    client.get(`users/${name}/about/200`) // fetch api
      .then((actualData) => {
        setInfo(actualData.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  return (
    <UserInfoContext.Provider value={{ info }}>
      {children}
    </UserInfoContext.Provider>

  );
}

export default UserInfoProvider;
