import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import EmptyContent from '../EmptyContent/EmptyContent';
import Filter from '../Filter/Filter';
import { NEW, NewBox } from '../styles';
import Comments from './Comments/Comments';
import Posts from './Posts/Posts';
import ContentBox from './styles';

function Content(props) {
  const subReddit = 'hello_nour';
  const publisher = 'basma';
  const { username } = props;
  const title = 'HI';
  const time = '1 month';
  const points = '1';
  const isContent = true;
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
            <Posts subReddit={subReddit} />
            <Comments
              subReddit={subReddit}
              publisher={publisher}
              username={username}
              title={title}
              time={time}
              points={points}
            />
            <Posts subReddit={subReddit} />
            <Comments
              subReddit={subReddit}
              publisher={publisher}
              username={username}
              title={title}
              time={time}
              points={points}
            />
          </>
          )}
    </ContentBox>
  );
}

export default Content;
