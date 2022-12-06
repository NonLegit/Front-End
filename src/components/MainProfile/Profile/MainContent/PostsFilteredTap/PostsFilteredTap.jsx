import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import renderText from '../../../../../utils/renderText';
import { WideBox } from '../styles';
import EmptyContent from '../EmptyContent/EmptyContent';
import { UserContext } from '../../../../../contexts/UserProvider';
import Post from '../Posts/Post';
import postsFilteredTapServer from './postsFilteredTapServer';

/**
 * filtered taps (saved - hidden - upvoted - downvoted)
 *
 * @component PostsFilteredTap
 * @property {string} type - conatins the subtitle of the page to render correctly
 * @returns {React.Component} PostsFilteredTap
 */
function PostsFilteredTap() {
  const { subTitle } = useParams();
  const { username } = useContext(UserContext);
  const [posts] = postsFilteredTapServer(subTitle);
  const [isContent, setIsContent] = useState(false);
  // check if the page have any content posts to show
  useEffect(() => {
    if (posts?.length > 0) { setIsContent(true); }
  }, [username, posts, subTitle]);

  const emptyContent = renderText(subTitle);
  return (
    <WideBox>
      {!isContent && <EmptyContent emptyContent={emptyContent} />}
      {isContent && posts.map((entity, index) => (<Post key={`${index + 0}`} entity={entity} type={subTitle} />))}
    </WideBox>
  );
}

export default PostsFilteredTap;
