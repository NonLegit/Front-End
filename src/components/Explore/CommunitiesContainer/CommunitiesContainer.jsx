/* eslint-disable import/no-cycle */
import * as React from 'react';
import CommunitiesHeader from '../CommunitiesHeader/CommunitiesHeader';
import Community from '../Community/Community';
import { StyledCommunitiesContainer } from './styles';
import { exploreCommunities } from './CommunitiesTabServer';
import ExploreHeader from '../ExploreHeader/ExploreHeader';

export const headerSubTitleContext = React.createContext();

function CommunitiesContainer(props) {
  const { title } = props;
  const [communities] = exploreCommunities(title);
  const { headerSubTitle } = communities.type;
  return (
    <StyledCommunitiesContainer>
      <CommunitiesHeader explore={title} />
      {
      communities.map((commuity) => {
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
