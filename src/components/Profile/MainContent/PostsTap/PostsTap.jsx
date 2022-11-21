import { useParams } from 'react-router-dom';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import { useContext, useEffect, useState } from 'react';
import Filter from '../Filter/Filter';
import { NEW, NewBox, WideBox } from '../styles';
import EmptyContent from '../EmptyContent/EmptyContent';
import { PostsContext } from '../../../../contexts/PostsProvider';
import { UserContext } from '../../../../contexts/UserProvider';
import Post from '../Posts/Post';

/**
 * posts tap in my profile
 *
 * @component PostsTap
 * @returns {React.Component} PostsTap
 */
function PostsTap() {
  const { subTitle } = useParams();
  const { username } = useContext(UserContext);
  const { posts } = useContext(PostsContext);
  const [isContent, setIsContent] = useState(false);

  // check if the page have any content posts to show
  useEffect(() => {
    if (posts.length > 0) { setIsContent(true); }
  }, [username, posts]);

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
            { posts.map((entity, index) => (<Post key={`${index + 0}`} entity={entity} />))}
          </>

          )}

    </WideBox>
  );
}

export default PostsTap;
