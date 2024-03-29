import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import {
  AvatarContainer, CreatePostContainer, CustomIconButton, PostTitle, CustomAvatar, CustomLink,
} from './styles';
import { usePostTypeContext } from '../../../../contexts/PostTypeContext';
/**
 * This component is the link between home page and create post page
 * @component CreatePostInHome
 *
 * @property {number} subredditName - creat post from a spacific subreddit or not
 *
 * @returns {React.Component} User avatar
 * @returns {React.Component} Inputs redirect user to create post page
 */

function CreatePostInHome(props) {
  const { subredditName } = props;
  const [cookies] = useCookies(['redditUser']);
  const navigate = useNavigate();
  const { setInitialPostType } = usePostTypeContext();
  /**
   * this function to redirect user to create post page
   */
  const handleClick = (postType) => {
    navigate(subredditName ? `/submit/r/${subredditName}` : '/submit');
    setInitialPostType(postType);
  };
  return (
    <CreatePostContainer>
      <AvatarContainer>
        <CustomLink to={`/user/${cookies.redditUser?.userName}`}>
          <CustomAvatar
            src={cookies.redditUser?.profilePicture}
            alt="avatar"
          >
            u/
          </CustomAvatar>
        </CustomLink>
      </AvatarContainer>
      <PostTitle
        type="text"
        placeholder="Create Post"
        onClick={() => handleClick(0)}
      />
      <Link
        to={subredditName ? `/submit/r/${subredditName}` : '/submit'}
        onClick={() => handleClick(1)}
      >
        <CustomIconButton color="third">
          <InsertPhotoOutlinedIcon />
        </CustomIconButton>
      </Link>
      <Link
        to={subredditName ? `/submit/r/${subredditName}` : '/submit'}
        onClick={() => handleClick(3)}
      >
        <CustomIconButton color="third">
          <AttachFileIcon sx={{ transform: 'rotate(45deg)' }} />
        </CustomIconButton>
      </Link>
    </CreatePostContainer>
  );
}

export default CreatePostInHome;
