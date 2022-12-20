import InfiniteScroll from 'react-infinite-scroll-component';
import { useListingContext } from '../../../../contexts/ListingContext';
import { useHiddenPostsContext } from '../../../../contexts/HiddenPostsContext';
import Post from '../../../Post/Post';
/**
 * This component is the timeline (the container which contains all posts retrieved to be displayed)
 *
 * @component PostList
 * @property {Array.<post>} posts -post objects fetched
 * @returns {React.Component} List of all posts
 */

function PostList(props) {
  const { posts, subredit } = props;
  const { hiddenPosts } = useHiddenPostsContext();
  console.log(subredit);
  const { setPage } = useListingContext();
  const fetchMoreData = () => {
    // console.log('bazwed', page);
    setPage((page) => page + 1);
  };

  return (
    <InfiniteScroll
      next={fetchMoreData}
      hasMore
      dataLength={posts.length}
    >
      {posts.filter((post) => {
        const id = post?._id;
        return !hiddenPosts?.includes(id);
      }).map((post, index) => {
        const {
          _id: id, createdAt, title, images, ownerName, ownerIcon, authorName, flairText, flairBackgroundColor, flairColor, kind, votes, commentCount, text, video, ownerType, postVoteStatus, isSaved, url, nsfw, spoiler,
          sharedFrom,
        } = post;
        return (

          <Post
            postVoteStatus={postVoteStatus || 0}
            createdAt={createdAt}
            title={title}
            ownerIcon={ownerIcon}
            ownerName={ownerName}
            authorName={authorName}
            flairText={flairText}
            flairBackgroundColor={flairBackgroundColor}
            flairColor={flairColor}
            images={images}
            video={video}
            kind={kind}
            votes={votes}
            commentCount={commentCount}
            text={text}
            // eslint-disable-next-line react/no-array-index-key
            key={id + index}
            ownerType={ownerType}
            isSaved={isSaved}
            postId={id}
            url={url}
            nsfw={nsfw}
            spoiler={spoiler}
            subredit={subredit}
            sharedFrom={sharedFrom}
          />
        );
      })}
    </InfiniteScroll>
  );
}

export default PostList;
