import { Box } from '@mui/system';
import { Switch } from '@mui/material';
import { useState, useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';
import {
  AntSwitch, ContentSubHeader, ContentHeader, Content, Button, Header,
  SettingsPageConranier, SubHeader,
} from '../styles';
import settingsPost from '../server';
/**
 * - SettingsFeed
 * - Change Adult content and  Autoplay media in settings page
 *  @component
 *  @property {function} setPrefs set prefs of user
 *  @property {Object} prefs prefs of user
 *  @property {Object} data data from fetch
 */
function SettingsFeed() {
  const api = '/users/me/prefs';
  const [data, dataError] = useFetch(api);
  const [prefs, setPrefs] = useState();
  useEffect(() => {
    // console.log(data?.settings.prefs);
    setPrefs(data?.prefs);
    console.log(dataError);
  }, [data, dataError]);

  return (
    data === null ? (<div data-testid="settings-feed"> error in fecting</div>)
      : (
        <SettingsPageConranier data-testid="settings-feed">
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
              <AntSwitch onClick={() => { setPrefs((oldPrefs) => ({ ...oldPrefs, adultContent: !oldPrefs.adultContent })); settingsPost({ ...prefs, adultContent: !prefs?.adultContent }); }}>
                <Switch checked={prefs?.adultContent || false} />
              </AntSwitch>
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
              <AntSwitch onClick={() => { setPrefs((oldPrefs) => ({ ...oldPrefs, autoplayMedia: !oldPrefs.autoplayMedia })); settingsPost({ ...prefs, autoplayMedia: !prefs?.autoplayMedia }); }}>
                <Switch checked={prefs?.autoplayMedia || false} inputProps={{ 'aria-label': 'controlled' }} />

              </AntSwitch>
            </Button>
          </Box>
        </SettingsPageConranier>
      )
  );
}

export default SettingsFeed;
