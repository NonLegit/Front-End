import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import Comments from './Comments/Comments';
import Filter from './Filter/Filter';
import Posts from './Posts/Posts';

import { ContentBox, NEW, NewBox } from './styles';

function Content() {
  const subReddit = 'hello_nour';
  const publisher = 'basma';
  const username = 'NourZiad';
  const title = 'HI';
  const time = '1 month';
  const points = '1';
  return (
    <ContentBox>
      <Filter />
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
    </ContentBox>
  );
}

export default Content;
