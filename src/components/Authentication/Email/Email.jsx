import { useState } from 'react';

// Compoenets
import ReCAPTCHA from 'react-google-recaptcha';

// styles
import {
  FirstPartyContainer, RedditTextField, RedditLoadingButton,
} from '../styles';

// scripts
import { checkEmail } from '../scripts';

/**
 * Email Compoenet with ReCAPTCHA if required
 *
 * @component
 * @property {object} --email email Taken from input field
 * @property {function} --setEmail set email object
 * @property {function} --onSubmitFn On Submit form
 * @property {boolean} --loading loading prop ofr RedditLoadingButton
 * @property {string} --width width of the form
 * @property {string} --buttonText text on the Submit button
 * @property {string} --fieldText text on the input field
 * @property {string} --btnWidth submit button width
 * @property {bool} --recaptcha if we ReCAPTCHA is required on not
 * @property {function} --setVerified to set that recaptcha is verified
 * @property {boolean} --disabled to disabled prop ofr RedditLoadingButton
 * @returns {React.Component} Email Form
 */
function Email({
  email, setEmail, onSubmitFn, loading, width, buttonText, fieldText, btnWidth, recaptcha, setVerified, disabled,
}) {
  const [defaultEmailValue, setdefaultEmailValue] = useState(email?.input);
  const [recaptchaState, setrecaptchaState] = useState(false);

  return (
    // right value emailon submit in case that we have made any change in input field
    // in case no change the value there is wrong :) but the view here is true
    <FirstPartyContainer width={width} onSubmit={(e) => { e.preventDefault(); checkEmail(email.input, setEmail); onSubmitFn(); }} noValidate data-testid="SignUpEmail-test">
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
          setEmail((prevState) => ({
            ...prevState,
            input: e.target.value.trim(),
          }));
          checkEmail(e.target.value.trim(), setEmail);
          setdefaultEmailValue(e.target.value.trim());
        }}
        helperText={email?.error}
        value={defaultEmailValue || ''}
      />
      <RedditLoadingButton type="submit" loading={loading} data-testid="email-btn-test" width={btnWidth} disabled={disabled}>
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
