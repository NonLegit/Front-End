import { useContext, useEffect, useState } from 'react';
import renderText from '../../../../../utils/renderText';
import { WideBox } from '../styles';
import EmptyContent from '../EmptyContent/EmptyContent';
import { UserContext } from '../../../../../contexts/UserProvider';
import { FilteredPostsContext } from '../../../../../contexts/FilteredPostsProvider';
import Post from '../Posts/Post';

/**
 * filtered taps (saved - hidden - upvoted - downvoted)
 *
 * @component PostsFilteredTap
 * @property {string} type - conatins the subtitle of the page to render correctly
 * @returns {React.Component} PostsFilteredTap
 */
function PostsFilteredTap(props) {
  const { type } = props;
  const { username } = useContext(UserContext);
  const { posts, statusCode } = useContext(FilteredPostsContext);
  const [isContent, setIsContent] = useState(false);
  // check if the page have any content posts to show
  useEffect(() => {
    if (statusCode === 401) {
      window.location.href = './login';
    }
    if (posts?.length > 0) { setIsContent(true); }
  }, [username, posts, type, statusCode]);

  const emptyContent = renderText(type);
  return (
    <WideBox>
      {!isContent && <EmptyContent emptyContent={emptyContent} />}
      {isContent && posts.map((entity, index) => (<Post key={`${index + 0}`} entity={entity} type={type} />))}
    </WideBox>
  );
}

export default PostsFilteredTap;
