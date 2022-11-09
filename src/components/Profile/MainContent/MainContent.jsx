import { Box } from '@mui/material';
import { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-constructed-context-values */
import Content from './Content/Content';
import PostsFilteredTap from './PostsFilteredTap/PostsFilteredTap';
import PostsTap from './PostsTap/PostsTap';
import Sidebar from './Sidebar/Sidebar';
import { ProfilePage } from './styles';

const renderSwitch = (param) => {
  if (param === undefined || param === 'sort=new' || param === 'sort=hot' || param === 'sort=top' || param === 'sort=top&t=day') {
    return (
      <Content />
    );
  }

  if (param === 'submitted' || param === 'submitted/sort=new') {
    return (
      <PostsTap />
    );
  }
  if (param === 'upvoted' || param === 'downvoted' || param === 'saved' || param === 'hidden') {
    return (
      <PostsFilteredTap type={param} />
    );
  }
  return (
    <>no</>
  );
};

export const UserContext = createContext();
export const PostsContext = createContext();
export const CommentsContext = createContext();

function MainContent() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState();
  useEffect(() => {
    setUsername('NourZiad');
    setPosts([
      {
        id: 1, Title: 'meet', Paragraph: 'extre', subReddit: 'hello_noura', publisher: 'basma', time: '15 month', numComments: 15, expand: false, postedByOthers: true, upvoted: true, downvoted: false, saved: true, hidden: false, approved: true, removed: false, spam: false,
      },
      {
        id: 2, Title: 'new22', Paragraph: 'extre', subReddit: 'hello_nour2', publisher: 'basma', time: '1 month', numComments: 0, expand: false, postedByOthers: false, upvoted: false, downvoted: false, saved: false, hidden: false, approved: true, removed: false, spam: true,
      },
      {
        id: 3, Title: 'basma', Paragraph: 'extre', subReddit: 'hello_nour3', publisher: 'basma', time: '1 month', numComments: 0, expand: false, postedByOthers: false, upvoted: false, downvoted: true, saved: false, hidden: true, approved: false, removed: true, spam: false,
      },
      {
        id: 4, Title: 'lorem', Paragraph: 'extre', subReddit: 'hello_nour4', publisher: 'basma', time: '1 month', numComments: 0, expand: false, postedByOthers: true, upvoted: true, downvoted: false, saved: false, hidden: true, approved: false, removed: false, spam: false,
      },
    ]);
    setComments([
      {
        id: 1, body: 'welcome soma', subReddit: 'hello_nour', publisher: 'basma', title: 'HI', time: '1 month', points: '1',
      },
      {
        id: 2, body: 'welcome soma22', subReddit: 'hello_nouraaa', publisher: 'basmahi', title: 'cool', time: '1 month', points: '1',
      },
    ]);
  }, []);

  const { subTitle } = useParams();

  return (
    <Box>

      <UserContext.Provider value={{
        username,
      }}
      >
        <PostsContext.Provider value={{ posts }}>
          <CommentsContext.Provider value={{ comments }}>
            <ProfilePage>
              {renderSwitch(subTitle, username)}
              <Sidebar />
            </ProfilePage>
          </CommentsContext.Provider>
        </PostsContext.Provider>
      </UserContext.Provider>
    </Box>
  );
}

export default MainContent;
