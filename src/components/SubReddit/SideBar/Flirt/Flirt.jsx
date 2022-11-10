import { Box } from '@mui/material';
import {
  Button, Container, See, String,
} from './style';
/**
 * Filter section
 * @return {React.Component} - Filter section
 */
function Flirt() {
  return (
    <>
      <Container>
        <String>
          Filter by flair
        </String>
      </Container>
      <Box sx={{ padding: '12px' }}>
        <Box sx={{ paddingBottom: 1, display: 'inline-block' }}>
          <Button backgroundColor="#94e044"><span>Look what I made!</span></Button>
        </Box>
        <Box sx={{ paddingBottom: 1, display: 'inline-block' }}>
          <Button backgroundColor="#0dd3bb"><span>Look what!</span></Button>
        </Box>
        <Box sx={{ paddingBottom: 1, display: 'inline-block' }}>
          <Button backgroundColor="#ff652b">I made!</Button>
        </Box>
        <Box sx={{ paddingBottom: 1, display: 'inline-block' }}>
          <Button backgroundColor="#fff911">Look </Button>
        </Box>
      </Box>
      <See>See more</See>
    </>
  );
}

export default Flirt;
