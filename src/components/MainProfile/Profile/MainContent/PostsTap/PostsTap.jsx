import { useLocation, useParams } from 'react-router-dom';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import {
  useContext, useEffect, useState, useMemo,
} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { postsCommentsServer } from '../../../profileServer';
import Filter from '../Filter/Filter';
import { NEW, NewBox, WideBox } from '../styles';
import EmptyContent from '../../../EmptyContent/EmptyContent';
import { UserContext } from '../../../../../contexts/UserProvider';
import Post from '../Posts/Post';
import { useListingContext } from '../../../../../contexts/ListingContext';

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

/**
 * posts tap in my profile
 *
 * @component PostsTap
 * @returns {React.Component} PostsTap
 */
function PostsTap() {
  const { subTitle } = useParams();
  const query = useQuery();
  const sort = query.get('sort');
  const { username } = useContext(UserContext);
  const [posts] = postsCommentsServer(username, 'posts', sort);
  const [isContent, setIsContent] = useState(false);

  const { setPage } = useListingContext();
  const fetchMoreData = () => {
    setPage((page) => page + 1);
  };

  // check if the page have any content posts to show
  useEffect(() => {
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
          <>
            <NEW sx={{ margin: 0 }}>
              <NewBox>
                NEW! Now you can get data and insights on your posts
                <SignalCellularAltOutlinedIcon sx={{ color: '#b279ff' }} />
              </NewBox>
            </NEW>
            <InfiniteScroll
              next={fetchMoreData}
              hasMore
              dataLength={posts.length}
            >
              { posts.map((entity, index) => (<Post key={`${index + 0}`} entity={entity} />))}
            </InfiniteScroll>
          </>
          )}

    </WideBox>
  );
}

export default PostsTap;
