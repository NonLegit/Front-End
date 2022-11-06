import { useMediaQuery, useTheme } from '@mui/material';
import MainContent from '../../MainContent/MainContent';
import { MainContainer, OuterContainer } from './styles';
import SideBar from '../../SideBar/SideBar';
import Communities from '../Communities/Communities';
import RedditPremium from '../RedditPremium/RedditPremium';
import PersonalReddit from '../PersonalReddit/PersonalReddit';
import HomePageFooter from '../HomePageFooter/HomePageFooter';
import PostsClassification from '../PostsClassification/PostsClassification';
import CreatePostInHome from '../CreatePostInHome/CreatePostInHome';
import BackToTop from '../../BackToTop/BackToTop';
import useFetch from '../../../hooks/useFetch';
import PostList from '../PostList/PostList';

function HomePageContainer() {
  const theme = useTheme();

  const match = useMediaQuery(theme.breakpoints.up('md'));

  const url = 'https://9370b8a3-3862-45f6-b3f0-060ec85cbc3f.mock.pstmn.io/communities';
  const postsUrl = 'https://9370b8a3-3862-45f6-b3f0-060ec85cbc3f.mock.pstmn.io/users/best';
  const [posts, postsError] = useFetch(postsUrl);
  const [communities, communitiesError] = useFetch(url);
  // console.log(error);
  // console.log(data);
  console.log(posts);
  return (
    <OuterContainer>
      <MainContainer>
        <MainContent width={640}>
          <CreatePostInHome />
          <PostsClassification />
          {!postsError ? (posts && <PostList posts={posts} />) : 'error in fetching posts'}
        </MainContent>
        {match
        && (
        <SideBar>
          {!communitiesError ? (communities && <Communities communities={communities} />) : 'error in fetching communities'}
          <RedditPremium />
          <PersonalReddit />
          <HomePageFooter />
          <BackToTop />
        </SideBar>
        )}
      </MainContainer>
    </OuterContainer>
  );
}

export default HomePageContainer;
