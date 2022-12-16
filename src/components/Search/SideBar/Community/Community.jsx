import { Box } from '@mui/material';
import Suggestions from './Suggestions';
import {
  CommunityString, Suggestion, ShowMore,
} from './style';

function Community() {
  return (
    <Box>
      <CommunityString>Communities</CommunityString>
      <Suggestion>
        <Suggestions />
        <Suggestions />
        <Suggestions />
        <Suggestions />
      </Suggestion>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <ShowMore>See More Communities</ShowMore>
      </Box>
    </Box>
  );
}
export default Community;
