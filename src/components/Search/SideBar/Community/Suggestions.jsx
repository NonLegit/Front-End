import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import {
  TextP, Text, TextContainer, OneSuggeest, Btn,
} from './style';

function Suggestions() {
  return (
    <OneSuggeest>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <TextContainer>
        <Text>
          r/HistoryPorn
        </Text>
        <TextP>
          3.3m Members
        </TextP>
      </TextContainer>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
        <Btn variant="outlined">Join</Btn>
      </Stack>
    </OneSuggeest>
  );
}
export default Suggestions;
