import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import InfiniteScroll from 'react-infinite-scroll-component';
import mergeTwo from '../../../../../utils/mergeSort';
import renderText from '../../../../../utils/renderText';
import { WideBox } from '../styles';
import EmptyContent from '../../../EmptyContent/EmptyContent';
import { UserContext } from '../../../../../contexts/UserProvider';
import Post from '../Posts/Post';
import SavedTapServer from './SavedTapServer';
import Comments from '../../../Comments/Comments';
// import { useListingContext } from '../../../../../contexts/ListingContext';

/**
 * Saved taps
 *
 * @component SavedTap
 * @returns {React.Component} PostsFilteredTap
 */
function SavedTap() {
  const { subTitle } = useParams();
  const { username } = useContext(UserContext);
  const [posts, comments] = SavedTapServer();
  const [isContent, setIsContent] = useState(false);

  // const { setPage } = useListingContext();
  // const fetchMoreData = () => {
  //   setPage((page) => page + 1);
  // };

  // check if the page have any content posts to show
  useEffect(() => {
    console.log(posts, comments);
    setIsContent(false);
    if (posts?.length > 0 || comments?.length > 0) { setIsContent(true); }
  }, [username, posts, comments, subTitle]);

  const emptyContent = renderText(subTitle);
  return (
    <WideBox>
      {!isContent && <EmptyContent emptyContent={emptyContent} />}
      {isContent && mergeTwo(posts, comments).map((entity, index) => (
        entity.savedPost ? <Post key={`${index + 0}`} entity={entity.savedPost} type={subTitle} /> : <Comments key={`${index + 0}`} entity={entity.savedComment} />
      ))}
    </WideBox>
  );
}

export default SavedTap;
