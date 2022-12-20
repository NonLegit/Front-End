import { useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';
import { redirectLogin } from '../../../utils/Redirect';
/**
 * - Messages Fetch
 */
export const messageSentFetch = () => {
  const api = '/messages/sent';
  const [data, statusCode, message] = useFetch(api);
  useEffect(() => {
    if (statusCode === 401) {
      redirectLogin();
    }
  }, [data, message]);
  return [data];
};
