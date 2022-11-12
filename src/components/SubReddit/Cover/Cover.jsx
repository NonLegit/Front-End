import { Box } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MainContent from '../../MainContent/MainContent';
import Post from '../../Post/Post';
import CreatePostInHome from '../../HomePage/HomePageContainer/CreatePostInHome/CreatePostInHome';
import SideBar from '../SideBar/SideBar';
import {
  Com, Content, Cover, Data, Desc, IconContainer, Image, Join, Logo, Namee, Notification, PostHeader, TotalHeader, JoinCommunity,
} from './style';
import PostsClassification from '../PostClassificationSubreddit/PostClassification';

/**
 * Subreddit page
 * @component
 * @return {React.Component} - Subreddit page
 */

function Header() {
  const [posts, setPosts] = useState([]);
  const [icon, setIcon] = useState();
  const [join, setJoin] = useState('');
  const [disc, setDisc] = useState();
  const [createdAt, setCreatedAt] = useState();
  const [primaryTopic, setPrimaryTopic] = useState();
  const [topics, setTopics] = useState([]);
  const [moderatoesName, setModeratoesName] = useState([]);
  const client = axios.create({
    baseURL: 'https://d4c7978e-7da1-4346-bc22-092fa34e33fb.mock.pstmn.io',
  });

  const client2 = axios.create({
    baseURL: 'https://0902e8c4-d1ea-4cb3-9e44-bfbc7241fa61.mock.pstmn.io',
  });
  const { Name, postClass } = useParams();
  useEffect(() => {
    client.get(`/subreddits/${Name}/200/`) // fetch api
      .then((actualData) => {
        console.log(actualData.data);
        setIcon(actualData.data.icon);
        setDisc(actualData.data.description);
        // console.log(actualData.data.description);
        setTopics(actualData.data.topics);
        setPrimaryTopic(actualData.data.primaryTopic);
        setCreatedAt(actualData.data.createdAt);
        setModeratoesName(actualData.data.moderatoesName);
      })
      .catch((error) => {
        console.log(error);
      });

    //  const postsUrl = `/subreddits/${Name}/${postClass || 'best'}`;
    const postsUrl = `/users/${postClass || 'best'}`;
    client2.get(postsUrl) // fetch api
      .then((actualData) => {
        setPosts(actualData.data);
        console.log('---------------------------');
        console.log(actualData.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [postClass]);

  const [communities, setCommunities] = useState();
  // const {
  //   username,
  // } = useContext(UserContext);
  const username = 'Ahemd';
  // ///////////////////////////////////////////////////////////////////////////////////////

  // fetch data of communities i am a moderator of
  useEffect(() => {
    client.get(`subreddit/mine/${username}/200`) // fetch api
      .then((actualData) => {
        setCommunities(actualData.data.subreddits?.filter((e) => e.subredditName === Name.toString()));
        if (communities?.length > 0) {
          setJoin(true);
        } else {
          setJoin(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [username]);
  // subscribr or unsubscribe
  const sendData = (b) => {
    client.patch(`subreddits/${Name}`, { sub: b }); // fetch api
  };
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
                {!join
                && <JoinCommunity onClick={() => { setJoin(true); sendData(true); }}>Join</JoinCommunity>}
                {join
                && (
                <>
                  <Join onClick={() => { setJoin(false); sendData(false); }} onMouseEnter={(e) => { e.target.innerHTML = 'Leave'; }} onMouseLeave={(e) => { e.target.innerHTML = 'Joined'; }}>Joined</Join>
                  <Notification><NotificationsIcon color="primary" sx={{ lineHeight: 0, cursor: 'pointer' }} /></Notification>
                </>
                )}
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
            { posts?.map((posts, index) => (
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
          <SideBar Name={Name} client={client} topics={topics} disc={disc} primaryTopic={primaryTopic} createdAt={createdAt} moderatoesName={moderatoesName} />
        </Box>
      </TotalHeader>

    </>
  );
}
export default Header;
