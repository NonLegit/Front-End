import { useState, useContext, useEffect } from 'react';

import { useAlert } from 'react-alert';
import {
  ContentSubHeader, ContentHeader, Content, Text,
} from '../../styles';
import {
  DisplayName, About,
} from './styles';
import { SettingsContext } from '../../../../contexts/SettingsProvider';

import { settingsPost } from '../../settingsServer';
import SocialLinksSettings from './SocialLinksSettings/SocialLinksSettings';
/**
 * - Profile Inoformation
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
  const alert = useAlert();
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  useEffect(() => { console.log(prefs); }, [prefs]);

  useEffect(() => {
    setName(prefs?.displayName);
    setAbout(prefs?.description);
  }, [prefs]);

  const handleDisplayName = async () => {
    setPrefs((oldPrefs) => ({ ...oldPrefs, displayName: name }));
    const [text, type] = await settingsPost({ ...prefs, displayName: name });
    if (text !== '') {
      alert.show({ text, type });
    }
  };
  const handleInfo = async () => {
    setPrefs((oldPrefs) => ({ ...oldPrefs, description: about }));
    const [text, type] = await settingsPost({ ...prefs, description: about });
    if (text !== '') {
      alert.show({ text, type });
    }
  };

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
          onBlur={() => { handleDisplayName(); }}
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
          onBlur={() => { handleInfo(); }}
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
      <SocialLinksSettings />
    </>
  );
}

export default ProfileInoformation;
