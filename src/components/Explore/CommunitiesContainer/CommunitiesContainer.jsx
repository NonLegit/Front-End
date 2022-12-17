import CommunitiesHeader from '../CommunitiesHeader/CommunitiesHeader';
import Community from '../Community/Community';
import { StyledCommunitiesContainer } from './styles';

function CommunitiesContainer(props) {
  const { title } = props;
  return (
    <StyledCommunitiesContainer>
      <CommunitiesHeader explore={title} />
      <Community />
    </StyledCommunitiesContainer>
  );
}

export default CommunitiesContainer;
