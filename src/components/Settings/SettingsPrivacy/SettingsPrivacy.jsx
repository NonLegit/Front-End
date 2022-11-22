import { Box } from '@mui/system';
import {
  Header, Content, ContentHeader,
  SettingsPageConranier, SubHeader, ContentSubHeader, Text,
} from '../styles';
import { AddBlock, AddButton, RedditTextField } from './styles';
/**
 * - SettingsPrivacy
 * - Edit block list in Settings page
 *  @component
 */
function SettingsPrivacy() {
  return (
    <SettingsPageConranier>
      <Box sx={{ maxWidth: '688px', flex: '1 1 auto' }}>
        <Header>Safety & Privacy</Header>
        <ContentSubHeader sx={{ marginBottom: '32px' }}>Manage how we use data to personalize your Reddit experience, and control how other redditors interact with you.</ContentSubHeader>
        <SubHeader>SAFETY</SubHeader>
        <Text>
          <Content>
            <ContentHeader>
              People You’ve Blocked
            </ContentHeader>
            <ContentSubHeader>
              Blocked people can’t send you chat requests or private messages.
            </ContentSubHeader>
          </Content>
          <AddBlock>
            <RedditTextField
              label="BLOCK NEW USER"
              variant="filled"
              type="text"
            />
            <AddButton>ADD</AddButton>
          </AddBlock>
        </Text>
      </Box>
    </SettingsPageConranier>
  );
}

export default SettingsPrivacy;
