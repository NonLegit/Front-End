import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import mergeTwo from '../../../../../utils/mergeSort';
import EmptyContent from '../../../EmptyContent/EmptyContent';
import Filter from '../Filter/Filter';
import { NEW, NewBox } from '../styles';
import ContentBox from './styles';
import Posts from '../../../Posts/Posts';
import Comments from '../../../Comments/Comments';
import { overviewServer } from '../../../profileServer';

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

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
  const query = useQuery();
  const sort = query.get('sort');
  const [posts, comments] = overviewServer(username, sort);

  useEffect(() => {
    console.log(posts);
    setIsContent(false);
    if (posts?.length > 0 || comments?.length > 0) { setIsContent(true); }
  }, [username, posts, comments, sort]);

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
            {mergeTwo(posts, comments, sort).map((entity, index) => (
              (!entity.comments) ? <Posts nohover={false} key={`${index + 0}`} post={entity} condition="true" profile />
                : (entity.author.name === username) ? <Posts nohover={false} key={`${index + 0}`} post={entity} condition="false" profile />
                  : <Comments key={`${index + 0}`} entity={entity} overview="true" profile />
            ))}
          </>
          )}
    </ContentBox>
  );
}

export default Content;
