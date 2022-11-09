import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Link, useNavigate } from 'react-router-dom';
import {
  AvatarContainer, CreatePostContainer, CustomIconButton, PostTitle, Avatar,
} from './styles';
import { usePostTypeContext } from '../../../contexts/PostTypeContext';
/**
 * This component is the link between home page and create post page
 * @component CreatePostInHome
 * @returns {React.Component} User avatar
 * @returns {React.Component} Inputs redirect user to create post page
 */

function CreatePostInHome() {
  const navigate = useNavigate();
  const { setInitialPostType } = usePostTypeContext();
  const handleClick = (postType) => {
    navigate('/submit');
    setInitialPostType(postType);
  };
  return (
    <CreatePostContainer>
      <AvatarContainer>
        <Link to="/">
          <Avatar src="https://styles.redditmedia.com/t5_758ciw/styles/profileIcon_snoodd8b11a2-0e4a-4403-a861-a9fa7474b850-headshot.png?width=256&height=256&crop=256:256,smart&s=bc53006491e647452f185afa69775cd6a241598c" alt="avatar" />
        </Link>
      </AvatarContainer>
      <PostTitle
        type="text"
        placeholder="Create Post"
        onClick={() => handleClick(0)}
      />
      <Link
        to="/submit"
        onClick={() => handleClick(1)}
      >
        <CustomIconButton color="third">
          <InsertPhotoOutlinedIcon />
        </CustomIconButton>
      </Link>
      <Link
        to="/submit"
        onClick={() => handleClick(2)}
      >
        <CustomIconButton color="third">
          <AttachFileIcon sx={{ transform: 'rotate(45deg)' }} />
        </CustomIconButton>
      </Link>
    </CreatePostContainer>
  );
}

export default CreatePostInHome;
