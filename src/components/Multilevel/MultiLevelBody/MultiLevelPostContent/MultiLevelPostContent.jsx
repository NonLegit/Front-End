import { useEffect } from 'react';

// Components
import EditPost from '../../EditPost/EditPost';

// Styles
import { MultiLevelContentConatiner } from './styles';

/* The Main Content of the post including Actions */
function MultiLevelPostContent(props) {
  const { Edit } = props;
  console.log(Edit);
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
      {Edit ? <EditPost /> : <h1>PostText</h1>}
      {/* Post Actions Bar */}
      {/* Post Insights */}
      {/* Post Statistics */}
    </MultiLevelContentConatiner>
  );
}

export default MultiLevelPostContent;
