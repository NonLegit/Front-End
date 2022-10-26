// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import ThumbDownIcon from '@mui/icons-material/ThumbDown';
// icons
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';

// mui components
import {
  Avatar, Box, Divider, IconButton, ListItemButton, ListItemIcon, Typography, useMediaQuery, useTheme,
} from '@mui/material';

// assets
import { useState } from 'react';
import video from '../../assets/videos/mov_bbb.mp4';

// styles
import {
  PostContainer, Popularity, PostInfo, PostInfoLink, PostTitle, PostMedia, PostActions, ActionButton, ShowMoreList, ShowMoreListItemText,
} from './styles';
import RedditButton from '../RedditButton/RedditButton';
import JoinButton from '../JoinButton/JoinButton';
import Reactions from '../Reactions/Reactions';

function Post() {
  const [showMore, setShowMore] = useState(false);
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('sm'));
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <PostContainer my={2}>
      {match && (
      <Reactions flexDirection="column" />
      )}
      <Box width="100%" p={1}>
        <Popularity pb={1}>
          Popular videos
        </Popularity>
        <Divider
          sx={{
            borderColor: 'rgb(0 0 0 / 9%)',
          }}
        />
        <PostInfo py={1}>
          <Avatar
            src="https://styles.redditmedia.com/t5_3ptyd/styles/communityIcon_p18jqwszxcv51.png"
            sx={{
              width: 20,
              height: 20,
            }}
            alt="Profile Image"
          />
          <PostInfoLink to="/" color="#000" fontWeight="bolder">
            r/toptalent
          </PostInfoLink>
          <Box color="#787C7E" fontWeight={300} display="flex" gap="4px" flexWrap="wrap">
            <span>
              •
            </span>
            <div>Posted By</div>
            <PostInfoLink to="/" color="inherit" fontWeight="normal">
              u/righteous_boldness07
            </PostInfoLink>
            <Avatar
              src="https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=32&height=32&crop=smart&auto=webp&s=e50908c50d797edd935ba8b5d9f0fb1372ff0bae"
              alt="donate"
              sx={{
                width: 16,
                height: 16,
                mx: 0.2,
              }}
            />
            <Avatar
              src="https://www.redditstatic.com/gold/awards/icon/silver_32.png"
              alt="silver award"
              sx={{
                width: 16,
                height: 16,
                mx: 0.2,
              }}
            />
          </Box>
          <Box display="flex" justifyContent="flex-end" flexGrow={1} alignItems="flex-start">
            <JoinButton />
          </Box>
        </PostInfo>
        <PostTitle to="/">
          <Typography variant="h6" component="h3" sx={{ fontSize: 18 }}>
            In 1991 Michael Jordan shot a free throw with his eyes closed while playing the Denver Nuggets.
            {' '}
            <RedditButton
              fontSize={10}
              padding="2px 10px"
              variant="contained"
              fontWeight="normal"
            >
              <Box>
                sports
                {' '}
                <img width={15} src="https://emoji.redditmedia.com/0b4x4bjkhqe61_t5_3ptyd/JoyfulPodium" alt="" />
                {' '}
                /r/all
              </Box>
            </RedditButton>
          </Typography>
        </PostTitle>
        <PostMedia pt={1.5}>
          {/* eslint-disable jsx-a11y/media-has-caption */}
          <video controls>
            <source src={video} type="video/mp4" />
          </video>
          {/* <img src="./assets/images/Screenshot (1).png" alt="" /> */}
        </PostMedia>
        <PostActions mt={0.5}>
          {!match && (
          <Reactions flexDirection="row" />
          )}
          <ActionButton color="third" startIcon={<ChatBubbleOutlineRoundedIcon />}>120 comments</ActionButton>
          <ActionButton color="third" startIcon={<CardGiftcardOutlinedIcon />}>award</ActionButton>
          <ActionButton color="third" startIcon={<ShareOutlinedIcon />}>Share</ActionButton>
          <Box position="relative" display="flex">
            <IconButton
              sx={{
                borderRadius: '10%',
                py: 0.4,
              }}
              onClick={handleShowMore}
              color="third"
            >
              <MoreHorizOutlinedIcon />
            </IconButton>
            <ShowMoreList display={(showMore === false ? 'none' : 'block')}>
              <ListItemButton>
                <ListItemIcon>
                  <CheckOutlinedIcon />
                </ListItemIcon>
                <ShowMoreListItemText>
                  show more posts like this
                </ShowMoreListItemText>
              </ListItemButton>
              <Divider />
              <ListItemButton>
                <ListItemIcon>
                  <VisibilityOffOutlinedIcon />
                </ListItemIcon>
                <ShowMoreListItemText>
                  Show fewer posts like this
                </ShowMoreListItemText>
              </ListItemButton>
              <Divider />
              <ListItemButton>
                <ListItemIcon>
                  <BookmarkBorderOutlinedIcon />
                </ListItemIcon>
                <ShowMoreListItemText>
                  save
                </ShowMoreListItemText>
              </ListItemButton>
              <Divider />
              <ListItemButton>
                <ListItemIcon>
                  <VisibilityOffOutlinedIcon />
                </ListItemIcon>
                <ShowMoreListItemText>
                  hide
                </ShowMoreListItemText>
              </ListItemButton>
              <Divider />
              <ListItemButton>
                <ListItemIcon>
                  <FlagOutlinedIcon />
                </ListItemIcon>
                <ShowMoreListItemText>
                  report
                </ShowMoreListItemText>
              </ListItemButton>
            </ShowMoreList>
          </Box>
        </PostActions>
      </Box>
    </PostContainer>
  );
}

export default Post;
