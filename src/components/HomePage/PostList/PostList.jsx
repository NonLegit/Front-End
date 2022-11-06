import Post from '../../Post/Post';

function PostList(props) {
  const { posts } = props;
  return (
    <>
      {posts.map((post) => {
        const {
          id, title, image, sr, creator, flairText, flairBackgroundColor, popularity, flairColor, url, kind, votes, commentCount,
        } = post;
        return (
          <Post
            title={title}
            image={image}
            sr={sr}
            creator={creator}
            flairText={flairText}
            flairBackgroundColor={flairBackgroundColor}
            popularity={popularity}
            flairColor={flairColor}
            url={url}
            kind={kind}
            votes={votes}
            commentCount={commentCount}
            key={id}
          />
        );
      })}
    </>
  );
}

export default PostList;
