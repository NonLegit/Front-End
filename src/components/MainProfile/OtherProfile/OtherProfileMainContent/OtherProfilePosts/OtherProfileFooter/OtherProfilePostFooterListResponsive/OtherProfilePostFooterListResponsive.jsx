import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

import { Divider } from '@mui/material';
import { useState } from 'react';
import { SelectBox, SelectItem } from './styles';

/**
 * resposive list of the post footer
 *
 * @component OtherProfilePostFooterListResponsive
 * @returns {React.Component} OtherProfilePostFooterListResponsive
 */
function OtherProfilePostFooterListResponsive(props) {
  const { isSaved } = props;
  const [saved, setSaved] = useState(isSaved);
  const handleClick = () => {
    setSaved((prev) => !prev);
  };
  return (
    <SelectBox>
      <SelectItem>
        <CardGiftcardIcon sx={{ marginRight: 1 }} />
        Give Award
      </SelectItem>
      <Divider />
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
      <SelectItem>
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
