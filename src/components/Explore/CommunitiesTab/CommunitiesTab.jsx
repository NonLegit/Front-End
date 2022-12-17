import CommunitiesContainer from '../CommunitiesContainer/CommunitiesContainer';
import SimilarTopics from '../SimilarTopics/SimilarTopics';
import { CommunitiesTabContainer } from './styles';

function CommunitiesTab(props) {
  const { title } = props;
  return (
    <CommunitiesTabContainer>
      <CommunitiesContainer title={title} />
      <SimilarTopics />
    </CommunitiesTabContainer>
  );
}

export default CommunitiesTab;
