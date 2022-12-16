import { Box } from '@mui/system';
import { Switch } from '@mui/material';
import { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import {
  AntSwitch, ContentSubHeader, ContentHeader, Content, Button, Header,
  SettingsPageConranier, SubHeader,
} from '../styles';
import { settingsPost, settingsFetch } from '../settingsServer';
/**
 * - SettingsFeed
 * - Change Adult content and  Autoplay media in settings page
 *  @component
 *  @property {function} setPrefs set prefs of user
 *  @property {Object} prefs prefs of user
 *  @property {Object} data data from fetch
 */
function SettingsFeed() {
  const alert = useAlert();
  const [prefs, setPrefs] = useState();
  const [data] = settingsFetch();
  useEffect(() => {
    setPrefs(data?.prefs);
  }, [data]);

  const handleAdultContent = async () => {
    setPrefs((oldPrefs) => ({ ...oldPrefs, adultContent: !oldPrefs.adultContent }));
    const [text, type] = await settingsPost({ ...prefs, adultContent: !prefs?.adultContent });
    if (text !== '') {
      alert.show({ text, type });
    }
  };
  const handleAutoplayMedia = async () => {
    setPrefs((oldPrefs) => ({ ...oldPrefs, autoplayMedia: !oldPrefs.autoplayMedia }));
    const [text, type] = await settingsPost({ ...prefs, autoplayMedia: !prefs?.autoplayMedia });
    if (text !== '') {
      alert.show({ text, type });
    }
  };
  return (

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

  );
}

export default SettingsFeed;
