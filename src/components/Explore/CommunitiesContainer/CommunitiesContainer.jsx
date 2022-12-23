import { useEffect } from 'react';
import { useHeaderSubtitleContext } from '../../../contexts/HeaderSubtitleContext';
import CommunitiesHeader from '../CommunitiesHeader/CommunitiesHeader';
import Community from '../Community/Community';
import { StyledCommunitiesContainer } from './styles';
import { exploreCommunities } from './CommunitiesTabServer';

/**
 * communities and their header
 * @component
 * @property {string} title title of the communities
 * @return {React.Component} - communities and their header
 */

function CommunitiesContainer(props) {
  const { title } = props;
  const [communities] = exploreCommunities(title);
  const { setHeaderSubtitle } = useHeaderSubtitleContext();
  useEffect(() => {
    setHeaderSubtitle(communities?.type);
    console.log('fady', communities?.type);
  }, [communities]);
  return (
    <StyledCommunitiesContainer>
      <CommunitiesHeader explore={title} />
      {
      communities?.data?.map((commuity) => {
        console.log(commuity);
        const {
          _id, name, picture, membersCount, description,
        } = commuity;
        console.log(_id);
        return (
          <Community
            communityName={name}
            communityPicture={picture}
            numOfMembers={membersCount}
            description={description}
          />
        );
      })
    }
    </StyledCommunitiesContainer>
  );
}

export default CommunitiesContainer;
