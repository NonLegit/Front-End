import { useEffect } from 'react';

// MUI components
import { Typography } from '@mui/material';

// Components
import EditPost from './EditPost/EditPost';
import CreateComment from './CreateComment/CreateComment';

// Context
import { usePostContext } from '../../../../contexts/PostContext';

// Styles
import { MultiLevelContentConatiner, PostHeader } from './styles';
import { AuthorLink, ImgAvatar } from '../CommentsList/Comment/styles';

// Utlis
import calculateTime from '../../../../utils/calculateTime';

/* The Main Content of the post including Actions */
function MultiLevelPostContent(props) {
  const { Edit } = props;

  // Context
  const { post } = usePostContext();

  // Constants
  const authorProfilelink = `/user/${post?.author?.name}`;
  const ownerProfilelink = (post?.ownerType === 'User') ? `/user/${post?.owner?.name}` : `/SubReddit/${post?.owner?.name}`;

  useEffect(() => console.log('Edit', Edit), []);

  return (
    <MultiLevelContentConatiner>
      {/* MultiLevelPostContent
      {' '}
      {Edit}
      {' '}
      Value */}
      {/* Owner Authoer */}
      {/* PostHeader */}
      <PostHeader>
        <ImgAvatar alt={post?.owner?.name} src={post?.owner?.icon} />
        <Typography fontSize="12px" fontWeight="400">
          <AuthorLink href={ownerProfilelink}>
            {post?.ownerType === 'User' ? 'u' : 'r'}
            /
            {post?.owner?.name}
          </AuthorLink>
        </Typography>

        <Typography fontSize="12px" fontWeight="400">
          Posted by
          {' '}
          <AuthorLink href={authorProfilelink}>
            u/
            {post?.author?.name}
          </AuthorLink>
        </Typography>

        <Typography fontSize="12px" fontWeight="400">
          {calculateTime(post?.createdAt)}
        </Typography>
      </PostHeader>

      {/* Title */}
      <Typography variant="h1" fontSize="20px" fontWeight="600">{post?.title}</Typography>
      {Edit ? <EditPost /> : <p>{post?.text}</p>}
      {/* Post Actions Bar */}
      {/* Post Insights */}
      {/* Post Statistics */}
      {/* Create Comment */}
      <CreateComment />
    </MultiLevelContentConatiner>
  );
}

export default MultiLevelPostContent;
