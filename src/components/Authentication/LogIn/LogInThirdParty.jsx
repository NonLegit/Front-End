import { ThirdPartyContainer, ThirdPartyButton, ButtonIcon } from '../AuthenticationConatiners/styles';
import Google from '../../../assets/images/google.png';
import Facebook from '../../../assets/images/facebook.png';

// My be Same as SignUp If so reuse the Signup Thirs Party Compoonenet
function LogInThirdParty() {
  return (
    <ThirdPartyContainer width="280px">
      <ThirdPartyButton variant="outlined">
        <ButtonIcon src={Google} alt="Google" />
        Continue with Google
      </ThirdPartyButton>
      <ThirdPartyButton variant="outlined">
        <ButtonIcon src={Facebook} alt="Facebook" />
        Continue with Facebook
      </ThirdPartyButton>
    </ThirdPartyContainer>
  );
}

export default LogInThirdParty;
