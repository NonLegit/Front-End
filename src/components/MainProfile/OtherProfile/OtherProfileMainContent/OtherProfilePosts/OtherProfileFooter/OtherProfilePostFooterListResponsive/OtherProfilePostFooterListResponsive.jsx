import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';

import { Divider } from '@mui/material';
import { useState } from 'react';
import { SelectBox, SelectItem } from './styles';
import { postReactionsServer } from '../../../../../profileServer';

/**
 * resposive list of the post footer
 *
 * @component OtherProfilePostFooterListResponsive
 * @returns {React.Component} OtherProfilePostFooterListResponsive
 */
function OtherProfilePostFooterListResponsive(props) {
  const { postid, isSaved } = props;
  const [saved, setSaved] = useState(isSaved);
  const handleClick = () => {
    postReactionsServer(postid, saved ? 'unsave' : 'save', saved);
    setSaved((prev) => !prev);
  };
  const handleClickHide = () => {
    postReactionsServer(postid, 'hide', 1);
  };
  return (
    <SelectBox>
      {!saved ? (
        <SelectItem onClick={() => { handleClick(); }}>
          <BookmarkBorderOutlinedIcon sx={{ marginRight: 1 }} />
          Save
        </SelectItem>
      )
        : (
          <SelectItem condition={true.toString()} onClick={() => { handleClick(); }}>
            <BookmarksOutlinedIcon sx={{ marginRight: 1 }} />
            Unsave
          </SelectItem>
        )}
      <Divider />
      <SelectItem onClick={() => { handleClickHide(); }}>
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

export default OtherProfilePostFooterListResponsive;
