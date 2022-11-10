import {
  UpArrow, DownArrow, SidebarQueueBox, UpArrowFilled, DownArrowFilled, Number,
} from './styles';

/** Sidebar of the post conatining arrow up and down
 * @return {React.Component} - Filter
 * @param {boolean} upvoted - show if the comment is upvoted
 * @param {boolean} downvoted - show if the comment is downvoted
 */
function PostSide(props) {
  const { upvoted, downvoted } = props;
  return (
    <SidebarQueueBox>
      {upvoted ? <UpArrowFilled /> : <UpArrow />}
      <Number variant="caption" upvoted={upvoted.toString()} downvoted={downvoted.toString()}>1</Number>
      {downvoted ? <DownArrowFilled /> : <DownArrow />}
    </SidebarQueueBox>
  );
}

export default PostSide;
