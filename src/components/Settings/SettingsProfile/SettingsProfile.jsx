import { Box } from '@mui/system';
import { Switch } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import {
  AntSwitch, ContentSubHeader, ContentHeader, Content, Button, Header,
  SettingsPageConranier, SubHeader,
} from '../styles';
import ProfileInoformation from './ProfileInoformation/ProfileInoformation';
import ProfileImage from './ProfileImage/ProfileImage';
import SettingsProvider from '../../../contexts/SettingsProvider';
import { settingsPost, settingsFetch } from '../settingsServer';

/**
 * - SettingsProfile
 * - Edit NSFW and Allow people to follow you in Seetings Page
 *  @property {String} data data from fetch
 *  @property {Object} prefs prefs of user
 *  @component
 */
function SettingsProfile() {
  const alert = useAlert();
  const [prefs, setPrefs] = useState();
  const [data] = settingsFetch();
  useEffect(() => {
    setPrefs(data?.prefs);
  }, [data]);
  const handleNSFW = async () => {
    setPrefs((oldPrefs) => ({ ...oldPrefs, nsfw: !oldPrefs.nsfw }));
    const [text, type] = await settingsPost({ ...prefs, nsfw: !prefs?.nsfw });
    if (text !== '') {
      alert.show({ text, type });
    }
  };
  const handleCanbeFollowed = async () => {
    setPrefs((oldPrefs) => ({ ...oldPrefs, canbeFollowed: !oldPrefs.canbeFollowed }));
    const [text, type] = await settingsPost({ ...prefs, canbeFollowed: !prefs?.canbeFollowed });
    if (text !== '') {
      alert.show({ text, type });
    }
  };
  return (

    <SettingsPageConranier data-testid="settings-profile">
      <Box sx={{ maxWidth: '688px', flex: '1 1 auto' }}>
        <Header>Customize profile</Header>
        <SubHeader>PROFILE INFORMATION</SubHeader>
        <SettingsProvider prefs={prefs} setPrefs={setPrefs}>
          <ProfileInoformation />
        </SettingsProvider>
        <SettingsProvider prefs={prefs} setPrefs={setPrefs}>
          <ProfileImage />
        </SettingsProvider>
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
          <AntSwitch onClick={() => { handleNSFW(); }}>
            <Switch checked={prefs?.nsfw || false} />
          </AntSwitch>
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
          <AntSwitch onClick={() => { handleCanbeFollowed(); }}>
            <Switch checked={prefs?.canbeFollowed || false} />

          </AntSwitch>
        </Button>
      </Box>
    </SettingsPageConranier>

  );
}

export default SettingsProfile;
