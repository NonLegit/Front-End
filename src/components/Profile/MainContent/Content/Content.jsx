import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import { useContext, useEffect, useState } from 'react';
import EmptyContent from '../EmptyContent/EmptyContent';
import Filter from '../Filter/Filter';
/* eslint-disable import/no-cycle */
import { CommentsContext, PostsContext, UserContext } from '../MainContent';
import { NEW, NewBox } from '../styles';
import Comments from './Comments/Comments';
import Posts from './Posts/Posts';
import ContentBox from './styles';

function Content() {
  const [isContent, setIsContent] = useState(false);
  const { posts } = useContext(PostsContext);
  const { username } = useContext(UserContext);
  const { comments } = useContext(CommentsContext);

  useEffect(() => {
    console.log(posts.length);
    console.log(username);
    if (posts.length > 0) { setIsContent(true); }
  }, [username]);

  const emptyContent = `hmm... u/${username}
          hasn't posted recently`;

  return (
    <ContentBox>
      <Filter subTitle2="" />
      {!isContent && <EmptyContent emptyContent={emptyContent} />}
      {isContent
          && (
          <>
            <NEW>
              <NewBox>
                NEW! Now you can get data and insights on your posts
                <SignalCellularAltOutlinedIcon sx={{ color: '#b279ff' }} />
              </NewBox>
            </NEW>
            <Posts post={posts[0]} />
            <Comments
              comment={comments[0]}
            />
            <Posts post={posts[1]} />
            <Comments
              comment={comments[1]}
            />
          </>
          )}
    </ContentBox>
  );
}

export default Content;
