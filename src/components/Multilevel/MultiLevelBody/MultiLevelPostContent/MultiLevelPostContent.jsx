import { useEffect } from 'react';

// MUI components
import { Typography } from '@mui/material';

// Components
import EditPost from './EditPost/EditPost';
import CreateComment from './CreateComment/CreateComment';

// Context
import { usePostContext } from '../../../../contexts/PostContext';

// Styles
import { MultiLevelContentConatiner } from './styles';

// Utlis
import calculateTime from '../../../../utils/calculateTime';

/* The Main Content of the post including Actions */
function MultiLevelPostContent(props) {
  const { Edit } = props;

  // Context
  const { post } = usePostContext();

  useEffect(() => console.log('Edit', Edit), []);

  return (
    <MultiLevelContentConatiner>
      {/* MultiLevelPostContent
      {' '}
      {Edit}
      {' '}
      Value */}
      {/* Owner Authoer */}
      <Typography variant="h1" fontSize="20px" fontWeight="600">
        Posted by
        {' '}
        {post?.ownerType === 'User' ? 'u' : 'r'}
        /
        {post?.author?.name}
        {' '}
        {calculateTime(post?.createdAt)}
      </Typography>
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
