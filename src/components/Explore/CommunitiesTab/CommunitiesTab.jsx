import { Box } from '@mui/material';
import BackHomeBottun from '../../BackHomeBottun/BackHome';
import CommunitiesContainer from '../CommunitiesContainer/CommunitiesContainer';
import SimilarTopics from '../SimilarTopics/SimilarTopics';
import { CommunitiesTabContainer } from './styles';

/**
 * the whole page of communities
 * @component
 * @property {string} title the title of the communities section
 * @return {React.Component} - communities page
 */

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
