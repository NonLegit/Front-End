import { Box } from '@mui/system';
// eslint-disable-next-line import/no-named-as-default
import BackHome from './style';

/**
 * BackHomeBottun component shows all comments over a post
 *
 * @component BackHomeBottun
 * @property {fundtion} goToTop - return to the top of the page
 * @returns {React.Component} BackHomeBottun
 */
function BackHomeBottun() {
  function goToTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
  return (
    <Box sx={{
      position: 'relative', flex: '1 1 auto',
    }}
    >
      <BackHome
        variant="contained"
        fontSize={15}
        fontWeight="bold"
        onClick={() => goToTop()}
      >
        Back to Top
      </BackHome>
    </Box>
  );
}

export default BackHomeBottun;
