import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Filter from '../Filter/Filter';
import { WideBox } from '../styles';
import EmptyContent from '../EmptyContent/EmptyContent';
import { PostsContext } from '../../../../context/PostsProvider';
import { UserContext } from '../../../../context/UserProvider';
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
            { posts.map((entity, index) => (<Post key={`${index + 0}`} entity={entity} />))}
          </>
          )}

    </WideBox>
  );
}

export default PostsTap;
