import { Box } from '@mui/system';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import RedditButton from '../../RedditButton/RedditButton';
import { Header, Paragraph, PremiumReddit } from './styles';
/**
 * This component contains info about reddit premium.
 *
 * @component RedditPremium
 * @returns {React.Component}  Information about Premium version of reddit.
 */

function RedditPremium() {
  return (
    <PremiumReddit>
      <Box display="flex" mb={2}>
        <SportsScoreIcon
          sx={{
            fontSize: 40,
            mx: 1,
          }}
          color="secondary"
        />
        <Box display="flex" flexDirection="column">
          <Header>
            Reddit Premium
          </Header>
          <Paragraph>
            The best Reddit experience, with monthly Coins
          </Paragraph>
        </Box>
      </Box>
      <RedditButton variant="contained" color="secondary" padding="4px" fontSize={15} fontWeight="bold">
        try now
      </RedditButton>
    </PremiumReddit>
  );
}

export default RedditPremium;
