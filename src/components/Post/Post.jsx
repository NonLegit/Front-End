// mui components
import {
  Box, useMediaQuery, useTheme,
} from '@mui/material';

// styles
import { useRef, useEffect, useState } from 'react';
import {
  PostContainer, PostMedia, CustomImage, PostText, PostTextContainer,

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
 * @returns {React.Component} Post
 */

function Post(props) {
  const {
    createdAt, title, images, ownerType, ownerName, ownerIcon, authorName, flairText, flairBackgroundColor, flairColor, kind, votes, commentCount, text, videos,
    subredit, postVoteStatus, isSaved, postId,
  } = props;
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.up('sm'));
  const postTextRef = useRef();
  const [displayShadow, setDisplayShadow] = useState(false);
  const maxTextHeight = 180;
  // const doc = new DOMParser().parseFromString(text, 'text/xml');
  // console.log(doc);
  const matchMd = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    console.log('height', postTextRef?.current?.offsetHeight);
    setDisplayShadow(postTextRef?.current?.offsetHeight > maxTextHeight);
  }, [text]);
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
        />
        <PostMedia mt={1.5} kind={kind}>
          {/* eslint-disable jsx-a11y/media-has-caption */}
          {/* */}
          {kind === 'video' ? (
            <video controls style={{ width: '100%', maxHeight: '512px' }}>
              <source src={videos[0]} type="video/mp4" />
            </video>
          ) : (
            (kind === 'image')
              ? (
                <CustomImage
                  src={images[0]}
                  alt="post image"
                />
              ) : (
                <PostText
                  ref={postTextRef}
                  maxHeight={displayShadow ? maxTextHeight : 'none'}
                >
                  {displayShadow && <PostTextContainer />}
                  <div dangerouslySetInnerHTML={{ __html: text }} />
                </PostText>
              )
          )}
          {/* <img src="./assets/images/Screenshot (1).png" alt="" /> */}
        </PostMedia>
        <PostReactions
          votes={votes}
          matchSm={matchSm}
          matchMd={matchMd}
          comments={commentCount}
          postVoteStatus={postVoteStatus}
          isSaved={isSaved}
          postId={postId}
        />
      </Box>
    </PostContainer>
  );
}

export default Post;
