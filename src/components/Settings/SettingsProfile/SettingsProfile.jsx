import { Box } from '@mui/system';
import { Switch } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  AntSwitch, ContentSubHeader, ContentHeader, Content, Button, Header,
  SettingsPageConranier, SubHeader,
} from '../styles';
import ProfileInoformation from './ProfileInoformation/ProfileInoformation';
import ProfileImage from './ProfileImage/ProfileImage';
import useFetch from '../../../hooks/useFetch';
import SettingsProvider from '../../../contexts/SettingsProvider';
import settingsPost from '../server';
/**
 * - SettingsProfile
 * - Edit NSFW and Allow people to follow you in Seetings Page
 *  @property {String} data data from fetch
 *  @property {Object} prefs prefs of user
 *  @component
 */
function SettingsProfile() {
  const api = '/users/me/prefs';
  const [data, dataError] = useFetch(api);
  const [prefs, setPrefs] = useState();

  useEffect(() => {
    // console.log(data?.settings.prefs);
    setPrefs(data?.prefs);
    console.log(dataError);
  }, [data, dataError]);
  return (
    data === null ? (<div> error in fecting</div>)
      : (
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
              <AntSwitch onClick={() => { setPrefs((oldPrefs) => ({ ...oldPrefs, nsfw: !oldPrefs.nsfw })); settingsPost({ ...prefs, nsfw: !prefs?.nsfw }); }}>
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
              <AntSwitch onClick={() => { setPrefs((oldPrefs) => ({ ...oldPrefs, canbeFollowed: !oldPrefs.canbeFollowed })); settingsPost({ ...prefs, canbeFollowed: !prefs?.canbeFollowed }); }}>
                <Switch checked={prefs?.canbeFollowed || false} />

              </AntSwitch>
            </Button>
          </Box>
        </SettingsPageConranier>
      )
  );
}

export default SettingsProfile;
