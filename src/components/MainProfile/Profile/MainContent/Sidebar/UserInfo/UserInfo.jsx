import { Box, CardMedia, Typography } from '@mui/material';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import AddIcon from '@mui/icons-material/Add';
import { useContext, useEffect, useState } from 'react';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';
import {
  AddPhoto, WideButton, EngineIcon, ProfilePic, ProfileBox,
  UserInfoBox, UserName, InfoBox,
  EntityBox, FollowersArrow, AddSocialLink, AddPost, MoreOptions, OptionsButtons,
} from './styles';
import { UserContext } from '../../../../../../contexts/UserProvider';
import { UserInfoContext } from '../../../../../../contexts/UserInfoProvider';
/**
 * UserInfo Box in sidebar containing all info of a user
 *
 * @component UserInfo
 * @returns {React.Component} UserInfo
 */
function UserInfo() {
  const [postKarma, setPostKarma] = useState();
  const [commentKarma, setCommentKarma] = useState();
  const [cake, setCake] = useState();
  const [followers, setFollowers] = useState();
  const [profilePic, setProfilePic] = useState();
  const [coverPic, setCoverPic] = useState();

  const { username } = useContext(UserContext);
  const { info, statusCode } = useContext(UserInfoContext);

  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
    setPostKarma(info?.postKarma);
    setCommentKarma(info?.commentKarma);
    setFollowers(info?.followersCount);
    setCake(info?.createdAt);
    setProfilePic(info?.profilePicture);
    setCoverPic(info?.profileBackground);
  }, [info, statusCode]);

  const [showList, setShowList] = useState(false);
  const handleClickList = () => {
    setShowList((prev) => !prev);
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
      <AddPhoto sx={{
        border: (theme) => `thin solid ${theme.palette.primary.main}`,
        transform: 'translate(730% ,-130%)',
      }}
      >
        <AddAPhotoOutlinedIcon color="primary" fontSize="small" disabled />
      </AddPhoto>

      <ProfileBox>
        <Box sx={{ display: 'flex' }}>
          <Box>
            <ProfilePic src={profilePic} alt="user photo" />
            <AddPhoto sx={{
              border: (theme) => `thin solid ${theme.palette.primary.main}`,
              position: 'absolute',
              transform: 'translate(180% ,-100%)',
            }}
            >
              <AddAPhotoOutlinedIcon color="primary" fontSize="small" />
            </AddPhoto>

          </Box>
          <Link to="/settings">
            <EngineIcon color="primary" />
          </Link>
        </Box>
        <UserName variant="caption">
          u/
          {username}
        </UserName>
        <br />
        <WideButton variant="contained" color="primary" endIcon={<ArrowForwardIosOutlinedIcon />}>
          Create Avatar
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
              <Typography variant="caption" sx={{ color: '#7c7c7c' }}>
                {moment(cake, 'YYYY-MM-DD-HH-mm').add(1, 'days').utc().format('MMMM DD, YYYY')}
              </Typography>
            </Box>
          </EntityBox>
          <EntityBox>
            <Typography variant="body2" sx={{ marginBottom: '5px' }}>Followers</Typography>
            <Box sx={{ display: 'flex' }}>
              <PersonIcon fontSize="string" color="primary" sx={{ marginRight: '4px' }} />
              <Typography variant="caption" sx={{ color: '#7c7c7c' }}>{followers}</Typography>
              <FollowersArrow fontSize="string" color="disabled" />
            </Box>
          </EntityBox>
        </InfoBox>
        <AddSocialLink startIcon={<AddIcon />} variant="contained">Add social link</AddSocialLink>
        <br />
        <AddPost variant="contained">Add Post</AddPost>
        {showList
          ? (
            <>
              <OptionsButtons data-testid="option">Profile moderation</OptionsButtons>
              <OptionsButtons>Add to Custom Feed</OptionsButtons>
              <OptionsButtons>Invite someone to chat</OptionsButtons>
              <MoreOptions onClick={() => { handleClickList(); }}>Fewer options</MoreOptions>
            </>
          ) : <MoreOptions data-testid="show-more" onClick={() => { handleClickList(); }}>More options</MoreOptions>}
      </ProfileBox>

    </UserInfoBox>
  );
}

export default UserInfo;