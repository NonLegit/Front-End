import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import {
  ContentSubHeader, ContentHeader, Content, Text,
} from '../../styles';
import {
  DisplayName, About, AddSocialLinks,
} from './styles';

function ProfileInoformation() {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
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
        <DisplayName value={name} maxLength={30} onChange={(e) => { setName(e.target.value); }} />
        <ContentSubHeader sx={{ color: (30 - name.length === 0) ? 'red' : '#7c7c7c' }}>
          {30 - name.length}
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
        <About value={about} maxLength={200} onChange={(e) => { setAbout(e.target.value); }} />
        <ContentSubHeader sx={{ color: (200 - about.length === 0) ? 'red' : '#7c7c7c' }}>
          {200 - about.length}
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
