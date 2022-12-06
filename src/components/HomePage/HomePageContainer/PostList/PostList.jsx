import Post from '../../../Post/Post';
/**
 * This component is the timeline (the container which contains all posts retrieved to be displayed)
 *
 * @component PostList
 * @property {Array.<post>} posts -post objects fetched
 * @returns {React.Component} List of all posts
 */

function PostList(props) {
  const { posts } = props;
  return (
    <>
      {posts.map((post) => {
        const {
          _id: id, createdAt, title, images, ownerName, ownerIcon, authorName, flairText, flairBackgroundColor, flairColor, kind, votes, commentCount, text, videos, ownerType,
        } = post;
        return (
          <Post
            createdAt={createdAt}
            title={title}
            ownerIcon={ownerIcon}
            ownerName={ownerName}
            authorName={authorName}
            flairText={flairText}
            flairBackgroundColor={flairBackgroundColor}
            flairColor={flairColor}
            images={images}
            videos={videos}
            kind={kind}
            votes={votes}
            commentCount={commentCount}
            text={text}
            key={id}
            ownerType={ownerType}
          />
        );
      })}
    </>
  );
}

export default PostList;
