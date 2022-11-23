// eslint-disable-next-line import/no-named-as-default
import BackHome from './style';

function BackHomeBottun() {
  function goToTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
  return (
    <BackHome
      variant="contained"
      fontSize={15}
      fontWeight="bold"
      onClick={() => goToTop()}
    >
      Back to Top
    </BackHome>
  );
}

export default BackHomeBottun;
