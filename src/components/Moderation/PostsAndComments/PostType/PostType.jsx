import { Switch } from '@mui/material';
import {
  AboutString,
  Disc,
  FlexBox,
  FlexBoxColumn,
} from './style';
/**
 * Posts Type
 * @component
 * @property  {function} setallowImgs - set allow image or not
 * @property  {function} setallowVideos - set allow image or not
 * @property  {function} setallowLinks - set allow image or not
 *
 * @param {string} allowImgs -  allow image or not
 * @param {string} allowVideos -  allow video or not
 * @param {string} allowLinks -  allow links or not
 *
 * @return {React.Component} - Posts Type
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
