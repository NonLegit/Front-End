import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { WideBox } from '../styles';
import EmptyContent from '../EmptyContent/EmptyContent';
import Post from '../Posts/Post';

function HistoryTap() {
  const { subTitle } = useParams();
  const [isContent, setIsContent] = useState(false);
  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent(JSON.parse(localStorage.getItem('RedditHistory')));
    if (content?.length > 0) { setIsContent(true); }
  }, [content, subTitle]);

  const emptyContent = 'hmm... looks like you haven\'t recently viewed anything yet';
  return (
    <WideBox>
      {!isContent && <EmptyContent emptyContent={emptyContent} />}
      {isContent && content.map((entity, index) => (<Post key={`${index + 0}`} entity={entity} />))}
    </WideBox>
  );
}

export default HistoryTap;
