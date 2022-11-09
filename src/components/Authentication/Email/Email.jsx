import { useState } from 'react';
import theme from '../../../styles/theme';
import {
  FirstPartyContainer, RedditTextField, wrongIcon, rightIcon, RedditLoadingButton,
} from '../styles';

function Email({
  onSubmitFn, loading, isPopUp, width, buttonText, btnWidth,
}) {
  const [email, setEmail] = useState({
    input: '', color: theme.palette.neutral.main, icon: null, error: null,
  });

  const checkEmail = () => {
    if (!/\S+@\S+\.\S+/.test(email.input)) {
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
    console.log('Email in check email', email);
  };

  return (
    <FirstPartyContainer width={width} onSubmit={(e) => onSubmitFn(e, email)} noValidate>
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
          checkEmail(email, setEmail);
        }}
        helperText={email.error}
        isPopUp={isPopUp}
      />
      <RedditLoadingButton type="submit" loading={loading} isPopUp={isPopUp} width={btnWidth}>
        {buttonText}
      </RedditLoadingButton>
    </FirstPartyContainer>

  );
}

export default Email;
