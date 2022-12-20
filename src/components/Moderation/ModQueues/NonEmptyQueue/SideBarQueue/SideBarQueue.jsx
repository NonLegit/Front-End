import PostSide from '../../../../MainProfile/Posts/PostSide/PostSide';
import { SidebarQueue, SidebarQueueBox } from './styles';

function SideBarQueue(props) {
  const { subTitle, postid, points } = props;
  return (
    <SidebarQueueBox>
      <SidebarQueue condition={(subTitle === 'spammed').toString()}>
        <PostSide postid={postid} points={points} postVoteStatus={subTitle} />
      </SidebarQueue>

    </SidebarQueueBox>
  );
}

export default SideBarQueue;
