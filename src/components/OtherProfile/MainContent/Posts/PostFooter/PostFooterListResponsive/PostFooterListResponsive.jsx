import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';

import { Divider } from '@mui/material';
import { SelectBox, SelectItem } from './styles';

/**
 * resposive list of the post footer
 *
 * @component PostFooterListResponsive
 * @returns {React.Component} PostFooterListResponsive
 */
function PostFooterListResponsive() {
  return (
    <SelectBox>
      <SelectItem>
        <ModeEditOutlinedIcon sx={{ marginRight: 1 }} />
        Edit Post
      </SelectItem>
      <Divider />
      <SelectItem>
        <BookmarkBorderOutlinedIcon sx={{ marginRight: 1 }} />
        Save
      </SelectItem>
      <Divider />
      <SelectItem>
        <VisibilityOffOutlinedIcon sx={{ marginRight: 1 }} />
        Hide
      </SelectItem>
    </SelectBox>
  );
}

export default PostFooterListResponsive;
