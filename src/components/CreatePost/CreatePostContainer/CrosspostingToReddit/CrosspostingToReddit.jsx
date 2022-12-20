import {
  Box, List, ListItemText, Typography,
} from '@mui/material';
import Icon from './Icon';
import {
  CustomDivider, CustomLink, CustomListItem, CrosspostingToRedditContainer, PostToReddit, UpperContainer,
} from './styles';

function CrosspostingToReddit() {
  const redditRules = [
    'Remember the human',
    'Behave like you would in real life',
    'Look for the original source of content',
    'Search for duplicates before posting',
    'Read the community’s rules',
    'You must join a community to crosspost there',
  ];
  return (
    <>
      <CrosspostingToRedditContainer>
        <UpperContainer>
          <Box
            width={40}
            height={40}
          >
            <Icon />
          </Box>
          <PostToReddit>
            Crossposting  to Reddit
          </PostToReddit>
        </UpperContainer>
        <CustomDivider />
        <List sx={{
          padding: 0,
        }}
        >
          {redditRules.map((rule, index) => (
            <>
              <CustomListItem>
                <ListItemText>
                  {`${index + 1}. ${rule}`}
                </ListItemText>
              </CustomListItem>
              <CustomDivider />
            </>
          ))}
        </List>
      </CrosspostingToRedditContainer>
      <Typography sx={{
        fontSize: 12,
        fontWeight: 400,
        color: '#7c7c7c',
        margin: '11px 50px 10px 2px',
      }}
      >
        Please be mindful of reddit&apos;s
        {' '}
        <CustomLink href="https://www.redditinc.com/policies/content-policy"> content policy</CustomLink>
        {' '}
        and practice good
        {' '}
        <CustomLink href="https://www.reddit.com/wiki/reddiquette/">reddiquette</CustomLink>
        .
      </Typography>
    </>
  );
}

export default CrosspostingToReddit;
