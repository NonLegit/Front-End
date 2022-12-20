import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { postsCommentsServer } from '../../../profileServer';
import Filter from '../OtherProfileFilter/OtherProfileFilter';
import { WideBox } from '../styles';
import EmptyContent from '../OtherProfileEmptyContent/OtherProfileEmptyContent';
import Post from '../OtherProfilePosts/OtherProfilePost';
import { useListingContext } from '../../../../../contexts/ListingContext';

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

  const { setPage } = useListingContext();
  const fetchMoreData = () => {
    setPage((page) => page + 1);
  };

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
          && (
          <InfiniteScroll
            next={fetchMoreData}
            hasMore
            dataLength={posts.length}
          >
            {posts.map((entity, index) => (<Post key={`${index + 0}`} entity={entity} />))}
          </InfiniteScroll>
          )}

    </WideBox>
  );
}

export default OtherProfilePostsTap;
