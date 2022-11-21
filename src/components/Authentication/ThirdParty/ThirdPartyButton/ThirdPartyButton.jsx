import { ThirdPartyBtn, ButtonIcon } from './styles';

/**
 * Third Party Button
 *  @component
 * @returns {React.Component} -Third Party Button Styled
 */
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
