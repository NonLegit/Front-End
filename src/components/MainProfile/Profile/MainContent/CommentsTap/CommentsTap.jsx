import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Comments from '../Comments/Comments';
import { postsCommentsServer } from '../../../profileServer';
import Filter from '../Filter/Filter';
import { WideBox } from '../styles';
import EmptyContent from '../EmptyContent/EmptyContent';
import { UserContext } from '../../../../../contexts/UserProvider';

function CommentsTap() {
  const { subTitle } = useParams();
  const { username } = useContext(UserContext);
  const [posts] = postsCommentsServer(username, 'comments');
  const [isContent, setIsContent] = useState(false);

  // check if the page have any content posts to show
  useEffect(() => {
    if (posts?.length > 0) { setIsContent(true); } else { setIsContent(false); }
  }, [username, posts]);

  const emptyContent = 'hmm... u/NourThird hasn\'t commented on anything';
  return (
    <WideBox>
      <Filter subTitle2={`${subTitle}/`} />
      {!isContent && <EmptyContent emptyContent={emptyContent} />}
      {isContent
          && posts.map((entity, index) => (<Comments key={`${index + 0}`} entity={entity} />))}

    </WideBox>
  );
}

export default CommentsTap;
