import {
  Avatar, Box, Typography,
} from '@mui/material';
import calculateTime from '../../../utils/calculateTime';
import numFormatter from '../../../utils/MembersNum';
import {
  PostContainer, PostInfo, PostInfoLink, PostTitle,
  PostRich,
  CommentContainer,
  CommentReach,
  GoToThread,
  PostLink,
} from './style';

/**
 * Search by Comments entity
 * @component
 * @return {React.Component} - Search by community entity
 */
function Comments(props) {
  const { Comment } = props;
  return (
    <PostContainer sx={{ '&:hover': { border: 1 } }}>
      <Box width="100%">
        <Box sx={{ padding: '16px 16px 4px' }}>
          <PostInfo>
            <Avatar
              src={Comment.post.owner.icon}
              sx={{
                width: 20,
                height: 20,
              }}
              alt="Profile Image"
            />
            <PostInfoLink to={`/r/${Comment.post.owner.fixedName}`} color="#000" fontWeight="bolder">
              r/
              {Comment.post.owner.name}
            </PostInfoLink>
            <Box color="#787C7E" fontWeight={300} display="flex" gap="4px" flexWrap="wrap">
              <span>
                •
              </span>
              <div>Posted By</div>
              <Avatar
                src={Comment.post.author.profilePicture}
                sx={{
                  width: 20,
                  height: 20,
                }}
                alt="Profile Image"
              />
              <PostInfoLink to={`/user/${Comment.post.author.userName}`} color="inherit" fontWeight="normal">
                u/
                {Comment.post.author.displayName}
                {' '}
                {calculateTime(Comment.post.createdAt)}
              </PostInfoLink>
            </Box>
          </PostInfo>
        </Box>

        <PostTitle>
          <PostLink to={`../subreddit/${Comment.post?.owner?.fixedName}/comments/${Comment.post?._id}`}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontSize: 12, marginBottom: '12px', fontWeight: '400',
              }}
            >
              {Comment.post.title.replace(/<[^>]+>/g, '')}
            </Typography>
          </PostLink>
          <CommentContainer to={`../subreddit/${Comment.post?.owner?.fixedName}/comments/${Comment.post?._id}/${Comment?._id}`}>
            <Avatar
              src={Comment.author.profilePicture}
              sx={{
                width: 20,
                height: 20,
                margin: 1,
              }}
              alt="Profile Image"
            />
            <Box>
              <PostInfo py={1}>

                <PostInfoLink to={`/user/${Comment.author.userName}`} color="#000" fontWeight="bolder">
                  {Comment.author.displayName}
                </PostInfoLink>
                <Box color="#787C7E" fontWeight={300} display="flex" gap="4px" flexWrap="wrap">
                  <Typography component="span" mx="4px" sx={{ fontSize: '6px', display: 'flex', alignItems: 'center' }}>
                    •
                  </Typography>
                  <PostInfoLink to="/" color="inherit" fontWeight="normal">
                    {calculateTime(Comment.createdAt)}
                  </PostInfoLink>
                </Box>
              </PostInfo>
              {/* question */}
              <Typography variant="h6" component="h3" sx={{ fontSize: 14, marginBottom: '12px', fontWeight: '400' }}>
                {Comment.text.replace(/<[^>]+>/g, '')}
              </Typography>
              <CommentReach>
                <Typography variant="span" sx={{ marginRight: 3, padding: 0 }}>
                  {numFormatter(Comment.votes)}
                  {' '}
                  upvotes
                  {' '}
                </Typography>
                <Typography variant="span" sx={{ marginRight: 3, padding: 0 }}>
                  {numFormatter(Comment.Comment)}
                  {' '}
                  awards
                  {' '}
                </Typography>
              </CommentReach>
            </Box>
          </CommentContainer>
        </PostTitle>
        <GoToThread to={`../subreddit/${Comment.post?.owner?.fixedName}/comments/${Comment.post?._id}/${Comment?._id}`}>
          Go to thread
        </GoToThread>
        <PostRich mt={5}>
          <Typography variant="span" sx={{ marginRight: 3 }}>
            {numFormatter(Comment.post.votes)}
            {' '}
            upvotes
            {' '}
          </Typography>
          <Typography variant="span" sx={{ marginRight: 3 }}>
            {numFormatter(Comment.post.commentCount)}
            {' '}
            comments
            {' '}
          </Typography>
        </PostRich>
      </Box>
    </PostContainer>
  );
}

export default Comments;
