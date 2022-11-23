import { useState, useEffect } from 'react';
import { SideBarContainer, CommunityContainer } from './style';
import BackHome from './BackHome/BackHome';
import About from './AboutSubReddit/About';
import Moderators from './Moderators/Moderators';
import Flirt from './Flirt/Flirt';
import Moderation from './Mderation/Moderation';
/**
 * SideBar for subreddit
 * @component
 * @return {React.Component} - SideBar for subreddit
 */
function SideBar(props) {
  const {
    disc, topics, Name, primaryTopic, createdAt, moderatoesName, username,
  } = props;
  const [moderate, setModerate] = useState(false);
  useEffect(() => {
    if (moderatoesName?.indexOf(username) === -1) {
      setModerate(false);
    } else {
      setModerate(true);
    }
  }, [moderatoesName]);
  return (
    <SideBarContainer>
      {!moderate
      && (
      <CommunityContainer>
        <About disc={disc} createdAt={createdAt} />
      </CommunityContainer>
      )}
      {moderate && (
      <CommunityContainer>
        <Moderation topics={topics} disc={disc} Name={Name} primaryTopic={primaryTopic} createdAt={createdAt} />
      </CommunityContainer>
      )}
      <CommunityContainer>
        <Flirt />
      </CommunityContainer>
      <CommunityContainer sx={{ padding: '0px 12px' }}>
        <Moderators moderatoesName={moderatoesName} />
      </CommunityContainer>
      <BackHome sx={{ marginTop: -5 }} />
    </SideBarContainer>
  );
}

export default SideBar;
