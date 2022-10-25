import { ThirdPartyContainer, ThirdPartyButton, ButtonIcon } from '../../AuthenticationConatiners/styles';
import Google from '../../../../assets/images/google.png';
import Facebook from '../../../../assets/images/facebook.png';

function SignUpThirdParty() {
  /* Back End API to signup */
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

export default SignUpThirdParty;
