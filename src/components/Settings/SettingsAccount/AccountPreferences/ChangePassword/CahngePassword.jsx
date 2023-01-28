import { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';
import { useCookies } from 'react-cookie';
import theme, { fonts } from '../../../../../styles/theme';
import {
  FirstPartyContainer, RedditTextField, RedditLoadingButton,
} from '../../../../Authentication/styles';

// server
import AuthenticationHeader from '../../../../Authentication/AuthenticationHeader/AuthenticationHeader';
// scripts
import { checkPassword, matchPassword } from '../../../../Authentication/authenticationServer';
import { CheckBoxConatiner } from '../../../../Authentication/ResetPassword/styles';

import {
  Contanier, IconClose, AuthenticationBG, AuthenticationBody, AuthenticationConatiner,
} from './styles';
import { changePassword } from './changePasswordServer';
// eslint-disable-next-line no-unused-vars
/**
 * - Cahnge Password pop up
 *  @component
 *   @property {String} oldPassword -  old password of user value
 *  @property {String} password - rewrite new passsword value
 *  @property {String} repassword  - new password value
 *  @return {React.Component} - Body of change password popup
 */
function CahngePassword({ setOpenPass }) {
  const [oldPassword, setOldPassword] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  const [password, setPassword] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  const [repassword, setRePassword] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  // const [Logout, setLogOut] = useState(false);
  const [buttonText, setbuttonText] = useState('set Password');
  const [loading, setLoading] = useState(false);
  const [redirectCaption, setRedirectCaption] = useState(false);
  // const [expiredToken, setExpiredToken] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies, removeCookie] = useCookies(['redditUser']);

  const caption = (
    <>
      Choose a new password here
    </>
  );

  useEffect(() => {

  }, [oldPassword, repassword, password]);
  return (
    <Contanier>

      <IconClose
        aria-label="close"
        onClick={() => { setOpenPass(false); }}
      >
        <CloseIcon />
      </IconClose>

      <AuthenticationConatiner>
        <AuthenticationBG />
        <AuthenticationBody mnwidth="280px" mxwidth="440px" data-testid="resetpassword-test">
          <AuthenticationHeader reddit title="Reset your password" caption={caption} fontSize="14px" />
          <FirstPartyContainer
            noValidate
            onSubmit={(e) => {
              e.preventDefault(); changePassword(
                setLoading,
                oldPassword,
                setOldPassword,
                password,
                setPassword,
                repassword,
                setbuttonText,
                setRedirectCaption,
                removeCookie,
                false,
              );
            }}
          >
            <RedditTextField
              label="Old Password"
              variant="filled"
              required
              value={oldPassword.input}
              InputProps={{
                endAdornment: (
                  oldPassword.icon
                ),
                disableUnderline: true,
              }}
              clr={oldPassword.color}
              onChange={(e) => {
                setOldPassword((prevState) => ({
                  ...prevState,
                  input: e.target.value.trim(),
                }));
                checkPassword(e.target.value.trim(), setOldPassword, undefined);
                // matchPassword(repassword, e.target.value.trim(), setRePassword);
              }}
              helperText={oldPassword.error}

            />
            <RedditTextField
              label="New Password"
              variant="filled"
              required
              value={password.input}
              InputProps={{
                endAdornment: (
                  password.icon
                ),
                disableUnderline: true,
              }}
              clr={password.color}
              onChange={(e) => {
                setPassword((prevState) => ({
                  ...prevState,
                  input: e.target.value.trim(),
                }));
                checkPassword(e.target.value.trim(), setPassword, undefined);
                matchPassword(repassword, e.target.value.trim(), setRePassword);
              }}
              helperText={password.error}
            />
            <RedditTextField
              label="Verify Password"
              variant="filled"
              required
              value={repassword.input}
              InputProps={{
                endAdornment: (
                  repassword.icon
                ),
                disableUnderline: true,
              }}
              clr={repassword.color}
              onChange={(e) => {
                matchPassword(password, e.target.value.trim(), setRePassword);
                setRePassword((prevState) => ({
                  ...prevState,
                  input: e.target.value.trim(),
                }));
              }}
              helperText={repassword.error}

            />
            <CheckBoxConatiner>
              {/* <Checkbox sx={{ padding: '0px 5px 0px 0px' }} onChange={(event) => setLogOut(event.target.checked)} /> */}
              <Typography fontSize="12px" fontWeight="400">
                Changing your password logs you out of all browsers on your device(s).
                {/* {' '} */}
                {/* Checking this box also logs you out of all apps you have authorized. */}
              </Typography>
            </CheckBoxConatiner>
            <RedditLoadingButton type="submit" width="155px" loading={loading} data-testid="set-newpassword-btn-test">
              {buttonText}
            </RedditLoadingButton>
            {redirectCaption
              ? <Typography color="primary" fontSize="12px" fontFamily={fonts['system-ui']} fontWeight="600" margin="20px 0px">you’ve successfully changed your password.You can now log in using your new password</Typography>
              : null}
          </FirstPartyContainer>

        </AuthenticationBody>
      </AuthenticationConatiner>
    </Contanier>

  );
}

export default CahngePassword;
