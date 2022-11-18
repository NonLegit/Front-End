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
          id, createdAt, title, image, owner, author, flairText, flairBackgroundColor, popularity, flairColor, url, kind, votes, commentCount, text,
        } = post;
        return (
          <Post
            createdAt={createdAt}
            title={title}
            image={image}
            owner={owner}
            author={author}
            flairText={flairText}
            flairBackgroundColor={flairBackgroundColor}
            popularity={popularity}
            flairColor={flairColor}
            url={url}
            kind={kind}
            votes={votes}
            commentCount={commentCount}
            text={text}
            key={id}
          />
        );
      })}
    </>
  );
}

export default PostList;
