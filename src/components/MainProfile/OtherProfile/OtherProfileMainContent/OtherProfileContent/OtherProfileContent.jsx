import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../../contexts/UserProvider';
import { ContentContext } from '../../../../../contexts/ContentProvider';
import EmptyContent from '../OtherProfileEmptyContent/OtherProfileEmptyContent';
import Filter from '../OtherProfileFilter/OtherProfileFilter';
import ContentBox from './styles';
import Posts from './OtherProfilePosts/OtherProfilePosts';
import Comments from './OtherProfileComments/OtherProfileComments';

/**
 * Content component display the comments and posts in the profile page
 *
 * @component OtherProfileContent
 * @property {array} posts -array of posts objects
 * @property {array} comments -array of comments objects
 * @property {string} username
 * @returns {React.Component} OtherProfileContent
 */
function OtherProfileContent() {
  const [isContent, setIsContent] = useState(false);
  const { posts, comments } = useContext(ContentContext);
  const { username } = useContext(UserContext);

  useEffect(() => {
    if (posts?.length > 0 || comments?.length > 0) { setIsContent(true); }
  }, [username, posts, comments]);

  const emptyContent = `hmm... u/${username}
          hasn't posted recently`;

  return (
    <ContentBox>
      <Filter subTitle2="" />
      {!isContent && <EmptyContent emptyContent={emptyContent} />}
      {isContent
          && (
          <>
            {posts.map((post, index) => (
              <Posts key={`${index + 0}`} post={post} />
            ))}
            {comments.map((comment, index) => (
              <Comments key={`${index + 0}`} comment={comment} />
            ))}
          </>
          )}
    </ContentBox>
  );
}

export default OtherProfileContent;
