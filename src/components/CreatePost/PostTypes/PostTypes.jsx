import { Divider } from '@mui/material';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { CustomTab, CustomTabs } from './styles';

function PostTypes(props) {
  const { postType, handlePostType } = props;
  return (
    <CustomTabs value={postType} onChange={handlePostType}>
      <CustomTab icon={<PostAddOutlinedIcon />} iconPosition="start" label="post" value={0} />
      <Divider orientation="vertical" flexItem light />
      <CustomTab icon={<ImageOutlinedIcon />} iconPosition="start" label="images & videos" value={1} />
      <Divider orientation="vertical" flexItem light />
      <CustomTab icon={<AttachFileIcon sx={{ transform: 'rotate(45deg)' }} />} iconPosition="start" label="link" value={2} />
    </CustomTabs>
  );
}

export default PostTypes;
