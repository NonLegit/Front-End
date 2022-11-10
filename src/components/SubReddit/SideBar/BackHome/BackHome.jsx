// eslint-disable-next-line import/no-named-as-default
import BackHome from './style';
/**
 * function to handle in click back to to of page
 * @returns top of the page
 */
function BackHomeBottun() {
  function goToTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
  /**
 * button on click on it back to top of bage
 * @return {React.Component} - button
 */
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
