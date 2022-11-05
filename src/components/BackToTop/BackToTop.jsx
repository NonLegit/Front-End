import { BackToTopButton, BackToTopContainer } from './styles';

function BackToTop() {
  // console.log(window.innerHeight);
  const handelClick = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <BackToTopContainer>
      <BackToTopButton variant="contained" onClick={handelClick}>
        back to top
      </BackToTopButton>
    </BackToTopContainer>
  );
}

export default BackToTop;
