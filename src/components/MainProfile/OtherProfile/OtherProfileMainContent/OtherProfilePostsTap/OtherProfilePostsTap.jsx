import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import { postsCommentsServer } from '../../../profileServer';
import Filter from '../OtherProfileFilter/OtherProfileFilter';
import { WideBox } from '../styles';
import EmptyContent from '../OtherProfileEmptyContent/OtherProfileEmptyContent';
import Post from '../OtherProfilePosts/OtherProfilePost';

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

/**
 * posts tap in my profile
 *
 * @component OtherProfilePostsTap
 * @returns {React.Component} OtherProfilePostsTap
 */
function OtherProfilePostsTap() {
  const { subTitle, username } = useParams();
  const query = useQuery();
  const sort = query.get('sort');
  const [posts] = postsCommentsServer(username, 'posts', sort);
  const [isContent, setIsContent] = useState(false);

  // check if the page have any content posts to show
  useEffect(() => {
    console.log(posts);
    setIsContent(false);
    if (posts?.length > 0) { setIsContent(true); }
  }, [username, posts, sort]);

  const emptyContent = `hmm... u/${username}
          hasn't posted recently`;
  return (
    <WideBox>
      <Filter subTitle2={`${subTitle}/`} />
      {!isContent && <EmptyContent emptyContent={emptyContent} />}
      {isContent
          && posts.map((entity, index) => (<Post key={`${index + 0}`} entity={entity} />))}

    </WideBox>
  );
}

export default OtherProfilePostsTap;
