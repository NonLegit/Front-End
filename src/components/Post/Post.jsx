/* eslint-disable react/no-danger */
// mui components
import {
  Box, useMediaQuery, useTheme,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

// styles
import { useRef, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import {
  PostContainer, PostMedia, CustomImage, PostText, PostTextContainer, ControlsIcon, PostUrl, PostUrlLink, LinkIcon,

} from './styles';

import Reactions from './Reactions/Reactions';
import PostReactions from './PostReactions/PostReactions';
import PostHeader from './PostHeader/PostHeader';
/**
 * This component is the view of the post in home page.
 *
 * @component Post
 * @property {string} title -Post title.
 * @property {string} ownerType -Post owner type user or subreddit.
 * @property {string} ownerIcon -Post owner icon.
 * @property {string} ownerName -Post subreddit(post owner).
 * @property {string} authorName -Post author.
 * @property {string} flairText -Post flair text.
 * @property {string} flairBackgroundColor -Post flair background color.
 * @property {string} flairColor -Post flair color.
 * @property {string} kind -Post kind (link, self, image, video).
 * @property {Array.<string>} images -Array of sources of images
 * @property {Array.<string>} videos -Array of sources of vidoes
 * @property {number} votes -Number of post votes.
 * @property {number} commentCount -Number of post comments.
 * @property {string} text -Post text in case of "self" kind.
 * @property {boolean} subreddit -to identify if post in home page or subreddit.
 * @property {number} postVoteStatus -The last vote of the current user in this post.
 * @property {boolean} isSaved -Is this post saved by the current user or not.
 * @property {number} postId -The Id of the current post.
 * @property {string} url -The post url.
 * @property {boolean} nsfw -Whether the post is not safe for work or not.
 * @property {boolean} spoiler -Whether the post is spoiler or not.
 * @returns {React.Component} Post
 */

function Post(props) {
  const {
    createdAt, title, images, ownerType, ownerName, ownerIcon, authorName, flairText, flairBackgroundColor, flairColor, kind, votes, commentCount, text, video,
    subredit, postVoteStatus, isSaved, postId, url, nsfw, spoiler,
  } = props;

  // routes
  const navigate = useNavigate();

  // styles
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.up('sm'));
  const matchMd = useMediaQuery(theme.breakpoints.up('md'));

  // variables
  const maxTextHeight = 180;

  // states
  const [displayShadow, setDisplayShadow] = useState(false);
  const [index, setIndex] = useState(0);
  const [maxImagesHeight, setMaxImagesHeight] = useState(450);

  // refs
  const postTextRef = useRef();
  const postMediaRef = useRef();

  // handlers
  const handleDirection = (dir) => {
    setIndex(index + dir);
  };

  const redirectToPost = (redirect) => {
    if (redirect) {
      const username = ownerName;
      if (ownerType === 'User') {
        if (username) {
          navigate(`/user/${username}/comments/${postId}`);
        } else {
          navigate('/');
        }
      } else {
        navigate(`/r/${ownerName}/comments/${postId}`);
      }
    }
  };

  const getPostUrl = () => {
    const username = ownerName;
    if (ownerType === 'User') {
      if (username) {
        return `user/${username}/comments/${postId}`;
      }
      return '';
    }
    return `r/${ownerName}/comments/${postId}`;
  };

  // effects
  useEffect(() => {
    setDisplayShadow(postTextRef?.current?.offsetHeight > maxTextHeight);
  }, [text]);

  useEffect(() => {
    images?.forEach((image) => {
      const img = new Image();

      img.src = image;
      img.onload = () => {
        setMaxImagesHeight((maxImagesHeight) => {
          const maxValue = Math.min(maxImagesHeight, img.height);
          const postWidth = postMediaRef?.current?.offsetWidth;
          if (maxImagesHeight > img.height && img.width > postWidth) {
            return img.height * (postWidth / img.width);
          }
          return maxValue;
        });
      };
    });
  }, [images]);

  // console.log('for post ', postId, maxImagesHeight);
  return (
    <PostContainer my={2}>
      {matchSm && (
        <Reactions
          flexDirection="column"
          votes={votes}
          postVoteStatus={postVoteStatus}
          postId={postId}
        />
      )}
      <Box
        p={1}
        flexGrow={1}
        maxWidth={matchSm ? '94.5%' : '100%'}
      >
        <PostHeader
          title={title}
          ownerIcon={ownerIcon}
          ownerName={ownerName}
          authorName={authorName}
          flairText={flairText}
          flairBackgroundColor={flairBackgroundColor}
          flairColor={flairColor}
          createdAt={createdAt}
          subredit={subredit}
          ownerType={ownerType}
          nsfw={nsfw}
          spoiler={spoiler}
          redirectToPost={redirectToPost}
        />
        {/* eslint-disable jsx-a11y/media-has-caption */}
        {/* */}
        {!nsfw && (
        <PostMedia
          mt={1.5}
          kind={kind}
          ref={postMediaRef}
          spoiler={spoiler}
          onClick={() => redirectToPost(kind !== 'link')}
        >
          {kind === 'video' ? (
            <video controls style={{ width: '100%', maxHeight: '512px' }}>
              <source src={video} type="video/mp4" />
            </video>
          ) : (
            (kind === 'image')
              ? (
                <>
                  {images.map((image, imageIndex) => (
                    imageIndex === index
                    && (
                    <CustomImage
                      src={image}
                      alt="post image"
                      key={image}
                      maxHeight={maxImagesHeight}
                    />
                    )
                  ))}
                  <>
                    <ControlsIcon
                      disableRipple
                      left={10}
                      display={index <= 0 ? 'none' : 'flex'}
                      sx={{
                        boxShadow: 10,
                      }}
                      color="third"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDirection(-1);
                      }}
                    >
                      <ArrowBackIosNewIcon />
                    </ControlsIcon>
                    <ControlsIcon
                      disableRipple
                      right={10}
                      display={index >= images.length - 1 ? 'none' : 'flex'}
                      sx={{
                        boxShadow: 10,
                      }}
                      color="third"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDirection(1);
                      }}
                    >
                      <ArrowForwardIosIcon />
                    </ControlsIcon>
                  </>
                </>
              ) : ((kind === 'self') ? (
                <PostText
                  ref={postTextRef}
                  maxHeight={displayShadow ? maxTextHeight : 'none'}
                >
                  {displayShadow && <PostTextContainer />}
                  <div dangerouslySetInnerHTML={{ __html: text }} />
                </PostText>
              )
                : (
                  <PostUrl href={url}>
                    <PostUrlLink>
                      {url}
                    </PostUrlLink>
                    <LinkIcon />
                  </PostUrl>
                ))
          )}
        </PostMedia>
        )}
        <PostReactions
          votes={votes}
          matchSm={matchSm}
          matchMd={matchMd}
          comments={commentCount}
          postVoteStatus={postVoteStatus}
          isSaved={isSaved}
          postId={postId}
          redirectToPost={redirectToPost}
          getPostUrl={getPostUrl}
          authorName={authorName}
        />
      </Box>
    </PostContainer>
  );
}

export default Post;
