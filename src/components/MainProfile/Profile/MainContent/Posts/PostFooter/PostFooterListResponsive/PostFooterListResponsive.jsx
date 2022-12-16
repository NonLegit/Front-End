import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'; import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';

import { Divider } from '@mui/material';
import { useState } from 'react';
import { SelectBox, SelectItem } from './styles';
import { postReactionsServer } from '../../../../../profileServer';

/**
 * resposive list of the post footer
 *
 * @component PostFooterListResponsive
 * @returns {React.Component} PostFooterListResponsive
 */
function PostFooterListResponsive(props) {
  const { postid, isSaved } = props;
  const [saved, setSaved] = useState(isSaved);
  const handleSave = () => {
    postReactionsServer(postid, saved ? 'unsave' : 'save', saved);
    setSaved((prev) => !prev);
  };
  const handleHide = () => {
    postReactionsServer(postid, 'hide', 1);
  };
  return (
    <SelectBox>

      {!saved ? (
        <SelectItem onClick={() => { handleSave(); }}>
          <BookmarkBorderOutlinedIcon sx={{ marginRight: 1 }} />
          Save
        </SelectItem>
      )
        : (
          <SelectItem condition={true.toString()} onClick={() => { handleSave(); }}>
            <BookmarksOutlinedIcon sx={{ marginRight: 1 }} />
            Unsave
          </SelectItem>
        )}
      <Divider />
      <SelectItem onClick={() => { handleHide(); }}>
        <VisibilityOffOutlinedIcon sx={{ marginRight: 1 }} />
        Hide
      </SelectItem>
      <Divider />
      <SelectItem>
        <FlagOutlinedIcon sx={{ marginRight: 1 }} />
        Report
      </SelectItem>
    </SelectBox>
  );
}

export default PostFooterListResponsive;
