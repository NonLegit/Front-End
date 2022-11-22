import { generateUsername } from 'unique-username-generator';
import { useEffect, useState } from 'react';
import axios from '../services/instance';
import replaceDashWithUnderScore from './replaceDashWithUnderScore';

const generateRandomUsernamesServer = (numberOfGeneratedUsernames, deps) => {
  const [generatedUsernames, setGeneratedUsernames] = useState(null);
  useEffect(() => {
    (async () => {
      let counter = 0;
      const temp = [];
      do {
        let error = '';
        const username = replaceDashWithUnderScore(generateUsername());
        const response = await axios.get('/users/username_available', {
          params: {
            userName: username,
          },
        }).catch((e) => {
          error = e;
        });
        const { data, status: statusCode } = response;
        if (error) {
          setGeneratedUsernames(['something went wrong']);
          return;
        }

        if (statusCode === 400) {
          const { message } = data;
          setGeneratedUsernames([message]);
          return;
        }

        counter += 1;
        temp.push(username);
      } while (counter < numberOfGeneratedUsernames);
      // console.log(temp);
      setGeneratedUsernames(temp);
    })();
  }, [deps]);
  return generatedUsernames;
};

export default generateRandomUsernamesServer;
