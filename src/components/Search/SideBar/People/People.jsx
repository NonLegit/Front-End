import { Box } from '@mui/material';
import Suggestions from './Suggestions';
import {
  PeopleString, Suggestion,
} from './style';

function People() {
  return (
    <Box sx={{ height: 234, width: 310 }}>
      <PeopleString>People</PeopleString>
      <Suggestion>
        <Suggestions />
        <Suggestions />
        <Suggestions />
      </Suggestion>
    </Box>
  );
}
export default People;
