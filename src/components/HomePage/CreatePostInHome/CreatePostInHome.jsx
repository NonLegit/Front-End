import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Link, useNavigate } from 'react-router-dom';
import {
  AvatarContainer, CreatePostContainer, CustomIconButton, PostTitle, Avatar,
} from './styles';

function CreatePostInHome() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/submit');
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
        onClick={handleClick}
      />
      <Link to="/submit">
        <CustomIconButton color="third">
          <InsertPhotoOutlinedIcon />
        </CustomIconButton>
      </Link>
      <Link to="/submit">
        <CustomIconButton color="third">
          <AttachFileIcon sx={{ transform: 'rotate(45deg)' }} />
        </CustomIconButton>
      </Link>
    </CreatePostContainer>
  );
}

export default CreatePostInHome;
