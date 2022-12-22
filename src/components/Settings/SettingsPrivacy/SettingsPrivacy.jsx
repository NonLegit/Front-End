import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
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
 * - Privacy Settings
 * - block and unblock usres and see list of blocked users
 *  @component
 *  @property {String} name - name of user will blocked
 *  @property {function} data  - handle NSFW when user click on the button
 *  @ {Array} blocked -  Array of blocked users
 *  @return {React.Component} - Body of privacy settings page
 */
function SettingsPrivacy() {
  const alert = useAlert();

  const [name, setName] = useState('');
  const [blocked, setBloked] = useState([]);
  const [data] = privacyFetch();
  const navigate = useNavigate();

  useEffect(() => {
    setBloked(data);
    console.log(data);
  }, [data]);
  const actionUSer = async (nameUser, action) => {
    if (nameUser !== '') {
      const [text, type] = await blockuser(nameUser, action);
      if (text !== 'Operation done successfully') {
      // setMessage(text);
      // setStats(type);
      //  setOpenAlert(true);
        if (action === 'block_user') {
          let list = blocked;
          list = list.concat({ profilePicture: 'https://i.pinimg.com/474x/eb/c8/82/ebc882ee454681ad38fcf9380342bc03.jpg', userName: nameUser });
          console.log(list);
          setBloked(list);
        } else {
          let list = blocked;
          list = list.filter((e) => (e.userName !== nameUser));
          setBloked(list);
        }
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
          blocked?.map((e) => (

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
