import { useMediaQuery, useTheme } from '@mui/material';
import { useParams } from 'react-router-dom';
import MainContent from '../../MainContent/MainContent';
import { MainContainer, OuterContainer } from '../../HomePage/HomePageContainer/styles';
import SideBar from '../../SideBar/SideBar';
import RedditPremium from '../../HomePage/HomePageContainer/RedditPremium/RedditPremium';
import PersonalReddit from '../../HomePage/HomePageContainer/PersonalReddit/PersonalReddit';
import HomePageFooter from '../../HomePage/HomePageContainer/HomePageFooter/HomePageFooter';
import PostsClassification from '../../HomePage/HomePageContainer/PostsClassification/PostsClassification';
import BackToTop from '../../BackToTop/BackToTop';
import PostList from '../../HomePage/HomePageContainer/PostList/PostList';
import popularPageServer from './popularPageServer';
import { PopularPosts } from './styles';

/**
 * This component works as a container for all popular page components
 * and a repository the data fetched in
 *
 * @component PopularContainer
 * @returns {React.Component} Container represents the popular page
 */
function PopularContainer() {
  const { postClass } = useParams();
  // variables
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('md'));

  // states
  const [posts, postsError] = popularPageServer(postClass);
  return (
    <OuterContainer>
      <MainContainer>
        <MainContent width={640}>
          <PopularPosts>
            Popular posts
          </PopularPosts>
          <PostsClassification allOrPopular="r/popular/" />
          {!postsError ? (posts && <PostList posts={posts} />) : 'error in fetching posts'}
        </MainContent>
        {match
        && (
        <SideBar>
          <RedditPremium />
          <PersonalReddit
            title="r/popular"
            paragraph="The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet."
          />
          <HomePageFooter />
          <BackToTop />
        </SideBar>
        )}
      </MainContainer>
    </OuterContainer>
  );
}

export default PopularContainer;
