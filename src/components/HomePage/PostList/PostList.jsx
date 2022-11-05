import Post from '../../Post/Post';

function PostList(props) {
  const { posts } = props;
  return (
    <>
      {posts.map((post) => {
        const {
          id, title, image, subredditName, username, flair, flairColor, popularity, flairFontColor, postMediaSrc, isVideo,
        } = post;
        return (
          <Post
            title={title}
            image={image}
            subredditName={subredditName}
            username={username}
            flair={flair}
            flairColor={flairColor}
            popularity={popularity}
            flairFontColor={flairFontColor}
            postMediaSrc={postMediaSrc}
            isVideo={isVideo}
            key={id}
          />
        );
      })}
    </>
  );
}

export default PostList;
