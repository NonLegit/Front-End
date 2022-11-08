import EntityPost from './EntityPost/EntityPost';

function Posts(props) {
  const {
    subReddit, upvoted, downvoted, saved, hidden,
  } = props;
  const content = [
    {
      id: 1, Title: 'meet', Paragraph: 'extre', expand: false, postedByOthers: true, upvoted: true, downvoted: false, saved: true, hidden: false,
    },
    {
      id: 2, Title: 'new', Paragraph: 'extre', expand: false, postedByOthers: false, upvoted: false, downvoted: false, saved: false, hidden: false,
    },
    {
      id: 3, Title: 'basma', Paragraph: 'extre', expand: false, postedByOthers: false, upvoted: false, downvoted: true, saved: false, hidden: true,
    },
    {
      id: 4, Title: 'lorem', Paragraph: 'extre', expand: false, postedByOthers: true, upvoted: true, downvoted: false, saved: false, hidden: true,
    },
  ];

  return (
    <>
      { content.map((entity) => ((entity.upvoted && upvoted)
          && <EntityPost key={entity.id} subReddit={subReddit} entity={entity} />))}
      { content.map((entity) => ((entity.downvoted && downvoted)
          && <EntityPost key={entity.id} subReddit={subReddit} entity={entity} />))}
      { content.map((entity) => ((entity.saved && saved)
          && <EntityPost key={entity.id} subReddit={subReddit} entity={entity} />))}
      { content.map((entity) => ((entity.hidden && hidden)
          && <EntityPost key={entity.id} subReddit={subReddit} entity={entity} />))}
      { content.map((entity) => ((!upvoted && !downvoted && !saved && !hidden)
          && <EntityPost key={entity.id} subReddit={subReddit} entity={entity} />))}
    </>
  );
}

export default Posts;
