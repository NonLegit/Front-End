import EntityPost from './EntityPost/EntityPost';

function Posts(props) {
  const { subReddit, upvoted } = props;
  const content = [
    {
      id: 1, Title: 'meet', Paragraph: 'extre', expand: false,
    },
    {
      id: 2, Title: 'new', Paragraph: 'extre', expand: false,
    },
    {
      id: 3, Title: 'basma', Paragraph: 'extre', expand: false,
    },
    {
      id: 4, Title: 'lorem', Paragraph: 'extre', expand: false,
    },
  ];

  return (
    <>
      {content.map((entity) => (
        <EntityPost subReddit={subReddit} entity={entity} upvoted={upvoted} />
      ))}

    </>
  );
}

export default Posts;
