import { BackToTopButton, BackToTopContainer } from './styles';
/**
 * This component is the back to top button
 *
 * @component BackToTop
 * @returns {React.Component} back to top button
 */

function BackToTop() {
  const handelClick = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <BackToTopContainer>
      <BackToTopButton
        variant="contained"
        onClick={handelClick}
        data-testid="back to top button"
      >
        back to top
      </BackToTopButton>
    </BackToTopContainer>
  );
}

export default BackToTop;
