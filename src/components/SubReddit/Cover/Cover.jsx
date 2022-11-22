import { Box, ThemeProvider } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import MainContent from '../../MainContent/MainContent';
import PostSubreddit from '../Post/Post';
import CreatePostInHome from '../../HomePage/HomePageContainer/CreatePostInHome/CreatePostInHome';
import SideBar from '../SideBar/SideBar';
import {
  Com, Content, Cover, Data, Desc, IconContainer, Image, Join, Logo, Namee, Notification, PostHeader, TotalHeader, JoinCommunity,
} from './style';
import PostsClassificationSubreddit from '../PostClassificationSubreddit/PostClassification';
import theme2 from '../../../styles/theme/layout';
import useFetch from '../../../hooks/useFetch';
import PostJoin from './PostJoin';

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
  const [fixedName, setFixedName] = useState();
  const username = 'Ahemd';

  const client = axios.create({
    baseURL: 'http://localhost:8000/',
  });

  const { Name, postClass } = useParams();
  const [data, dataError] = useFetch(`/subreddits/${Name}`);
  const value = useMemo(() => ({ data, dataError }), [data, dataError]);
  console.log(value);

  const postsUrl = `/subreddits/${Name}/${postClass || 'best'}`;
  const [data3, dataError3] = useFetch(postsUrl);
  console.log(dataError3);
  useEffect(() => {
    setIcon(data?.icon);
    setDisc(data?.description);
    setTopics(data?.topics);
    setPrimaryTopic(data?.primaryTopic);
    setCreatedAt(data?.createdAt);
    setModeratoesName(data?.moderators);
    setFixedName(data?.fixedName);

    setPosts(data3);
  }, [data, postClass, data3]);
  const [communities, setCommunities] = useState();
  // fetch data of communities i am a moderator of
  const [data2, dataError2] = useFetch('/subreddit/mine/moderator');
  const value2 = useMemo(() => ({ data2, dataError2 }), [data2, dataError2]);
  console.log(value2);
  useEffect(() => {
    setCommunities(data2?.subreddits?.filter((e) => e.subredditName === Name.toString()));
    console.log(dataError2);
    if (communities?.length > 0) {
      setJoin(true);
    } else {
      setJoin(false);
    }
  }, [data2, username]);
  // subscribr or unsubscribe
  const sendData = (b) => {
    PostJoin(`/subreddits/${Name}/subscribe`, b);
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
                  {fixedName}
                </Com>
              </Desc>
              <Box sx={{ display: 'flex' }}>
                {!join
                && <JoinCommunity onClick={() => { setJoin(true); sendData(true); }}>Join</JoinCommunity>}
                {join
                && (
                <>
                  <Join onClick={() => { setJoin(false); sendData(false); }} onMouseEnter={(e) => { e.target.innerHTML = 'Leave'; }} onMouseLeave={(e) => { e.target.innerHTML = 'Joined'; }}>Joined</Join>
                  <Notification sx={{
                    '@media screen and (max-width: 435px)': {
                      display: 'none',
                    },
                  }}
                  >
                    <NotificationsIcon
                      color="primary"
                      sx={{
                        lineHeight: 0,
                        cursor: 'pointer',

                      }}
                    />
                  </Notification>
                </>
                )}
              </Box>
            </Content>
          </Data>
          <PostHeader>Posts</PostHeader>
        </IconContainer>
      </Logo>
      <TotalHeader>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          margin: '0 auto',
          '@media screen and (max-width: 435px)': {
            width: '100%',
          },
        }}
        >
          <MainContent width={640}>
            <ThemeProvider theme={theme2}>
              <CreatePostInHome />
            </ThemeProvider>
            <PostsClassificationSubreddit subredditName={Name} />
            { posts?.map((posts) => (
              <PostSubreddit
                createdAt={createdAt}
                title={posts.title}
                image={posts.image}
                owner={Name}
                author={posts.author}
                flairText={posts.flairText}
                flairBackgroundColor={posts.flairBackgroundColor}
                popularity={posts.popularity}
                flairColor={posts.flairColor}
                url={posts.url}
                kind={posts.kind}
                votes={posts.votes}
                commentCount={posts.commentCount}
                text={posts.text}
                key={posts.id}
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
