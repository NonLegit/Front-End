import { ThirdPartyBtn, ButtonIcon } from './styles';

function ThirdPartyButton({
  img, alt, txt, onClick,
}) {
  return (
    <ThirdPartyBtn variant="outlined" onClick={onClick}>
      <ButtonIcon src={img} alt={alt} />
      {txt}
    </ThirdPartyBtn>
  );
}

export default ThirdPartyButton;
