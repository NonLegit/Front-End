import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import {
  Button, ContentHeader, Content, ContentSubHeader,
  SubHeader, AntSwitch,
} from '../../styles';
import ChangeCountry from './ChangeCountry/ChangeCountry';
import ChangeGender from './ChangeGender/ChangeGender';
import { ChangeButton, BootstrapDialog } from './styles';
import { redditCookie } from '../../../Authentication/authenticationServer';
import CahngePassword from './ChangePassword/CahngePassword';
import CahngeEmail from './ChangeEmail/ChangeEmail';
/**
 * - AccountPreferences
 * - Change Email and password in settings page
 *  @component
 *
 */
function AccountPreferences() {
  const [cookies, setCookies] = useCookies(['redditUser']);
  const [openPass, setOpenPass] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  useEffect(() => {
    redditCookie(setCookies);
  }, []);

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
          <ChangeButton onClick={() => { setOpenEmail(true); }}>Change</ChangeButton>
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
          <ChangeButton onClick={() => { setOpenPass(true); }}>Change</ChangeButton>
        </AntSwitch>
      </Button>
      <BootstrapDialog
        onClose={(event, reason) => {
          if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
            setOpenPass(false);
          }
        }}
        aria-labelledby="customized-dialog-title"
        open={openEmail}
        keepMounted
      >
        <CahngeEmail
          setOpenEmail={setOpenEmail}
        />
      </BootstrapDialog>
      <BootstrapDialog
        onClose={(event, reason) => {
          if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
            setOpenPass(false);
          }
        }}
        aria-labelledby="customized-dialog-title"
        open={openPass}
        keepMounted
      >
        <CahngePassword
          setOpenPass={setOpenPass}
        />
      </BootstrapDialog>
      <ChangeGender />
      <ChangeCountry />

    </>
  );
}

export default AccountPreferences;
