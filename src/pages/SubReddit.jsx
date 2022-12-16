import { Outlet } from 'react-router-dom';
import CreatePostInSubredditContextProvider from '../contexts/CreatePostInSubredditContext';
// import Subreddit from '../components/SubReddit/Cover';

function SubReddit() {
  return (
    <CreatePostInSubredditContextProvider>
      <Outlet />
    </CreatePostInSubredditContextProvider>
  );
}

export default SubReddit;
