import { useMediaQuery, useTheme } from '@mui/material';
import { useParams } from 'react-router-dom';
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
/**
 * This component works as a container for all home page components
 * and a repository the data fetched in
 *
 * @component HomePageContainer
 * @returns {React.Component} Container represents the home page
 */

function HomePageContainer() {
  const { postClass } = useParams();
  // variables
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('md'));
  const communitiesUrl = 'subreddits/mine/subscriber';
  console.log(postClass);
  const postsUrl = `/users/${postClass || 'best'}`;
  // console.log(postsUrl);

  // states
  const [posts, postsError] = useFetch(postsUrl);
  const [communities, communitiesError] = useFetch(communitiesUrl);

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
