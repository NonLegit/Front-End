// Components
import Reactions from '../../Post/Reactions/Reactions';
import MultilevelPostComments from './MultilevelPostComments/MultilevelPostComments';
import MultiLevelPostContent from './MultiLevelPostContent/MultiLevelPostContent';

// Context
import { usePostContext } from '../../../contexts/PostContext';
// Styles
import { MultiLevelRightSideContentConatiner, MultiLevelBodyConatiner } from './styles';

function MultiLevelBody({ Edit }) {
  // Context
  const { post } = usePostContext();
  return (
    <MultiLevelBodyConatiner>
      {/* Reactions */}
      <Reactions flexDirection="column" votes={post?.votes} />
      <MultiLevelRightSideContentConatiner>
        {/* MultiLevelPostContent */}
        <MultiLevelPostContent Edit={Edit} />
        {/* MultiLevelPostComments */}
        <MultilevelPostComments />
      </MultiLevelRightSideContentConatiner>
    </MultiLevelBodyConatiner>
  );
}

export default MultiLevelBody;
