import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { overviewServer } from '../../../profileServer';
import EmptyContent from '../OtherProfileEmptyContent/OtherProfileEmptyContent';
import Filter from '../OtherProfileFilter/OtherProfileFilter';
import ContentBox from './styles';
import Posts from './OtherProfilePosts/OtherProfilePosts';
import Comments from './OtherProfileComments/OtherProfileComments';
import mergeTwo from '../../../../../utils/mergeSort';

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
  const { username } = useParams();
  const [isContent, setIsContent] = useState(false);
  const [posts, comments] = overviewServer(username);

  useEffect(() => {
    if (posts?.length > 0 || comments?.length > 0) { setIsContent(true); }
  }, [username, posts]);

  const emptyContent = `hmm... u/${username}
          hasn't posted recently`;

  return (
    <ContentBox>
      <Filter subTitle2="./" />
      {!isContent && <EmptyContent emptyContent={emptyContent} />}
      {isContent
          && (
          <>
            {mergeTwo(posts, comments).map((entity, index) => (
              (!entity.comments) ? <Posts key={`${index + 0}`} post={entity} condition="true" />
                : (entity.author.name === username) ? <Posts key={`${index + 0}`} post={entity} condition="false" />
                  : <Comments key={`${index + 0}`} comment={entity} />
            ))}
          </>
          )}
    </ContentBox>
  );
}

export default OtherProfileContent;
