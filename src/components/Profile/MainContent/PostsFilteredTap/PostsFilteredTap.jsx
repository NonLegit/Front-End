import { useContext, useEffect, useState } from 'react';
import { WideBox } from '../styles';
import EmptyContent from '../EmptyContent/EmptyContent';
/* eslint-disable import/no-cycle */
import Posts from '../Posts/Posts';
import { PostsContext, UserContext } from '../MainContent';

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

function PostsFilteredTap(props) {
  const { type } = props;
  const { username } = useContext(UserContext);
  const { posts } = useContext(PostsContext);
  const [isContent, setIsContent] = useState(false);
  useEffect(() => {
    console.log(posts.length);
    console.log(username);
    if (posts.length > 0) { setIsContent(true); }
  }, [username]);

  const emptyContent = renderSwitch(type);
  return (
    <WideBox>
      {!isContent && <EmptyContent emptyContent={emptyContent} />}
      {isContent
          && (
          <Posts posts={posts} upvoted={type === 'upvoted'} downvoted={type === 'downvoted'} saved={type === 'saved'} hidden={type === 'hidden'} />
          )}
    </WideBox>
  );
}

export default PostsFilteredTap;
