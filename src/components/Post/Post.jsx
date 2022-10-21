import { useTheme } from '@mui/system';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
// import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { PostContainer, Voting, Votes } from './styles';

function Post() {
  const theme = useTheme();
  console.log(theme);
  return (
    <PostContainer my={2}>
      <Voting>
        <ThumbUpOutlinedIcon />
        <Votes my={1}>
          15.2k
        </Votes>
        <ThumbDownOutlinedIcon />
      </Voting>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio harum dicta libero natus nihil ullam, reprehenderit excepturi. Quae mollitia ipsa, culpa voluptate modi qui hic architecto. Eveniet, quos nesciunt!
      </div>
    </PostContainer>
  );
}

export default Post;
