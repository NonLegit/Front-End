import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { WideBox } from '../styles';
import EmptyContent from '../EmptyContent/EmptyContent';
import Posts from '../Posts/Posts';

function UpVoted(props) {
  const { subTitle, sort } = useParams();
  const { username } = props;
  const subReddit = 'hello_nour';
  const isContent = true;
  useEffect(() => {
    // Update the document title using the browser API
    console.log(subTitle, sort);
  });
  const emptyContent = `hmm... u/${username}
          hasn't posted recently`;
  return (
    <WideBox>
      {!isContent && <EmptyContent emptyContent={emptyContent} />}
      {isContent
          && (
          <Posts subReddit={subReddit} upvoted />
          )}

    </WideBox>
  );
}

export default UpVoted;
