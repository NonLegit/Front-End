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
  return (
    <>
      {posts.filter((post) => {
        const id = post?._id;
        return !hiddenPosts?.includes(id);
      }).map((post) => {
        const {
          _id: id, createdAt, title, images, ownerName, ownerIcon, authorName, flairText, flairBackgroundColor, flairColor, kind, votes, commentCount, text, video, ownerType, postVoteStatus, isSaved, url, nsfw, spoiler,
        } = post;
        return (
          <Post
            postVoteStatus={postVoteStatus}
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
            key={id}
            ownerType={ownerType}
            isSaved={isSaved}
            postId={id}
            url={url}
            nsfw={nsfw}
            spoiler={spoiler}
            subredit={subredit}
          />
        );
      })}
    </>
  );
}

export default PostList;
