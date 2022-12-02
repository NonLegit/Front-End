import { Box, ThemeProvider } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';
import MainContent from '../MainContent/MainContent';
import PostSubreddit from '../Post/Post';
import CreatePostInSubreddit from '../HomePage/HomePageContainer/CreatePostInHome/CreatePostInHome';
import SideBar from './SideBar/SideBar';
import {
  Com, Content, Cover, Data, Desc, IconContainer, Image, Join, Logo, Namee, PostHeader, TotalHeader, JoinCommunity,
} from './style';
// import PostsClassificationSubreddit from './PostClassificationSubreddit/PostClassification';
import PostsClassificationSubreddit from '../HomePage/HomePageContainer/PostsClassification/PostsClassification';
import theme2 from '../../styles/theme/layout';
import SubredditData from './SubrridetDataServer';
import ModeratorData from './subriddetDataModeratorServer';
import PostsData from './subredditPostsServer';
import PostJoin from './PostJoin';

import SubredditNotification from './Notifications/SubriddetNotifications';
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
  const [cookies] = useCookies(['redditUser']);
  const [username, setUserName] = useState('');
  const [members, setMembers] = useState();
  const [subredditId, setSubredditId] = useState();

  useEffect(() => { setUserName(cookies.redditUser?.userName); }, [cookies]);

  const { Name, postClass } = useParams();
  const [data, dataError] = SubredditData(Name);
  const value = useMemo(() => ({ data, dataError }), [data, dataError]);
  console.log(value);

  const [data3, dataError3] = PostsData(Name, postClass);
  console.log(dataError3);
  useEffect(() => {
    setIcon(data?.icon);
    setDisc(data?.description);
    setTopics(data?.topics);
    setPrimaryTopic(data?.primaryTopic);
    setCreatedAt(data?.createdAt);
    setModeratoesName(data?.moderators);
    setFixedName(data?.fixedName);
    setMembers(data?.members);
    setSubredditId(data?.id);
    console.log(data?.id);
    setPosts(data3);
  }, [data, postClass, data3]);

  // fetch data of communities i am a moderator of
  const [data2, dataError2] = ModeratorData();
  const value2 = useMemo(() => ({ data2, dataError2 }), [data2, dataError2]);
  console.log(value2);
  useEffect(() => {
    console.log(dataError2);

    if ((data2?.subreddits?.filter((e) => e.subredditName === Name.toString()))?.length > 0) {
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

                  <SubredditNotification />
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
              <CreatePostInSubreddit subredditId={subredditId} />
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
                subredit
              />
            ))}
          </MainContent>
          <SideBar members={members} Name={Name} username={username} topics={topics} disc={disc} primaryTopic={primaryTopic} createdAt={createdAt} moderatoesName={moderatoesName} />
        </Box>
      </TotalHeader>

    </>
  );
}
export default Header;
