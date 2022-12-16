import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import OtherProfileComments from '../OtherProfileComments/OtherProfileComments';
import { postsCommentsServer } from '../../../profileServer';
import OtherProfileFilter from '../OtherProfileFilter/OtherProfileFilter';
import { WideBox } from '../styles';
import OtherProfileEmptyContent from '../OtherProfileEmptyContent/OtherProfileEmptyContent';
import { UserContext } from '../../../../../contexts/UserProvider';

function OtherProfileCommentsTap() {
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
      <OtherProfileFilter subTitle2={`${subTitle}/`} />
      {!isContent && <OtherProfileEmptyContent emptyContent={emptyContent} />}
      {isContent
          && posts.map((entity, index) => (<OtherProfileComments key={`${index + 0}`} entity={entity} />))}

    </WideBox>
  );
}

export default OtherProfileCommentsTap;
