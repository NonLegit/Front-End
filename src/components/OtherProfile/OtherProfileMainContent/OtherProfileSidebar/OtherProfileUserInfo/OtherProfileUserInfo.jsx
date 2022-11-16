import { Box, CardMedia, Typography } from '@mui/material';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CakeIcon from '@mui/icons-material/Cake';
import { useContext, useEffect, useState } from 'react';
import {
  WideButton, ProfilePic, ProfileBox,
  UserInfoBox, UserName, InfoBox,
  EntityBox, MoreOptions, OptionsButtons, UserInfoButton,
} from './styles';
import { UserContext } from '../../../../../contexts/UserProvider';
import { UserInfoContext } from '../../../../../contexts/UserInfoProvider';

/**
 * UserInfo Box in sidebar containing all info of a user
 *
 * @component OtherProfileUserInfo
 * @returns {React.Component} OtherProfileUserInfo
 */
function OtherProfileUserInfo() {
  const [karma, setKarma] = useState();
  const [cake, setCake] = useState();

  const { username } = useContext(UserContext);
  const { info } = useContext(UserInfoContext);

  // to be fetched here
  useEffect(() => {
    setKarma(info.postKarma);
    const month = info.createdAt?.split('-')[1];
    const date = new Date();
    date.setMonth(month - 1);

    setCake(`${date.toLocaleString('en-US', {
      month: 'long',
    })} ${info.createdAt?.split('-')[2]}, ${info.createdAt?.split('-')[0]}`);
  }, [info]);

  const [showList, setShowList] = useState(false);
  const handleClickList = () => {
    setShowList((prev) => !prev);
  };

  const [follow, setFollow] = useState(true);
  const handleClickFollow = () => {
    setFollow((prev) => !prev);
  };

  return (
    <UserInfoBox>
      <CardMedia
        component="img"
        height="94"
        image="https://styles.redditmedia.com/t5_75eaom/styles/profileBanner_rml44oyq8ey91.jpeg?width=1280&height=384&crop=1280:384,smart&s=4a75a7f2d0376de5633d8c52db59cc40c6a3be3c"
        alt="cover image"
        data-testid="cover-photo"
      />

      <ProfileBox>
        <Box sx={{ display: 'flex' }}>
          <Box>
            <ProfilePic src="https://styles.redditmedia.com/t5_75eaom/styles/profileIcon_3f5f41637ms91.jpg?width=256&height=256&crop=256:256,smart&s=90b18e5fd7a10cd089f67d62b9b89ee2b3fbbb21" alt="user photo" />
          </Box>
        </Box>
        <UserName variant="caption">
          u/
          {username}
        </UserName>
        <br />
        <WideButton variant="contained" color="primary" endIcon={<ArrowForwardIosOutlinedIcon />}>
          Create Your Own Avatar
        </WideButton>
        <InfoBox>
          <EntityBox>
            <Typography variant="body2" sx={{ marginBottom: '5px' }}>Karma</Typography>
            <Box sx={{ display: 'flex' }}>
              <FilterVintageIcon fontSize="string" color="primary" sx={{ marginRight: '4px' }} />
              <Typography variant="caption" sx={{ color: '#7c7c7c' }}>{karma}</Typography>
            </Box>
          </EntityBox>
          <EntityBox>
            <Typography variant="body2" sx={{ marginBottom: '5px' }}>Cake Day</Typography>
            <Box sx={{ display: 'flex' }}>
              <CakeIcon fontSize="string" color="primary" sx={{ marginRight: '4px' }} />
              <Typography variant="caption" sx={{ color: '#7c7c7c' }}>{cake}</Typography>
            </Box>
          </EntityBox>
        </InfoBox>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          {follow ? <UserInfoButton variant="outlined" onClick={() => { handleClickFollow(); }}>Unfollow</UserInfoButton> : <UserInfoButton variant="contained" onClick={() => { handleClickFollow(); }}>Follow</UserInfoButton>}
          <UserInfoButton variant="contained">Chat</UserInfoButton>
        </Box>
        {showList
            && (
            <>
              <OptionsButtons data-testid="option">Send Message</OptionsButtons>
              <OptionsButtons>Block User</OptionsButtons>
              <OptionsButtons>Get Them Help and Support</OptionsButtons>
              <OptionsButtons>Report User</OptionsButtons>
              <OptionsButtons>Add to Custom Feed</OptionsButtons>
              <MoreOptions onClick={() => { handleClickList(); }}>Fewer options</MoreOptions>
            </>
            )}
        {!showList
            && <MoreOptions data-testid="show-more" onClick={() => { handleClickList(); }}>More options</MoreOptions>}
      </ProfileBox>

    </UserInfoBox>
  );
}

export default OtherProfileUserInfo;
