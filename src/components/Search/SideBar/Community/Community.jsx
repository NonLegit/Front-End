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
        <ShowMore>See More Communities</ShowMore>
      </Suggestion>
    </Box>
  );
}
export default Community;
