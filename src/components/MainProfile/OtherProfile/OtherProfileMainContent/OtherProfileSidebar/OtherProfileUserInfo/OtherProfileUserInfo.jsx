import { Box, CardMedia, Typography } from '@mui/material';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CakeIcon from '@mui/icons-material/Cake';
import { useEffect, useState } from 'react';
import moment from 'moment/moment';
import { useParams } from 'react-router-dom';
import UserInfoServer from '../../../../mainProfileServer';
import {
  WideButton, ProfilePic, ProfileBox,
  UserInfoBox, UserName, InfoBox,
  EntityBox, MoreOptions, OptionsButtons, UserInfoButton,
} from './styles';

/**
 * UserInfo Box in sidebar containing all info of a user
 *
 * @component OtherProfileUserInfo
 * @returns {React.Component} OtherProfileUserInfo
 */
function OtherProfileUserInfo() {
  const [postKarma, setPostKarma] = useState();
  const [commentKarma, setCommentKarma] = useState();
  const [cake, setCake] = useState();
  const [profilePic, setProfilePic] = useState();
  const [coverPic, setCoverPic] = useState();

  const { username } = useParams();
  const [info, statusCode] = UserInfoServer(username);

  useEffect(() => {
    setPostKarma(info?.postKarma);
    setCommentKarma(info?.commentKarma);
    setCake(info?.createdAt);
    setProfilePic(info?.profilePicture);
    setCoverPic(info?.profileBackground);
    console.log(info?.profilePicture);
  }, [info, statusCode]);

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
        image={coverPic}
        alt="cover image"
        data-testid="cover-photo"
      />

      <ProfileBox>
        <Box sx={{ display: 'flex' }}>
          <Box>
            <ProfilePic src={profilePic} alt="user photo" />
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
              <Typography variant="caption" sx={{ color: '#7c7c7c' }}>{postKarma + commentKarma }</Typography>
            </Box>
          </EntityBox>
          <EntityBox>
            <Typography variant="body2" sx={{ marginBottom: '5px' }}>Cake Day</Typography>
            <Box sx={{ display: 'flex' }}>
              <CakeIcon fontSize="string" color="primary" sx={{ marginRight: '4px' }} />
              <Typography variant="caption" sx={{ color: '#7c7c7c' }}>{moment(cake, 'YYYY-MM-DD-HH-mm').add(1, 'days').utc().format('MMMM DD, YYYY')}</Typography>
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
