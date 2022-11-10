import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import theme from '../../../styles/theme';

import {
  FirstPartyContainer, RedditTextField, wrongIcon, rightIcon, RedditLoadingButton,
} from '../styles';

function Email({
  onSubmitFn, loading, width, buttonText, fieldText, btnWidth, recaptcha, setVerified, defaultEmail,
}) {
  const [email, setEmail] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });
  const [recaptchaState, setrecaptchaState] = useState(false);

  const checkEmail = (emailInput) => {
    if (!/\S+@\S+\.\S+/.test(emailInput)) {
      setEmail((prevState) => ({
        ...prevState,
        color: theme.palette.error.main,
        icon: wrongIcon,
        error: 'Please fix your email to continue',
      }));
    } else {
      setEmail((prevState) => ({
        ...prevState,
        color: theme.palette.primary.main,
        icon: rightIcon,
        error: null,
      }));
    }
    // console.log('Email in check email', email);
  };

  return (
    <FirstPartyContainer width={width} onSubmit={(e) => { e.preventDefault(); onSubmitFn(email); }} noValidate data-testid="SignUpEmail-test">
      <RedditTextField
        label={fieldText}
        variant="filled"
        required
        InputProps={{
          endAdornment: (
            email.icon
          ),
          disableUnderline: true,
        }}
        clr={email.color}
        onBlur={() => { if (recaptcha) setrecaptchaState(true); }}
        onChange={(e) => {
          setEmail((prevState) => ({
            ...prevState,
            input: e.target.value.trim(),
          }));
          checkEmail(e.target.value.trim());
        }}
        helperText={email.error}
        defaultValue={defaultEmail}
      />
      <RedditLoadingButton type="submit" loading={loading} data-testid="email-btn-test" width={btnWidth}>
        {buttonText}
      </RedditLoadingButton>
      {recaptchaState ? (
        <ReCAPTCHA
          sitekey="6LdjH-kiAAAAANFbV6SUnCjXNK3Z0h7q7j4IFf7i"
          onExpired={() => setVerified(false)}
          onChange={() => setVerified(true)}
          size="normal"
          sx={{ width: '320px' }}
        />
      )
        : null}
    </FirstPartyContainer>

  );
}

export default Email;
