import { useEffect } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { redditCookie } from '../../Authentication/authenticationServer';
import MainContent from '../../MainContent/MainContent';
import { MainContainer, OuterContainer } from './styles';
import SideBar from '../../SideBar/SideBar';
import Communities from './Communities/Communities';
import RedditPremium from './RedditPremium/RedditPremium';
import PersonalReddit from './PersonalReddit/PersonalReddit';
import HomePageFooter from './HomePageFooter/HomePageFooter';
import PostsClassification from './PostsClassification/PostsClassification';
import CreatePostInHome from './CreatePostInHome/CreatePostInHome';
import BackToTop from '../../BackToTop/BackToTop';
import PostList from './PostList/PostList';
import communities from './CommunitiesStaticData';
import homePageServer from './homePageServer';

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

  // states
  const [posts, postsError] = homePageServer(postClass);

  // // Cookies
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies(['redditUser']);

  useEffect(() => {
    redditCookie(setCookies);
  }, []);

  return (
    <OuterContainer>
      <MainContainer>
        <MainContent width={640}>
          {cookies.redditUser ? <CreatePostInHome /> : null}
          <PostsClassification />
          {!postsError ? (posts && <PostList posts={posts} />) : 'error in fetching posts'}
        </MainContent>
        {match
        && (
        <SideBar>
          <Communities communities={communities} />
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
