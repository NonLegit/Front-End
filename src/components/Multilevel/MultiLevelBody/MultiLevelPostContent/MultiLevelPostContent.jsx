import { useEffect } from 'react';

// MUI components
import { Typography } from '@mui/material';

// Components
import EditPost from '../../EditPost/EditPost';

// Context
import { usePostContext } from '../../../../contexts/PostContext';

// Styles
import { MultiLevelContentConatiner } from './styles';

/* The Main Content of the post including Actions */
function MultiLevelPostContent(props) {
  const { Edit } = props;

  // Context
  const { post } = usePostContext();

  useEffect(() => console.log(Edit), []);

  return (
    <MultiLevelContentConatiner>
      MultiLevelPostContent
      {' '}
      {Edit}
      {' '}
      Value
      {/* Owner Authoer */}
      {/* Title */}
      <Typography variant="h1" fontSize="20px" fontWeight="600">{post?.title}</Typography>
      {Edit ? <EditPost /> : <p>{post?.text}</p>}
      {/* Post Actions Bar */}
      {/* Post Insights */}
      {/* Post Statistics */}
    </MultiLevelContentConatiner>
  );
}

export default MultiLevelPostContent;
