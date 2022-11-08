import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import Filter from '../Filter/Filter';
import { NEW, NewBox, WideBox } from '../styles';
import EmptyContent from '../EmptyContent/EmptyContent';
import Posts from '../Posts/Posts';

function PostsTap(props) {
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
      <Filter subTitle2={`${subTitle}/`} />
      {!isContent && <EmptyContent emptyContent={emptyContent} />}
      {isContent
          && (
          <>
            <NEW sx={{ margin: 0 }}>
              <NewBox>
                NEW! Now you can get data and insights on your posts
                <SignalCellularAltOutlinedIcon sx={{ color: '#b279ff' }} />
              </NewBox>
            </NEW>
            <Posts subReddit={subReddit} />
          </>

          )}

    </WideBox>
  );
}

export default PostsTap;
