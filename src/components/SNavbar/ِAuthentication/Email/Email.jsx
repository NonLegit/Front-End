import { useState } from 'react';

// Compoenets
import ReCAPTCHA from 'react-google-recaptcha';

// styles
import {
  FirstPartyContainer, RedditTextField, RedditLoadingButton,
} from '../styles';

// scripts
import { checkEmail } from '../../../Authentication/scripts';

function Email({
  email, setEmail, onSubmitFn, loading, width, buttonText, fieldText, btnWidth, recaptcha, setVerified, disabled, ispopup,
}) {
  const [defaultEmailValue, setdefaultEmailValue] = useState(email?.input);
  const [recaptchaState, setrecaptchaState] = useState(false);

  return (
    // right value emailon submit in case that we have made any change in input field
    // in case no change the value there is wrong :) but the view here is true
    <FirstPartyContainer width={width} onSubmit={(e) => { e.preventDefault(); checkEmail(email.input, setEmail); onSubmitFn(); }} noValidate>
      <RedditTextField
        label={fieldText}
        variant="filled"
        required
        InputProps={{
          endAdornment: (
            email?.icon
          ),
          disableUnderline: true,
        }}
        clr={email?.color}
        onBlur={() => { if (recaptcha) setrecaptchaState(true); }}
        onChange={(e) => {
          if (recaptcha) setrecaptchaState(true);
          setEmail((prevState) => ({
            ...prevState,
            input: e.target.value.trim(),
          }));
          checkEmail(e.target.value.trim(), setEmail);
          setdefaultEmailValue(e.target.value.trim());
        }}
        helperText={email?.error}
        value={defaultEmailValue || ''}
        ispopup={ispopup}
      />
      <RedditLoadingButton type="submit" loading={loading} width={btnWidth} disabled={disabled}>
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
