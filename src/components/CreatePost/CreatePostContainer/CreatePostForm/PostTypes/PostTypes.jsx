import { Divider } from '@mui/material';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useEffect, useState } from 'react';
import { CustomTab, CustomTabs } from './styles';
/**
 * This component contains the tabs of post types
 *
 * @component PostTypes
 * @property {function} postType -Post type (text, image, video and url).
 * @property {function} handlePostType -Hanlding post type.
 * @returns {React.Component} tabs of post types
 */

function PostTypes(props) {
  const { postType, handlePostType } = props;
  const [lastMediaType, setLastMediaType] = useState(postType === 2 ? 2 : 1);
  useEffect(() => {
    if (postType === 2 || postType === 1) {
      setLastMediaType(postType);
    }
  }, [postType]);

  return (
    <CustomTabs
      value={postType}
      onChange={handlePostType}
    >
      <CustomTab
        icon={<PostAddOutlinedIcon />}
        iconPosition="start"
        label="post"
        value={0}
        data-testid="text"
      />
      <Divider
        orientation="vertical"
        flexItem
        light
      />
      <CustomTab
        icon={<ImageOutlinedIcon />}
        iconPosition="start"
        label="images & videos"
        value={lastMediaType}
        data-testid="media"
      />
      <Divider
        orientation="vertical"
        flexItem
        light
      />
      <CustomTab
        icon={(
          <AttachFileIcon
            sx={{ transform: 'rotate(45deg)' }}
          />
)}
        iconPosition="start"
        label="link"
        value={3}
        data-testid="url"
      />
    </CustomTabs>
  );
}

export default PostTypes;
