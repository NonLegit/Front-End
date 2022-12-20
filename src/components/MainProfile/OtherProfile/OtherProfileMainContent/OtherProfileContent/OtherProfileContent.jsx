import { useEffect, useState, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { overviewServer } from '../../../profileServer';
import EmptyContent from '../OtherProfileEmptyContent/OtherProfileEmptyContent';
import Filter from '../OtherProfileFilter/OtherProfileFilter';
import ContentBox from './styles';
import Posts from '../../../Posts/Posts';
import Comments from '../../../Comments/Comments';
import mergeTwo from '../../../../../utils/mergeSort';
import { useListingContext } from '../../../../../contexts/ListingContext';

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

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
  const query = useQuery();
  const sort = query.get('sort');
  const [posts, comments] = overviewServer(username, sort);

  const { setPage } = useListingContext();
  const fetchMoreData = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    setIsContent(false);
    if (posts?.length > 0 || comments?.length > 0) { setIsContent(true); } else { setIsContent(false); }
  }, [username, posts, comments, sort]);

  const emptyContent = `hmm... u/${username}
          hasn't posted recently`;

  return (
    <ContentBox>
      <Filter subTitle2="./" />
      {!isContent && <EmptyContent emptyContent={emptyContent} />}
      {isContent
          && (
          <InfiniteScroll
            next={fetchMoreData}
            hasMore
            dataLength={posts.length}
          >
            {mergeTwo(posts, comments, sort).map((entity, index) => (
              (!entity.comments) ? <Posts nohover={false} key={`${index + 0}`} post={entity} condition="true" />
                : (entity.author.name === username) ? <Posts nohover={false} key={`${index + 0}`} post={entity} condition="false" />
                  : <Comments key={`${index + 0}`} entity={entity} overview="true" profile={false} />
            ))}
          </InfiniteScroll>
          )}
    </ContentBox>
  );
}

export default OtherProfileContent;
