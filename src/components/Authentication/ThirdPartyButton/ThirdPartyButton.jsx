import { ThirdPartyBtn, ButtonIcon } from './styles';

function ThirdPartyButton({ img, alt, txt }) {
  return (
    <ThirdPartyBtn variant="outlined">
      <ButtonIcon src={img} alt={alt} />
      {txt}
    </ThirdPartyBtn>
  );
}

export default ThirdPartyButton;
