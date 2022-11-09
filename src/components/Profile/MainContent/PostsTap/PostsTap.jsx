import { useParams } from 'react-router-dom';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import { useContext, useEffect, useState } from 'react';
import Filter from '../Filter/Filter';
import { NEW, NewBox, WideBox } from '../styles';
import EmptyContent from '../EmptyContent/EmptyContent';
import Posts from '../Posts/Posts';
/* eslint-disable import/no-cycle */
import { PostsContext, UserContext } from '../MainContent';

function PostsTap() {
  const { subTitle } = useParams();
  const { username } = useContext(UserContext);
  const { posts } = useContext(PostsContext);
  const [isContent, setIsContent] = useState(false);
  useEffect(() => {
    console.log(posts.length);
    console.log(username);
    if (posts.length > 0) { setIsContent(true); }
  }, [username]);

  const emptyContent = `hmm... u/${username}
          hasn't posted recently`;
  return (
    <WideBox>
      <Filter subTitle2={`${subTitle}/`} />
      {!isContent && <EmptyContent emptyContent={emptyContent} />}
      {isContent
          && (
          <>
            <NEW sx={{ margin: 0 }}>
              <NewBox>
                NEW! Now you can get data and insights on your posts
                <SignalCellularAltOutlinedIcon sx={{ color: '#b279ff' }} />
              </NewBox>
            </NEW>
            <Posts posts={posts} />
          </>

          )}

    </WideBox>
  );
}

export default PostsTap;
