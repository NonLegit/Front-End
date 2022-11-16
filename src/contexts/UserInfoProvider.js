/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UserInfoContext = createContext();

function UserInfoProvider(props) {
  const { children, name } = props;
  const [info, setInfo] = useState([]);
  const client = axios.create({
    baseURL: 'https://93a83f85-dafb-4dad-8743-4cffb7fd7b80.mock.pstmn.io/',
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
