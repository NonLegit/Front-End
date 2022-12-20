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

/**
 * Posts in search by posts
 * @component

 * @return {React.Component} - Posts in search by posts
 */

function Post(props) {
  const { post } = props;
  const [type] = useState('');

  return (
    <PostContainer my={2} sx={{ '&:hover': { border: 1 }, padding: '8px 16px 4px' }}>
      <Box width="100%">
        <PostInfo py={1}>
          <Avatar
            src={post?.owner?.icon}
            sx={{
              width: 20,
              height: 20,
            }}
            alt="Profile Image"
          />
          <PostInfoLink to={`/r/${post?.owner?.fixedName}`} color="#000" fontWeight="bolder">
            r/
            {post.owner.name}
          </PostInfoLink>
          <Box color="#787C7E" fontWeight={300} display="flex" gap="4px" flexWrap="wrap">
            <span>
              •
            </span>
            <div>Posted By</div>
            <Avatar
              src={post?.author?.profilePicture}
              sx={{
                width: 20,
                height: 20,
              }}
              alt="Profile Image"
            />
            <PostInfoLink to={`/user/${post?.author?.userName}`} color="inherit" fontWeight="normal">
              u/
              {post?.author?.displayName}
              {' '}
              {calculateTime(post?.createdAt)}
            </PostInfoLink>
          </Box>
        </PostInfo>

        <PostTitle to={`../r/${post?.owner?.fixedName}/comments/${post?._id}`}>
          <Typography variant="div" component="div" sx={{ fontSize: 18, wordBreak: 'break-all' }}>
            {post.title.replace(/<[^>]+>/g, '')}
            {/* {post?.title} */}

            {
            post?.flairId
            && (
            <Flair
              disableRipple
              backgroundColor={post?.flairId?.backgroundColor}
              flairColor={post?.flairId?.textColor}
            >
              {/* {post.flairId.text.replace(/<[^>]+>/g, '')} */}
              {post?.flairId?.text}
            </Flair>
            )
          }
          </Typography>
          {(post.kind === 'video' || type === 'image')
          && (
          <PostMedia>
            {(post.kind === 'video')
            && <Video src={post?.video} alt="" />}
            {(type === 'image')
             && <Image src={post?.images[0]} alt="" />}
          </PostMedia>
          )}

        </PostTitle>
        {(post.kind === 'link')
            && (
            <PostUrl href={post?.url}>
              <PostUrlLink>
                {post?.url}
              </PostUrlLink>
              <LinkIcon />
            </PostUrl>
            )}
        <PostRich mt={5}>
          <Typography variant="span" sx={{ marginRight: 3 }}>
            {numFormatter(post?.votes)}
            {' '}
            upvotes
            {' '}
          </Typography>
          <Typography variant="span" sx={{ marginRight: 3 }}>
            {numFormatter(post?.commentCount)}
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
