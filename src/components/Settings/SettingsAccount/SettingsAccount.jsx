import { Box } from '@mui/system';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {
  Header, Button, ContentHeader, Content, ContentSubHeader,
  SettingsPageConranier, SubHeader, AntSwitch,
} from '../styles';
import AccountPreferences from './AccountPreferences/AccountPreferences';
import { DeleteAccount } from './styles';

function SettingsAccount() {
  return (
    <SettingsPageConranier>
      <Box sx={{ maxWidth: '688px', flex: '1 1 auto' }}>
        <Header>Account settings</Header>
        <AccountPreferences />
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
}

export default SettingsAccount;
