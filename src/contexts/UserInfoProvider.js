/* eslint-disable react/jsx-no-constructed-context-values */
import {
  useMemo, createContext,
} from 'react';
import useFetch from '../hooks/useFetch';

export const UserInfoContext = createContext();

/**
 * all information about currently logged in user
 *
 * @returns {React.Context} provider of user information
 */
function UserInfoProvider(props) {
  const { children } = props;

  const [data, dataError] = useFetch('users/me');
  const value = useMemo(() => ({ info: data?.user, infoError: dataError }), [data, dataError]);

  return (
    <UserInfoContext.Provider value={value}>
      {children}
    </UserInfoContext.Provider>

  );
}

export default UserInfoProvider;
