import { useContext, useEffect, useState } from 'react';
import { WideBox } from '../styles';
import EmptyContent from '../EmptyContent/EmptyContent';
import { UserContext } from '../../../../context/UserProvider';
import { FilteredPostsContext } from '../../../../context/FilteredPostsProvider';
import Post from '../Posts/Post';

const renderSwitch = (param) => {
  switch (param) {
    case 'upvoted':
      return `hmm...looks like you
            haven't upvoted and thing yet`;
    case 'downvoted':
      return `hmm... looks like you
            haven't downvoted and thing yet`;
    case 'saved':
      return `hmm... looks like you
            haven't saved and thing yet`;
    case 'hidden':
      return `hmm... looks like you
            haven't hidden and thing yet`;

    default:
      return 'foo';
  }
};

/** filtered taps (saved - hidden - upvoted - downvoted)
 * @return {React.Component} - PostsFilteredTap
 * @param {string} type - conatins the subtitle of the page to render correctly
 */
function PostsFilteredTap(props) {
  const { type } = props;
  // const [stateTap, setStateTap] = useState(type);
  const { username } = useContext(UserContext);
  const { posts } = useContext(FilteredPostsContext);
  const [isContent, setIsContent] = useState(false);
  useEffect(() => {
    // setStateTap(type);
    if (posts.length > 0) { setIsContent(true); }
  }, [username, posts, type]);

  const emptyContent = renderSwitch(type);
  return (
    <WideBox>
      {!isContent && <EmptyContent emptyContent={emptyContent} />}
      {isContent && posts.map((entity, index) => (<Post key={`${index + 0}`} entity={entity} type={type} />))}
    </WideBox>
  );
}

export default PostsFilteredTap;
