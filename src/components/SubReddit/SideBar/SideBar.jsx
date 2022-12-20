import { useState, useEffect } from 'react';
import { SideBarContainer, CommunityContainer } from './style';
import BackHome from './BackHome/BackHome';
import About from './AboutSubReddit/About';
import Moderators from './Moderators/Moderators';
import Flirt from './Flirt/Flirt';
import Moderation from './Mderation/Moderation';
import numFormatter from '../../../utils/MembersNum';
import UserLogin from '../../../authentication';
import Rules from './Rules/Rules';
/**
 * SideBar for subreddit
 * @component
 * @return {React.Component} - SideBar for subreddit
 */
function SideBar(props) {
  const {
    disc, topics, Name, primaryTopic, createdAt, moderatoesName, username, members, rules, createPost,
  } = props;
  console.log('create post flag', createPost);
  const [moderate, setModerate] = useState(false);
  const finalArray = moderatoesName?.map((obj) => obj.userName);
  const num = numFormatter(members);
  const mode = UserLogin(finalArray);
  console.log(mode);
  useEffect(() => {
    if (mode) {
      setModerate(true);
    } else {
      setModerate(false);
    }
  }, [moderatoesName, username, mode]);
  return (
    <SideBarContainer>
      {!moderate
      && (
      <CommunityContainer>
        <About disc={disc} createdAt={createdAt} num={num} Name={Name} createPost={createPost} />
      </CommunityContainer>
      )}
      {moderate && (
      <CommunityContainer>
        <Moderation topics={topics} disc={disc} Name={Name} primaryTopic={primaryTopic} createdAt={createdAt} num={num} createPost={createPost} />
      </CommunityContainer>
      )}
      <CommunityContainer>
        <Rules Name={Name} rules={rules} />
      </CommunityContainer>
      <CommunityContainer>
        <Flirt />
      </CommunityContainer>
      <CommunityContainer sx={{ padding: '0px 12px' }}>
        <Moderators moderatoesName={finalArray} />
      </CommunityContainer>
      {!createPost && <BackHome sx={{ marginTop: -5 }} />}
    </SideBarContainer>
  );
}

export default SideBar;
