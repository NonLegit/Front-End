/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

function UserProvider(props) {
  const { children, name } = props;
  const [username, setUsername] = useState();
  useEffect(() => {
    setUsername(name);
  }, [name]);

  return (
    <UserContext.Provider value={{ username }}>
      {children}
    </UserContext.Provider>

  );
}

export default UserProvider;
