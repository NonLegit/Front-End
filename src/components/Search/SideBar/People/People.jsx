import { Box } from '@mui/material';
import Suggestions from './Suggestions';
import {
  PeopleString, ShowMore, Suggestion,
} from './style';

function People() {
  return (
    <Box sx={{ height: 284, width: 310 }}>
      <PeopleString>People</PeopleString>
      <Suggestion>
        <Suggestions />
        <Suggestions />
        <Suggestions />
      </Suggestion>
      <Box sx={{ display: 'flex', justifyContent: 'cenetr' }}>
        <ShowMore>See More Communities</ShowMore>
      </Box>

    </Box>
  );
}
export default People;
