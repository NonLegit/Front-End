import { useMediaQuery, useTheme } from '@mui/material';
import MainContent from '../../MainContent/MainContent';
import { MainContainer, OuterContainer } from './styles';
import SideBar from '../../SideBar/SideBar';
import Post from '../../Post/Post';
import Communities from '../Communities/Communities';
import RedditPremium from '../RedditPremium/RedditPremium';
import PersonalReddit from '../PersonalReddit/PersonalReddit';
import HomePageFooter from '../HomePageFooter/HomePageFooter';
import PostsClassification from '../PostsClassification/PostsClassification';
import CreatePostInHome from '../CreatePostInHome/CreatePostInHome';

function HomePageContainer() {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <OuterContainer>
      <MainContainer>
        <MainContent>
          <CreatePostInHome />
          <PostsClassification />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </MainContent>
        {match
        && (
        <SideBar>
          <Communities />
          <RedditPremium />
          <PersonalReddit />
          <HomePageFooter />
        </SideBar>
        )}
      </MainContainer>
    </OuterContainer>
  );
}

export default HomePageContainer;
