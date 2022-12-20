import { Box } from '@mui/material';
import BackHomeBottun from '../../BackHomeBottun/BackHome';
import CommunitiesContainer from '../CommunitiesContainer/CommunitiesContainer';
import SimilarTopics from '../SimilarTopics/SimilarTopics';
import { CommunitiesTabContainer } from './styles';

function CommunitiesTab(props) {
  const { title } = props;

  return (
    <CommunitiesTabContainer>
      <CommunitiesContainer
        title={title}
      />
      <Box>
        <SimilarTopics />
        <BackHomeBottun />
      </Box>
    </CommunitiesTabContainer>
  );
}

export default CommunitiesTab;
