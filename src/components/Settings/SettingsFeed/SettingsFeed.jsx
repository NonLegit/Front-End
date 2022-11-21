import { Box } from '@mui/system';
import { Switch } from '@mui/material';
import {
  AntSwitch, ContentSubHeader, ContentHeader, Content, Button, Header,
  SettingsPageConranier, SubHeader,
} from '../styles';

function SettingsFeed() {
  return (
    <SettingsPageConranier>
      <Box sx={{ maxWidth: '688px', flex: '1 1 auto' }}>
        <Header>Feed settings</Header>
        <SubHeader>CONTENT PREFERENCES</SubHeader>
        <Button>
          <Content>
            <ContentHeader>
              Adult content
            </ContentHeader>
            <ContentSubHeader>
              Enable to view adult and NSFW (not safe for work) content in your feed and search results.
            </ContentSubHeader>
          </Content>
          <AntSwitch><Switch defaultChecked /></AntSwitch>
        </Button>
        <Button>
          <Content>
            <ContentHeader>
              Autoplay media
            </ContentHeader>
            <ContentSubHeader>
              Play videos and gifs automatically when in the viewport.
            </ContentSubHeader>
          </Content>
          <AntSwitch><Switch defaultChecked /></AntSwitch>
        </Button>
      </Box>
    </SettingsPageConranier>
  );
}

export default SettingsFeed;
