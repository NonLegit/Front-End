import { Box } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MainContent from '../../MainContent/MainContent';
// import PostsClassification from '../../HomePage/HomePageContainer/PostsClassification/PostsClassification';
import Post from '../../Post/Post';
import CreatePostInHome from '../../HomePage/HomePageContainer/CreatePostInHome/CreatePostInHome';
import SideBar from '../SideBar/SideBar';
import {
  Com,
  Content,
  Cover, Data, Desc, IconContainer, Image, Join,
  Logo, Namee, Notification, PostHeader, TotalHeader,
} from './style';
import PostsClassification from '../PostClassificationSubreddit/PostClassification';

/**
 * Subreddit page
 * @return {React.Component} - Subreddit page
 */

function Header() {
  const [posts, setPosts] = useState([]);
  const [icon, setIcon] = useState();
  const [disc, setDisc] = useState();
  const [topics, setTopics] = useState([]);
  const client = axios.create({
    baseURL: 'https://60d14a9b-9245-421f-9841-d211208805b8.mock.pstmn.io',
  });

  const { Name, postClass } = useParams();

  useEffect(() => {
    client.get(`subreddits/${Name}/200`) // fetch api
      .then((actualData) => {
        console.log(actualData.data);
        setIcon(actualData.data.icon);
        setDisc(actualData.data.description);
        console.log(actualData.data.description);
        setTopics(actualData.data.topics);
        // setPosts(actualData.data);
      })
      .catch((error) => {
        console.log(error);
      });
    const postsUrl = `/users/${postClass || 'best'}`;
    client.get(postsUrl) // fetch api
      .then((actualData) => {
        setPosts(actualData.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [posts]);

  return (
    <>
      <Cover />
      <Logo>
        <IconContainer>
          <Data>
            <Image src={icon} />
            <Content>
              <Desc>
                <Namee>
                  r/
                  { Name }
                </Namee>
                <Com>
                  r/
                  {Name}
                </Com>
              </Desc>
              <Box sx={{ display: 'flex' }}>
                <Join onMouseEnter={(e) => { e.target.innerHTML = 'Leave'; }} onMouseLeave={(e) => { e.target.innerHTML = 'Joined'; }}>Joined</Join>
                <Notification><NotificationsIcon color="primary" sx={{ lineHeight: 0 }} /></Notification>
              </Box>
            </Content>
          </Data>
          <PostHeader>Posts</PostHeader>
        </IconContainer>
      </Logo>
      <TotalHeader>
        <Box sx={{ display: 'flex', flexDirection: 'row', margin: '0 auto' }}>
          <MainContent width={640}>
            <CreatePostInHome />
            <PostsClassification subredditName={Name} />
            title, image, owner, creator, flairText, flairBackgroundColor, popularity, flairColor, url, kind, votes, commentCount, text,
            { posts.map((posts, index) => (
              <Post
                key={`${index + 0}`}
                title={posts.title}
                image={posts.image}
                owner={posts.owner}
                creator={posts.creator}
                flairText={posts.flairText}
                flairBackgroundColor={posts.flairBackgroundColor}
                popularity={posts.popularity}
                flairColor={posts.flairColor}
                url={posts.url}
                kind={posts.kind}
                votes={posts.votes}
                commentCount={posts.commentCount}
                text={posts.text}
              />
            ))}
          </MainContent>
          <SideBar Name={Name} client={client} topics={topics} disc={disc} />
        </Box>
      </TotalHeader>

    </>
  );
}
// 3amjokes
// r/3amjokes
export default Header;
