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

  const url = 'http://localhost:7000/data';
  const [data, error] = useFetch(url);
  console.log(error);
  console.log(data);
  const { communities, posts } = data ?? {};
  console.log(posts);
  return (
    <OuterContainer>
      {data
      && (
      <MainContainer>
        <MainContent width={640}>
          <CreatePostInHome />
          <PostsClassification />
          <PostList posts={posts} />
        </MainContent>
        {match
        && (
        <SideBar>
          <Communities communitiesData={communities} />
          <RedditPremium />
          <PersonalReddit />
          <HomePageFooter />
          <BackToTop />
        </SideBar>
        )}
      </MainContainer>
      )}
    </OuterContainer>
  );
}

export default HomePageContainer;
