import { Avatar, Typography, Box } from '@mui/material';
import {
  StyledCommunityContainer, StyledCommunity, StyledDiscription, VisitButton,
} from './styles';
import JoinButton from '../../JoinButton/JoinButton';

function Community(props) {
  const {
    communityName, communityPicture, numOfMembers, description,
  } = props;
  return (
    <StyledCommunityContainer>
      <StyledCommunity>
        <Avatar sx={{ marginRight: '12px' }} src={communityPicture} />
        <StyledDiscription>
          <Typography
            color="#1C1C1C"
            fontSize="12px"
            fontWeight={600}
            fontFamily="Sans-Serif"
          >
            r/
            {communityName}
          </Typography>
          <Typography
            color="#7C7C7C"
            fontSize="12px"
            fontFamily="Sans-Serif"
          >
            {numOfMembers}
            members
          </Typography>
          <Typography
            color="#7C7C7C"
            fontSize="12px"
            fontFamily="Sans-Serif"
          >
            {description}
          </Typography>
          <VisitButton
            disableRipple
            disableFocusRipple
          >
            visit
          </VisitButton>
        </StyledDiscription>
        <Box display="flex" justifyContent="flex-end" flexGrow={1} alignItems="flex-start">
          <JoinButton subreddit={communityName} />
        </Box>
      </StyledCommunity>
    </StyledCommunityContainer>
  );
}

export default Community;
