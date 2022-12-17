import { Switch } from '@mui/material';
import {
  AboutString,
  Disc,
  FlexBox,
  FlexBoxColumn,
} from './style';
/**
 * More icon
 * @return {React.Component} - More icon
 */
export default function PostType(props) {
  const {
    allowImgs, allowVideos, allowLinks, setallowImgs, setallowVideos, setallowLinks,
  } = props;
  return (
    <>
      <FlexBox>
        <FlexBoxColumn>
          <AboutString>
            Image posts
          </AboutString>
          <Disc>Allow images to be uploaded in posts in your subreddit</Disc>
        </FlexBoxColumn>
        { allowImgs
                    && <Switch defaultChecked onClick={() => { setallowImgs(!allowImgs); }} />}
        {!allowImgs
                    && <Switch defaultChecked={false} onClick={() => { setallowImgs(!allowImgs); }} />}
      </FlexBox>
      <FlexBox>
        <FlexBoxColumn>
          <AboutString>
            Videos posts
          </AboutString>
          <Disc>Allow videos to be uploaded in posts in your subreddit</Disc>
        </FlexBoxColumn>
        { allowVideos
                    && <Switch defaultChecked onClick={() => { setallowVideos(!allowVideos); }} />}
        {!allowVideos
                    && <Switch defaultChecked={false} onClick={() => { setallowVideos(!allowVideos); }} />}
      </FlexBox>
      <FlexBox>
        <FlexBoxColumn>
          <AboutString>
            Links posts
          </AboutString>
          <Disc>Allow links to be uploaded in posts in your subreddit</Disc>
        </FlexBoxColumn>
        { allowLinks
                    && <Switch defaultChecked onClick={() => { setallowLinks(!allowLinks); }} />}
        {!allowLinks
                    && <Switch defaultChecked={false} onClick={() => { setallowLinks(!allowLinks); }} />}
      </FlexBox>
    </>
  );
}
