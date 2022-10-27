import { AuthHeaderConatiner, AuthTitle, AuthTitleCaption } from './styles';

function AuthenticationHeader({ reddit, title, caption }) {
  return (
    <AuthHeaderConatiner>
      {reddit ? <img src="https://www.redditstatic.com/accountmanager/18e257d5fdea817c0f12cccf8867d930.svg" alt="Reddit" width="40px" /> : null}
      <AuthTitle>{title}</AuthTitle>
      <AuthTitleCaption>{caption}</AuthTitleCaption>
    </AuthHeaderConatiner>
  );
}

export default AuthenticationHeader;
