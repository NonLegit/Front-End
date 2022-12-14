import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { UserContext } from '../../../../../contexts/UserProvider';
import mergeTwo from '../../../../../utils/mergeSort';
import EmptyContent from '../EmptyContent/EmptyContent';
import Filter from '../Filter/Filter';
import { NEW, NewBox } from '../styles';
import ContentBox from './styles';
import Posts from './Posts/Posts';
import Comments from './Comments/Comments';
import { overviewServer } from '../../../profileServer';

/**
 * Content component display the comments and posts in the profile page
 *
 * @component Content
 * @property {array} posts -array of posts objects
 * @property {array} comments -array of comments objects
 * @property {string} username
 * @returns {React.Component} Content
 */
function Content() {
  const { username } = useParams();
  const [isContent, setIsContent] = useState(false);
  const [posts, comments] = overviewServer(username);

  useEffect(() => {
    if (posts?.length > 0 || comments?.length > 0) { setIsContent(true); }
  }, [username, posts, comments]);

  const emptyContent = `hmm... u/${username}
          hasn't posted recently`;

  return (
    <ContentBox>
      <Filter subTitle2="./" />
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
            {mergeTwo(posts, comments).map((entity, index) => (
              (!entity.comments) ? <Posts key={`${index + 0}`} post={entity} condition="true" />
                : (entity.author.name === username) ? <Posts key={`${index + 0}`} post={entity} condition="false" />
                  : <Comments key={`${index + 0}`} comment={entity} />
            ))}
          </>
          )}
    </ContentBox>
  );
}

export default Content;
