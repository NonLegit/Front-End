import CreatePostInSubredditContextProvider from '../contexts/CreatePostInSubredditContext';
import Subreddit from '../components/SubReddit/Cover';

function SubReddit() {
  return (
    <CreatePostInSubredditContextProvider>
      <Subreddit />
    </CreatePostInSubredditContextProvider>
  );
}

export default SubReddit;
