import { Box } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

import {
  Com,
  Content,
  Cover, Data, Desc, IconContainer, Image, Join,
  Logo, Name, Notification, PostContainer, PostHeader, PostsContainer, TotalHeader,
} from './style';
import SideBar from '../SideBar/SideBar';

// adham imports
// import MainContent from '../../removed after integration/MainContent/MainContent';

// import CreatePostInHome from '../../removed after
// integration/HomePage/CreatePostInHome/CreatePostInHome';

// import Post from '../../removed after integration/Post/Post';

// import PostsClassification from
// '../../removed after integration/HomePage/PostsClassification/PostsClassification';

/**
 * Subreddit page
 * @return {React.Component} - Subreddit page
 */
function Header() {
  return (
    <>
      <Cover />
      <Logo>
        <IconContainer>
          <Data>
            <Image src="https://styles.redditmedia.com/t5_2vc9u/styles/communityIcon_3uguuy39jlf51.png?width=256&s=a4fd9b0f4dc41c878f7b5968edc7e74badd4fd58" />
            <Content>
              <Desc>
                <Name>3amjokes</Name>
                <Com>r/3amjokes</Com>
              </Desc>
              <Box sx={{ display: 'flex' }}>
                <Join>Joined</Join>
                <Notification><NotificationsIcon color="primary" sx={{ lineHeight: 0 }} /></Notification>
              </Box>
            </Content>
          </Data>
          <PostHeader>Posts</PostHeader>
        </IconContainer>
      </Logo>
      <TotalHeader>
        <Box sx={{ display: 'flex', flexDirection: 'row', margin: '0 auto' }}>
          <PostsContainer theme>
            <PostContainer>
              <Box my={2} sx={{ '&:hover': { border: 1 }, width: '100%' }} />
            </PostContainer>
          </PostsContainer>
          {/* <Post />
          <Post />
          <Post />
         */}

          {/* <CreatePostInHome />
          <PostsClassification />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post /> */}
          <SideBar />

        </Box>
      </TotalHeader>

    </>
  );
}
// 3amjokes
// r/3amjokes
export default Header;
