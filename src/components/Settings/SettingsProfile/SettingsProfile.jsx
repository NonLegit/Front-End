import { Box } from '@mui/system';
import { Switch } from '@mui/material';
import {
  AntSwitch, ContentSubHeader, ContentHeader, Content, Button, Header,
  SettingsPageConranier, SubHeader,
} from '../styles';
import ProfileInoformation from './ProfileInoformation/ProfileInoformation';
import ProfileImage from './ProfileImage/ProfileImage';

function SettingsProfile() {
  return (
    <SettingsPageConranier>
      <Box sx={{ maxWidth: '688px', flex: '1 1 auto' }}>
        <Header>Customize profile</Header>
        <SubHeader>PROFILE INFORMATION</SubHeader>
        <ProfileInoformation />
        <ProfileImage />
        <SubHeader>PROFILE CATEGORY</SubHeader>
        <Button>
          <Content>
            <ContentHeader>
              NSFW
            </ContentHeader>
            <ContentSubHeader>
              This content is NSFW (may contain nudity, pornography, profanity or inappropriate content for those under 18)
            </ContentSubHeader>
          </Content>
          <AntSwitch><Switch defaultChecked /></AntSwitch>
        </Button>
        <SubHeader>ADVANCED</SubHeader>
        <Button>
          <Content>
            <ContentHeader>
              Allow people to follow you
            </ContentHeader>
            <ContentSubHeader>
              Followers will be notified about posts you make to your profile and see them in their home feed.
            </ContentSubHeader>
          </Content>
          <AntSwitch><Switch defaultChecked /></AntSwitch>
        </Button>
      </Box>
    </SettingsPageConranier>
  );
}

export default SettingsProfile;
