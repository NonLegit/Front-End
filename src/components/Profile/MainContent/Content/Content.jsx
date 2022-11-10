import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../context/UserProvider';
import { ContentContext } from '../../../../context/ContentProvider';
import EmptyContent from '../EmptyContent/EmptyContent';
import Filter from '../Filter/Filter';
import { NEW, NewBox } from '../styles';
import ContentBox from './styles';
import Posts from './Posts/Posts';
import Comments from './Comments/Comments';

/**
 * Content for my profile
 * @return {React.Component} - Content
 */
function Content() {
  const [isContent, setIsContent] = useState(false);
  const { posts, comments } = useContext(ContentContext);
  const { username } = useContext(UserContext);

  useEffect(() => {
    if (posts.length > 0 || comments.length > 0) { setIsContent(true); }
  }, [username, posts, comments]);

  const emptyContent = `hmm... u/${username}
          hasn't posted recently`;

  return (
    <ContentBox>
      <Filter subTitle2="" />
      {!isContent && <EmptyContent emptyContent={emptyContent} />}
      {isContent
          && (
          <>
            <NEW>
              <NewBox>
                NEW! Now you can get data and insights on your posts
                <SignalCellularAltOutlinedIcon sx={{ color: '#b279ff' }} />
              </NewBox>
            </NEW>
            {posts.map((post, index) => (
              <Posts key={`${index + 0}`} post={post} />
            ))}
            {comments.map((comment, index) => (
              <Comments key={`${index + 0}`} comment={comment} />
            ))}
          </>
          )}
    </ContentBox>
  );
}

export default Content;
