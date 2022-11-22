import { useState, useContext, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';

import {
  ContentSubHeader, ContentHeader, Content, Text,
} from '../../styles';
import {
  DisplayName, About, AddSocialLinks,
} from './styles';
import { SettingsContext } from '../../../../contexts/SettingsProvider';
import settingsPost from '../../server';
/**
 * - ProfileInoformation
 * - Edit Display name  and About people in Seetings Page
 *  @param {Object} prefs - prefs of user
 *  @property {function} setPrefs set prefs of user
 *  @property {String} name name of user
 *  @property {String} about description of user
 *  @component
 */
function ProfileInoformation() {
  const {
    prefs, setPrefs,
  } = useContext(SettingsContext);
  useEffect(() => { console.log(prefs); }, [prefs]);
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  useEffect(() => {
    setName(prefs?.displayName);
    setAbout(prefs?.description);
  }, [prefs]);
  return (
    <>
      <Text>
        <Content>
          <ContentHeader>
            Display name (optional)
          </ContentHeader>
          <ContentSubHeader>
            Set a display name. This does not change your username.
          </ContentSubHeader>
        </Content>
        <DisplayName
          onBlur={() => { setPrefs((oldPrefs) => ({ ...oldPrefs, displayName: name })); settingsPost({ ...prefs, displayName: name }); }}
          value={name}
          maxLength={30}
          onChange={(e) => { setName(e.target.value); }}
        />
        <ContentSubHeader sx={{ color: (30 - ((name) ? name.length : 0) === 0) ? 'red' : '#7c7c7c' }}>
          {30 - ((name) ? name.length : 0)}
          {' '}
          Character remaining
        </ContentSubHeader>
      </Text>
      <Text>
        <Content>
          <ContentHeader>
            About (optional)
          </ContentHeader>
          <ContentSubHeader>
            A brief description of yourself shown on your profile.
          </ContentSubHeader>
        </Content>
        <About
          onBlur={() => { setPrefs((oldPrefs) => ({ ...oldPrefs, description: about })); settingsPost({ ...prefs, description: about }); }}
          value={about}
          maxLength={200}
          onChange={(e) => { setAbout(e.target.value); }}
        />
        <ContentSubHeader sx={{ color: (200 - ((about) ? about.length : 0) === 0) ? 'red' : '#7c7c7c' }}>
          {200 - ((about) ? about.length : 0) }
          {' '}
          Character remaining
        </ContentSubHeader>
      </Text>
      <Text>
        <Content>
          <ContentHeader>
            Social links (5 max)
          </ContentHeader>
          <ContentSubHeader>
            People who visit your profile will see your social links.
          </ContentSubHeader>
        </Content>
        <AddSocialLinks>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AddIcon />
            Add social link
          </Box>
        </AddSocialLinks>
      </Text>
    </>
  );
}

export default ProfileInoformation;