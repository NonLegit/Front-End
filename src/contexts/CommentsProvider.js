/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from 'react';

export const CommentsContext = createContext();

function CommentsProvider(props) {
  const { children } = props;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments([
      {
        id: 1, body: 'welcome somaty', subReddit: 'hello_nour', publisher: 'basma', title: 'HI', time: '1 month', points: '1',
      },
      {
        id: 2, body: 'welcome soma22', subReddit: 'hello_nouraaa', publisher: 'basmahi', title: 'cool', time: '1 month', points: '1',
      },
    ]);
  }, []);

  return (
    <CommentsContext.Provider value={{ comments }}>
      {children}
    </CommentsContext.Provider>

  );
}

export default CommentsProvider;
