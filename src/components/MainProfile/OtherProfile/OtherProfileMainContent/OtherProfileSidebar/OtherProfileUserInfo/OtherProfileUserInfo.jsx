import { Box, CardMedia, Typography } from '@mui/material';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import CakeIcon from '@mui/icons-material/Cake';
import { useEffect, useState } from 'react';
import moment from 'moment/moment';
import { useParams } from 'react-router-dom';
import UserInfoServer from '../../../../mainProfileServer';
import {
  ProfilePic, ProfileBox,
  UserInfoBox, UserName, InfoBox,
  EntityBox, MoreOptions, OptionsButtons, UserInfoButton, LinkTo, Text, PlatformIcon, BlockButton, BootstrapDialog,
} from './styles';
import { blockRequest, followRequest } from './userActionServer';
import Block from './Block/Block';

/**
 * UserInfo Box in sidebar containing all info of a user
 *
 * @component OtherProfileUserInfo
 * @returns {React.Component} OtherProfileUserInfo
 */
function OtherProfileUserInfo() {
  const [displayName, setDisplayName] = useState();
  const [about, setAbout] = useState();
  const [postKarma, setPostKarma] = useState();
  const [commentKarma, setCommentKarma] = useState();
  const [cake, setCake] = useState();
  const [profilePic, setProfilePic] = useState();
  const [coverPic, setCoverPic] = useState();
  const [follow, setFollow] = useState(undefined);
  const [isFollowedUi, setIsFollowedUi] = useState(undefined);
  const [socialLinks, setSocialLinks] = useState([]);
  const [block, setBlock] = useState(undefined);

  const [hover, setHover] = useState(false);

  const [open, setOpen] = useState(false);

  const { username } = useParams();
  const [info, statusCode] = UserInfoServer(username);
  followRequest(username, follow, () => { setIsFollowedUi((prev) => !prev); });
  blockRequest(username, block);

  useEffect(() => {
    setDisplayName(info?.displayName);
    setAbout(info?.description);
    setPostKarma(info?.postKarma);
    setCommentKarma(info?.commentKarma);
    setCake(info?.createdAt);
    setProfilePic(info?.profilePicture);
    setCoverPic(info?.profileBackground);
    setFollow(info?.isFollowed);
    setSocialLinks(info?.socialLinks);
    setBlock(info?.isBlocked);
  }, [info, statusCode]);

  const [showList, setShowList] = useState(false);
  const handleClickList = () => {
    setShowList((prev) => !prev);
  };

  const handleClickFollow = () => {
    setFollow((prev) => !prev);
  };

  const handleBlock = () => {
    setOpen(true);
  };

  const handleBlockApprove = () => {
    setOpen(false);
    setBlock((prev) => !prev);
  };

  const handleMouseIn = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
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
        <UserName variant="string">
          {displayName}
        </UserName>
        <br />
        <UserName variant="caption">
          u/
          {username}
        </UserName>
        <UserName variant="body2" sx={{ marginTop: '5px' }}>
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
              <Typography variant="caption" sx={{ color: '#7c7c7c' }}>{moment(cake, 'YYYY-MM-DD-HH-mm').add(1, 'days').utc().format('MMMM DD, YYYY')}</Typography>
            </Box>
          </EntityBox>
        </InfoBox>

        {/* social link part */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {socialLinks?.map((link, index) => (
            <LinkTo href={`${link?.userLink}`} target="_blank">
              <Text key={`${index + 0}`}>
                <PlatformIcon src={link?.social?.icon} />
                {link?.displayText}
              </Text>
            </LinkTo>
          ))}
        </Box>
        {/* social link part */}

        {!block ? (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {isFollowedUi ? <UserInfoButton variant="outlined" onClick={() => { handleClickFollow(); }}>Unfollow</UserInfoButton> : <UserInfoButton variant="contained" onClick={() => { handleClickFollow(); }}>Follow</UserInfoButton>}
              <UserInfoButton variant="contained">Chat</UserInfoButton>
            </Box>
            {showList
            && (
            <>
              <OptionsButtons data-testid="option">Send Message</OptionsButtons>
              <OptionsButtons onClick={() => { handleBlockApprove(); }}>Block User</OptionsButtons>
              <OptionsButtons>Get Them Help and Support</OptionsButtons>
              <OptionsButtons>Report User</OptionsButtons>
              <OptionsButtons>Add to Custom Feed</OptionsButtons>
              <MoreOptions onClick={() => { handleClickList(); }}>Fewer options</MoreOptions>
            </>
            )}
            {!showList
            && <MoreOptions data-testid="show-more" onClick={() => { handleClickList(); }}>More options</MoreOptions>}
          </>
        )
          : (
            <BlockButton
              variant="contained"
              onClick={handleBlock}
              onMouseEnter={handleMouseIn}
              onMouseLeave={handleMouseOut}
            >
              {(block ? (hover ? 'Unblock' : 'Blocked') : 'Blocked')}
            </BlockButton>
          )}
        <BootstrapDialog
          onClose={(event, reason) => {
            if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
              setOpen(false);
            }
          }}
          aria-labelledby="customized-dialog-title"
          open={open}
          keepMounted
        >
          <Block
            onClose={(event, reason) => {
              if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
                setOpen(false);
              }
            }}
            username={username}
            handleBlock={handleBlockApprove}
          />
        </BootstrapDialog>
      </ProfileBox>

    </UserInfoBox>
  );
}

export default OtherProfileUserInfo;
