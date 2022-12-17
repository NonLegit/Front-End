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
import allPageServer from './allPageServer';

/**
 * This component works as a container for all popular page components
 * and a repository the data fetched in
 *
 * @component PopularContainer
 * @returns {React.Component} Container represents the popular page
 */
function AllContainer() {
  const { postClass } = useParams();
  // variables
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('md'));

  // states
  const [posts, postsError] = allPageServer(postClass);
  return (
    <OuterContainer>
      <MainContainer>
        <MainContent width={640}>
          <PostsClassification allOrPopular="r/all/" />
          {!postsError ? (posts && <PostList posts={posts} />) : 'error in fetching posts'}
        </MainContent>
        {match
        && (
        <SideBar>
          <RedditPremium />
          <PersonalReddit
            title="r/all"
            paragraph="The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation."
            image="https://www.redditstatic.com/desktop2x/img/id-cards/banner@2x.png"
          />
          <HomePageFooter />
          <BackToTop />
        </SideBar>
        )}
      </MainContainer>
    </OuterContainer>
  );
}

export default AllContainer;
