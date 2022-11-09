import EntityPost from './EntityPost/EntityPost';

function Posts(props) {
  const {
    posts, upvoted, downvoted, saved, hidden,
  } = props;

  return (
    <>
      { posts.map((entity) => ((entity.upvoted && upvoted)
          && <EntityPost key={entity.id} entity={entity} />))}
      { posts.map((entity) => ((entity.downvoted && downvoted)
          && <EntityPost key={entity.id} entity={entity} />))}
      { posts.map((entity) => ((entity.saved && saved)
          && <EntityPost key={entity.id} entity={entity} />))}
      { posts.map((entity) => ((entity.hidden && hidden)
          && <EntityPost key={entity.id} entity={entity} />))}
      { posts.map((entity) => ((!upvoted && !downvoted && !saved && !hidden)
          && <EntityPost key={entity.id} entity={entity} />))}
    </>
  );
}

export default Posts;
