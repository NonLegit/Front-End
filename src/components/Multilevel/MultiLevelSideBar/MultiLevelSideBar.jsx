import { useCookies } from 'react-cookie';

// Components
import SideBar from '../../SideBar/SideBar';
import UserInfo from '../../MainProfile/Profile/MainContent/Sidebar/UserInfo/UserInfo';
import OtherProfileUserInfo from '../../MainProfile/OtherProfile/OtherProfileMainContent/OtherProfileSidebar/OtherProfileUserInfo/OtherProfileUserInfo';
import BackToTop from '../../BackToTop/BackToTop';

// Contexts
import { usePostContext } from '../../../contexts/PostContext';
import UserProvider from '../../../contexts/UserProvider';

function MultiLevelSideBar() {
  // Context
  const { post } = usePostContext();

  // cookies
  const [cookies] = useCookies(['redditUser']);

  return (
    <SideBar>
      Side Bar
      {post?.ownerType === 'Subreddit' ? <h1>Subreddit</h1>
        : (post?.ownerType === 'User'
          ? ((cookies?.redditUser?.id === post?.owner?._id)
            ? (
              <UserProvider name={post?.owner?.name}>
                <UserInfo />
              </UserProvider>
            )
            : (
              <UserProvider name={post?.owner?.name}>
                <OtherProfileUserInfo />
              </UserProvider>
            )
          ) : null)}
      <BackToTop />
    </SideBar>
  );
}

export default MultiLevelSideBar;
