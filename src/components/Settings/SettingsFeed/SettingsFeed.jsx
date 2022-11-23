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

  const handleAdultContent = async () => {
    setPrefs((oldPrefs) => ({ ...oldPrefs, adultContent: !oldPrefs.adultContent }));
    const sataus = await settingsPost({ ...prefs, adultContent: !prefs?.adultContent });
    if (sataus === 304) {
      alert('OPeration failed');
    } else if (sataus === 401) {
      window.location.href = './login';
    } else if (sataus === 200 || sataus === 201) {
      alert('operation done successfully');
    }
  };
  const handleAutoplayMedia = async () => {
    setPrefs((oldPrefs) => ({ ...oldPrefs, autoplayMedia: !oldPrefs.autoplayMedia }));
    const sataus = await settingsPost({ ...prefs, autoplayMedia: !prefs?.autoplayMedia });
    if (sataus === 304) {
      alert('OPeration failed');
    } else if (sataus === 401) {
      window.location.href = './login';
    } else if (sataus === 200 || sataus === 201) {
      alert('operation done successfully');
    }
  };
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
              <AntSwitch onClick={() => { handleAdultContent(); }}>
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
              <AntSwitch onClick={() => { handleAutoplayMedia(); }}>
                <Switch checked={prefs?.autoplayMedia || false} inputProps={{ 'aria-label': 'controlled' }} />

              </AntSwitch>
            </Button>
          </Box>
        </SettingsPageConranier>
      )
  );
}

export default SettingsFeed;
