import { Box } from '@mui/system';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import {
  Header, Content, ContentHeader,
  SettingsPageConranier, SubHeader, ContentSubHeader, Text,
} from '../styles';
import { privacyFetch, blockuser } from './settingsPrivacyServer';
import {
  AddBlock, AddButton, RedditTextField, BlocekConataier, ImageBlock,
  BlocekInfo,
} from './styles';
/**
 * - SettingsPrivacy
 * - Edit block list in Settings page
 *  @component
 */
function SettingsPrivacy() {
  const alert = useAlert();

  const [name, setName] = useState('');
  const [data] = privacyFetch();
  const navigate = useNavigate();
  const actionUSer = async (nameUser, action) => {
    if (nameUser !== '') {
      const [text, type] = await blockuser(nameUser, action);
      if (text !== '') {
      // setMessage(text);
      // setStats(type);
      //  setOpenAlert(true);
        alert.show({ text, type });
      }
    }
  };
  return (
    <SettingsPageConranier data-testid="settings-privacy">
      <Box sx={{ maxWidth: '688px', flex: '1 1 auto' }}>
        <Header>Safety & Privacy</Header>
        <ContentSubHeader sx={{ marginBottom: '32px' }}>Manage how we use data to personalize your Reddit experience, and control how other redditors interact with you.</ContentSubHeader>
        <SubHeader>SAFETY</SubHeader>
        <Text>
          <Content>
            <ContentHeader>
              People You’ve Blocked
            </ContentHeader>
            <ContentSubHeader>
              Blocked people can’t send you chat requests or private messages.
            </ContentSubHeader>
          </Content>
          <AddBlock>
            <RedditTextField
              value={name}
              label="BLOCK NEW USER"
              variant="filled"
              type="text"
              onChange={(e) => { setName(e.currentTarget.value.trim()); }}
            />
            <AddButton active={name.length > 0} onClick={() => { actionUSer(name, 'block_user'); }}>ADD</AddButton>
          </AddBlock>
        </Text>
        {
          data?.map((e) => (

            <BlocekConataier>
              <BlocekInfo onClick={() => { navigate(`/user/${e.userName}`); }}>
                <ImageBlock src={e.profilePicture} />
                { e.userName }
              </BlocekInfo>
              <AddButton active onClick={() => { actionUSer(e.userName, 'unblock_user'); }}>Remove</AddButton>
            </BlocekConataier>
          ))
        }
      </Box>
    </SettingsPageConranier>
  );
}

export default SettingsPrivacy;
