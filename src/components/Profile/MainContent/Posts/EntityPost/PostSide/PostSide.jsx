import {
  UpArrow, DownArrow, SidebarQueueBox, UpArrowFilled, DownArrowFilled, Number,
} from './styles';

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
