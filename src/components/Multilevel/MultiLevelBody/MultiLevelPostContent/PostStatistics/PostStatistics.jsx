// MUI components
import { Typography } from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';
import IosShareIcon from '@mui/icons-material/IosShare';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

// Styles
import { StaticticsContainer, StatisticsCaption, StatisticsIcon } from './styles';

// Context
import { usePostContext } from '../../../../../contexts/PostContext';

function PostStatistics(props) {
  // eslint-disable-next-line no-unused-vars
  const { views, shareCount } = props;

  // Context
  const { post } = usePostContext();
  return (
    <StaticticsContainer>
      <StatisticsIcon>
        <Typography fontSize="22px" fontWeight="500">{post?.views}</Typography>
        <StatisticsCaption>
          <VisibilityIcon fontSize="12px" />
          <Typography fontSize="14px">Total Views</Typography>
        </StatisticsCaption>
      </StatisticsIcon>

      <StatisticsIcon>
        <Typography fontSize="22px" fontWeight="500">{post?.views}</Typography>
        <StatisticsCaption>
          <IosShareIcon fontSize="12px" />
          <Typography fontSize="14px">Total Shares</Typography>
        </StatisticsCaption>
      </StatisticsIcon>

      <StatisticsIcon>
        <Typography fontSize="22px" fontWeight="500">{post?.commentCount}</Typography>
        <StatisticsCaption>
          <ChatBubbleOutlineIcon fontSize="12px" />
          <Typography fontSize="14px">Total Comments</Typography>
        </StatisticsCaption>
      </StatisticsIcon>
    </StaticticsContainer>
  );
}

export default PostStatistics;
