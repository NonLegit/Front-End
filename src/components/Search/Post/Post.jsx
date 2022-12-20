import {
  Avatar, Box, Typography,
} from '@mui/material';
import { useState } from 'react';
import numFormatter from '../../../utils/MembersNum';
import calculateTime from '../../../utils/calculateTime';
import {
  PostContainer, PostInfo, PostInfoLink, PostTitle,
  PostRich, PostMedia, Image, Video, Flair, PostUrl, PostUrlLink, LinkIcon,
  // Flair,
} from './styles';
import RedditButton from '../RedditButton/RedditButton';

/**
 * Posts in search by posts
 * @component

 * @return {React.Component} - Posts in search by posts
 */

function Post(props) {
  const { post } = props;
  const [type] = useState('');

  // const posts=[
  //   {
  //     createdAt='2 years ago'

  //     title='Update: My (32F) husband (36M) became a robot and I don’t know how to help him.'
  //     ownerIcon="https://styles.redditmedia.com/t5_3ptyd/styles/communityIcon_p18jqwszxcv51.png"
  //     ownerName='toptalent'
  //     authorName='righteous_boldness07'

  //     flairText={posts?.flairId?.flairText}
  //     flairBackgroundColor={posts?.flairId?.flairBackgroundColor}
  //     flairColor={posts?.flairId?.flairColor}

  //     text={posts?.text}
  //     images="[EgyBest].Breaking.Bad.S01E02.BluRay.360p.x264.mp4"
  //     videos={posts?.videos}
  //     kind={posts?.kind}

  //     votes={posts?.votes}
  //     postVoteStatus={posts?.postVoteStatus}
  //     commentCount={posts?.commentCount}

  //     key={posts?.id}
  //   }
  // ]
  return (
    <PostContainer my={2} sx={{ '&:hover': { border: 1 } }}>
      <Box width="100%" p={1}>
        <PostInfo py={1}>
          <Avatar
            src={post.owner.icon}
            sx={{
              width: 20,
              height: 20,
            }}
            alt="Profile Image"
          />
          <PostInfoLink to={`/r/${post.owner.fixedName}`} color="#000" fontWeight="bolder">
            r/
            {post.owner.name}
          </PostInfoLink>
          <Box color="#787C7E" fontWeight={300} display="flex" gap="4px" flexWrap="wrap">
            <span>
              •
            </span>
            <div>Posted By</div>
            <Avatar
              src={post.auther.profilePicture}
              sx={{
                width: 20,
                height: 20,
              }}
              alt="Profile Image"
            />
            <PostInfoLink to={`/user/${post.auther.userName}`} color="inherit" fontWeight="normal">
              u/
              {post.auther.displayName}
              {' '}
              {calculateTime(post.createdAt)}
            </PostInfoLink>
          </Box>
        </PostInfo>
        <PostTitle to="/">
          <Typography variant="h6" component="h3" sx={{ fontSize: 18 }}>
            {post.title}
            <RedditButton
              sx={{ '&:hover': { opacity: 0.85, backgroundColor: '#f0f1f3', boxShadow: 'none' } }}
              backgroundColor="#edeff1"
              fontSize={10}
              padding="2px 10px"
              variant="contained"
              fontWeight="normal"
            >

              {
            post.flairId
            && (
            <Flair
              disableRipple
              backgroundColor={post.flairId.backgroundColor}
              flairColor={post.flairId.textColor}
            >
              {post.flairId.text}
            </Flair>
            )
          }
            </RedditButton>
          </Typography>
          <PostMedia>
            {(post.kind === 'video')
            && <Video src={post.video} alt="" />}
            {(type === 'image')
             && <Image src={post.images[0]} alt="" />}
            {(post.kind === 'link')
            && (
            <PostUrl href={post.url}>
              <PostUrlLink>
                {post.url}
              </PostUrlLink>
              <LinkIcon />
            </PostUrl>
            )}
          </PostMedia>
        </PostTitle>
        <PostRich mt={5}>
          <Typography variant="span" sx={{ marginRight: 3 }}>
            {numFormatter(post.votes)}
            {' '}
            upvotes
            {' '}
          </Typography>
          <Typography variant="span" sx={{ marginRight: 3 }}>
            {numFormatter(post.commentCount)}
            {' '}
            comments
            {' '}
          </Typography>
        </PostRich>
      </Box>

    </PostContainer>
  );
}

export default Post;
