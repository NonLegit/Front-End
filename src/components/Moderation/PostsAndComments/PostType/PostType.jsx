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
export default function PostType() {
  return (
    <>
      <FlexBox>
        <FlexBoxColumn>
          <AboutString>
            Image posts
          </AboutString>
          <Disc>Allow images to be uploaded in posts in your subreddit</Disc>
        </FlexBoxColumn>
        <Switch defaultChecked={false} value="image" />
      </FlexBox>
      <FlexBox>
        <FlexBoxColumn>
          <AboutString>
            Videos posts
          </AboutString>
          <Disc>Allow videos to be uploaded in posts in your subreddit</Disc>
        </FlexBoxColumn>
        <Switch defaultChecked value="video" />
      </FlexBox>
      <FlexBox>
        <FlexBoxColumn>
          <AboutString>
            Links posts
          </AboutString>
          <Disc>Allow links to be uploaded in posts in your subreddit</Disc>
        </FlexBoxColumn>
        <Switch defaultChecked={false} value="link" />
      </FlexBox>
    </>
  );
}
