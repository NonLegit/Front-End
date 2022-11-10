import { useState, useEffect } from 'react';
import { SideBarContainer, CommunityContainer } from './style';
import BackHome from './BackHome/BackHome';
import About from './AboutSubReddit/About';
import Moderators from './Moderators/Moderators';
import Flirt from './Flirt/Flirt';
import Moderation from './Mderation/Moderation';

function SideBar() {
  const [moderate, setModerate] = useState(false);
  useEffect(() => {
    setModerate(true);
  }, []);
  return (
    <SideBarContainer>
      {!moderate
      && (
      <CommunityContainer>
        <About />
      </CommunityContainer>
      )}
      {moderate && (
      <CommunityContainer>
        <Moderation />
      </CommunityContainer>
      )}
      <CommunityContainer>
        <Flirt />
      </CommunityContainer>
      <CommunityContainer sx={{ padding: '0px 12px' }}>
        <Moderators />
      </CommunityContainer>
      <BackHome sx={{ marginTop: -5 }} />
    </SideBarContainer>
  );
}

export default SideBar;
