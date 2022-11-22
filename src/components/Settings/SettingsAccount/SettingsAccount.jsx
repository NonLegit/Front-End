/* eslint-disable react/function-component-definition */
import { Box } from '@mui/system';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useEffect, useState } from 'react';
import SettingsProvider from '../../../contexts/SettingsProvider';
import {
  Header, Button, ContentHeader, Content, ContentSubHeader,
  SettingsPageConranier, SubHeader, AntSwitch,
} from '../styles';
import AccountPreferences from './AccountPreferences/AccountPreferences';
import { DeleteAccount } from './styles';
import useFetch from '../../../hooks/useFetch';
/**
 * - SettingsAccount
 * - Change Email and password in settings page
 *  @component
 *  @property {function} setPrefs set prefs of user
 *  @property {Object} prefs prefs of user
 *  @property {Object} data data from fetch
 */
const SettingsAccount = () => {
  const api = '/users/me/prefs';
  const [data, dataError] = useFetch(api);
  const [prefs, setPrefs] = useState();

  useEffect(() => {
    // console.log(data?.settings.prefs);
    setPrefs(data?.prefs);
    console.log(dataError);
  }, [data, dataError]);
  return (
    <SettingsPageConranier data-testid="account-preferances">
      <Box sx={{ maxWidth: '688px', flex: '1 1 auto' }}>
        <Header>Account settings</Header>
        <SettingsProvider prefs={prefs} setPrefs={setPrefs}>
          <AccountPreferences />
        </SettingsProvider>
        <SubHeader>  CONNECTED ACCOUNTS  </SubHeader>
        <Button>
          <Content>
            <ContentHeader>
              Connected to Google
            </ContentHeader>
            <ContentSubHeader>
              Connect account to log in to Reddit with Google
            </ContentSubHeader>
          </Content>
          <AntSwitch sx={{ color: '#0079D3' }}>
            <Box sx={{ width: 'fit-content', cursor: 'pointer' }}> (disconnect)</Box>
          </AntSwitch>
        </Button>
        <SubHeader> DELETE ACCOUNT  </SubHeader>
        <DeleteAccount>
          <DeleteOutlineOutlinedIcon />
          <Box sx={{ fontSize: '12px' }}>
            {' '}
            <Box sx={{ width: 'fit-content', cursor: 'pointer' }}> DELETE ACCOUNT</Box>
          </Box>
        </DeleteAccount>
      </Box>
    </SettingsPageConranier>
  );
};
export default SettingsAccount;