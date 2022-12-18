// MUI components
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Typography } from '@mui/material';
import { StatisticsCaption, StatisticsIcon } from './styles';

function PostStatistics(props) {
  // eslint-disable-next-line no-unused-vars
  const { views, shareCount } = props;
  return (
    <div>
      PostStatistics
      <StatisticsIcon>
        <Typography>530</Typography>
        <StatisticsCaption>
          <Typography>Total Shares</Typography>
          <VisibilityIcon />
        </StatisticsCaption>
      </StatisticsIcon>
    </div>
  );
}

export default PostStatistics;
