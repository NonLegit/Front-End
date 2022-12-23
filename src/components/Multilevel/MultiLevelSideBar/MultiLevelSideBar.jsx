import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';

// Components
import SideBar from '../../SideBar/SideBar';
import SideBarSubreddit from '../../SubReddit/SideBar/SideBar';
import UserInfo from '../../MainProfile/Profile/MainContent/Sidebar/UserInfo/UserInfo';
import OtherProfileUserInfo from '../../MainProfile/OtherProfile/OtherProfileMainContent/OtherProfileSidebar/OtherProfileUserInfo/OtherProfileUserInfo';
import BackToTop from '../../BackToTop/BackToTop';

// Contexts
import { usePostContext } from '../../../contexts/PostContext';

// Server
import getSubredditAllData from '../../SubReddit/SubrridetDataServer';

/**
 * MultiLevelSideBar Side Bar @ Right of the Post with Info About Owner of the Post [User or Subreddit]
 *
 * @returns {React.Component} --MultiLevelSideBar Component
 */
function MultiLevelSideBar() {
  // Context
  const { post } = usePostContext();

  // cookies
  const [cookies] = useCookies(['redditUser']);

  // useState
  const [sunreddit, setSubreddit] = useState(null);

  // Fetch Subreddit
  // eslint-disable-next-line no-unused-vars
  const [SubredditData, dataError, statusCode] = getSubredditAllData(post?.owner?.name);

  useEffect(() => {
    setSubreddit(SubredditData);
  }, [SubredditData]);

  return (
    post && (
      post?.ownerType === 'Subreddit' ? (
        <SideBarSubreddit
          disc={sunreddit?.description}
          topics={sunreddit?.topics}
          Name={sunreddit?.name}
          primaryTopic={sunreddit?.primaryTopic}
          createdAt={sunreddit?.createdAt}
          moderatoesName={sunreddit?.moderators}
          username={cookies?.redditUser?.username}
          members={sunreddit?.membersCount}
          postCard
        />
      )
        : (
          <SideBar responsive>
            {(post?.ownerType === 'User'
              ? ((cookies?.redditUser?.id === post?.owner?._id)
                ? (
                  <UserInfo username={post?.owner?.name} />
                )
                : (
                  <OtherProfileUserInfo username={post?.owner?.name} />
                )
              ) : null)}
            <BackToTop />
          </SideBar>
        )
    ));
}

export default MultiLevelSideBar;
