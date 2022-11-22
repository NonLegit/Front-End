import {
  Button, ContentHeader, Content, ContentSubHeader,
  SubHeader, AntSwitch,
} from '../../styles';
import ChangeCountry from './ChangeCountry/ChangeCountry';
import ChangeGender from './ChangeGender/ChangeGender';
import { ChangeButton } from './styles';
/**
 * - AccountPreferences
 * - Change Email and password in settings page
 *  @component
 *
 */
function AccountPreferences() {
  return (
    <>
      <SubHeader data-testid="account-preferances">ACCOUNT PREFERENCES</SubHeader>
      <Button>
        <Content>
          <ContentHeader>
            Email address
          </ContentHeader>
          <ContentSubHeader>
            eslamashraf.12342@gmail.com
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
