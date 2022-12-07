import { useCookies } from 'react-cookie';
import {
  Button, ContentHeader, Content, ContentSubHeader,
  SubHeader, AntSwitch,
} from '../../styles';
import ChangeCountry from './ChangeCountry/ChangeCountry';
import ChangeGender from './ChangeGender/ChangeGender';
import { ChangeButton } from './styles';
import { redditCookie } from '../../../Authentication/authenticationServer';

/**
 * - AccountPreferences
 * - Change Email and password in settings page
 *  @component
 *
 */
function AccountPreferences() {
  const [cookies, setCookies] = useCookies(['redditUser']);

  redditCookie(setCookies);
  return (
    <>
      <SubHeader data-testid="account-preferances">ACCOUNT PREFERENCES</SubHeader>
      <Button>
        <Content>
          <ContentHeader>
            Email address
          </ContentHeader>
          <ContentSubHeader>
            {cookies.redditUser?.email}
          </ContentSubHeader>
        </Content>
        <AntSwitch>
          <ChangeButton>Change</ChangeButton>
        </AntSwitch>
      </Button>
      <Button>
        <Content>
          <ContentHeader>
            Change password
          </ContentHeader>
          <ContentSubHeader>
            Password must be at least 8 characters long
          </ContentSubHeader>
        </Content>
        <AntSwitch>
          <ChangeButton>Change</ChangeButton>
        </AntSwitch>
      </Button>
      <ChangeGender />
      <ChangeCountry />
    </>
  );
}

export default AccountPreferences;
