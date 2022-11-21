import { useState } from 'react';
import theme from '../../../../styles/theme/index';
import {
  FirstPartyContainer, RedditTextField, wrongIcon, rightIcon, RedditLoadingButton,
} from '../styles';

function Email({
  onSubmitFn, loading, ispopup, width, buttonText, btnWidth,
}) {
  const [email, setEmail] = useState({
    input: '', color: theme.palette?.neutral.main, icon: null, error: null,
  });

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
    <FirstPartyContainer width={width} onSubmit={(e) => { onSubmitFn(e, email); }} noValidate data-testid="SignUpEmail-test">
      <RedditTextField
        label="Email"
        variant="filled"
        required
        InputProps={{
          endAdornment: (
            email.icon
          ),
          disableUnderline: true,
        }}
        clr={email.color}
        onBlur={() => checkEmail(email, setEmail)}
        onChange={(e) => {
          setEmail((prevState) => ({
            ...prevState,
            input: e.target.value.trim(),
          }));
          checkEmail(e.target.value.trim());
        }}
        helperText={email.error}
        ispopup={ispopup}
      />
      <RedditLoadingButton type="submit" loading={loading} data-testid="email-btn-test" ispopup={ispopup} width={btnWidth}>
        {buttonText}
      </RedditLoadingButton>
    </FirstPartyContainer>

  );
}

export default Email;
