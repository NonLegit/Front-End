import PostSide from '../../../../MainProfile/Posts/PostSide/PostSide';
import { SidebarQueue, SidebarQueueBox } from './styles';

/**
 * sidebar of the post
 *
 * @component SideBarQueue
 * @property {string} subTitle - the subtitle of the page
 * @property {string} postid - post id to make an action
 * @property {number} points - number of votes in the post
 * @returns {React.Component} SideBarQueue
 */

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
