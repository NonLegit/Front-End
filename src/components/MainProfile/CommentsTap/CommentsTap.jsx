import { useLocation, useParams } from 'react-router-dom';
import {
  useContext, useEffect, useState, useMemo,
} from 'react';
import { Box } from '@mui/material';
import Comments from '../Comments/Comments';
import { postsCommentsServer } from '../profileServer';
import EmptyContent from '../EmptyContent/EmptyContent';
import { UserContext } from '../../../contexts/UserProvider';
import OtherProfileFilter from '../OtherProfile/OtherProfileMainContent/OtherProfileFilter/OtherProfileFilter';
import Filter from '../Profile/MainContent/Filter/Filter';

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

function CommentsTap({ profile }) {
  const { subTitle } = useParams();
  const query = useQuery();
  const sort = query.get('sort');
  const { username } = useContext(UserContext);
  const [posts] = postsCommentsServer(username, 'comments', sort);
  const [isContent, setIsContent] = useState(false);

  // check if the page have any content posts to show
  useEffect(() => {
    setIsContent(false);
    if (posts?.length > 0) { setIsContent(true); }
  }, [username, posts, sort]);

  const emptyContent = `hmm... u/${username} hasn't commented on anything`;
  return (
    <Box sx={{ width: '100%' }}>
      {profile ? <Filter subTitle2={`${subTitle}/`} /> : <OtherProfileFilter subTitle2={`${subTitle}/`} />}
      {!isContent && <EmptyContent emptyContent={emptyContent} />}
      {isContent
          && posts.map((entity, index) => (<Comments key={`${index + 0}`} entity={entity} profile={profile} />))}

    </Box>
  );
}

export default CommentsTap;
