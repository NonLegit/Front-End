import { Box, CardMedia, Typography } from '@mui/material';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import AddIcon from '@mui/icons-material/Add';
import {
  useEffect, useState,
} from 'react';
import moment from 'moment/moment';
import { Link, useNavigate } from 'react-router-dom';
import {
  AddPhoto, WideButton, EngineIcon, ProfilePic, ProfileBox,
  UserInfoBox, UserName, InfoBox,
  EntityBox, FollowersArrow, AddSocialLink, AddPost, MoreOptions, OptionsButtons, BootstrapDialog, LinkTo,
} from './styles';
import userInfoServer from './userInfoServer';
import SocialLinks from '../../../../../SocialLinks/SocialLinks';
import { PlatformIcon, Text } from '../../../../../SocialLinks/styles';
/**
 * UserInfo Box in sidebar containing all info of a user
 *
 * @component UserInfo
 * @returns {React.Component} UserInfo
 */
function UserInfo({ username }) {
  const [displayName, setDisplayName] = useState();
  const [about, setAbout] = useState();
  const [postKarma, setPostKarma] = useState();
  const [commentKarma, setCommentKarma] = useState();
  const [cake, setCake] = useState();
  const [followers, setFollowers] = useState();
  const [profilePic, setProfilePic] = useState();
  const [coverPic, setCoverPic] = useState();
  const [socialLinks, setSocialLinks] = useState([]);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const [info] = userInfoServer();
  useEffect(() => {
    setDisplayName(info?.displayName);
    setAbout(info?.description);
    setPostKarma(info?.postKarma);
    setCommentKarma(info?.commentKarma);
    setFollowers(info?.followersCount);
    setCake(info?.createdAt);
    setProfilePic(info?.profilePicture);
    setCoverPic(info?.profileBackground);
    setSocialLinks(info?.socialLinks);
  }, [info]);

  const [showList, setShowList] = useState(false);
  const handleClickList = () => {
    setShowList((prev) => !prev);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleFollowes = () => {
    navigate(`/user/${username}/followers`);
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
        <UserName variant="string">
          {displayName}
        </UserName>
        <br />
        <UserName variant="caption">
          u/
          {username}
        </UserName>
        <br />
        <WideButton variant="contained" color="primary" endIcon={<ArrowForwardIosOutlinedIcon />}>
          Create Avatar
        </WideButton>
        <UserName variant="body2">
          {about}
        </UserName>
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
          {followers > 0 && (
          <EntityBox sx={{ cursor: 'pointer', maxWidth: 100 }} onClick={handleFollowes}>
            <Typography variant="body2" sx={{ marginBottom: '5px' }}>Followers</Typography>
            <Box sx={{ display: 'flex' }}>
              <PersonIcon fontSize="string" color="primary" sx={{ marginRight: '4px' }} />
              <Typography variant="caption" sx={{ color: '#7c7c7c' }}>{followers}</Typography>
              <FollowersArrow fontSize="string" color="disabled" />
            </Box>
          </EntityBox>
          )}
        </InfoBox>

        {/* social link part */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {socialLinks?.map((link, index) => (
            <LinkTo href={`${link?.userLink}`} key={`${index + 0}`} target="_blank">
              <Text key={`${index + 0}`}>
                <PlatformIcon src={link?.social?.icon} />
                {link?.displayText}
              </Text>
            </LinkTo>
          ))}

          {socialLinks?.length < 5
            ? <AddSocialLink startIcon={<AddIcon />} variant="contained" onClick={handleClickOpen}>Add social link</AddSocialLink>
            : <AddSocialLink variant="contained" sx={{ minWidth: '50px', padding: 0 }} onClick={() => { window.location.pathname = 'settings/profile'; }}>Edit</AddSocialLink>}
        </Box>
        {/* social link part */}

        <AddPost variant="contained">Add Post</AddPost>

        {/* popup component to add social link */}
        <BootstrapDialog
          onClose={(event, reason) => {
            console.log('out');
            if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
              setOpen(false);
              console.log('to');
            }
          }}
          aria-labelledby="customized-dialog-title"
          open={open}
          keepMounted
        >
          <SocialLinks onClose={(event, reason) => {
            console.log('out');
            if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
              setOpen(false);

              console.log('bo');
            }
          }}
          />
        </BootstrapDialog>
        {/* popup component to add social link */}

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
