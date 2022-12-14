import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShortcutOutlinedIcon from '@mui/icons-material/ShortcutOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useState } from 'react';
import { ClickAwayListener, Divider } from '@mui/material';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import {
  ElementBox, FooterBox, FooterText, SelectBox, SelectItem,
} from './styles';
/**
 * footer for a post conatining all icons
 *
 * @component OtherProfilePostFooter
 * @property {string} subTitle - to check if a post is a spam or approved
 * @property {string} numberOfComments - get number of comments in the post
 * @returns {React.Component} OtherProfilePostFooter
 */
function OtherProfilePostFooter(props) {
  const { numComments } = props;

  const [showList, setShowList] = useState(false);
  const [saved, setSaved] = useState(false);

  // handle disable the list when click away
  const handleClick = () => {
    setShowList((prev) => !prev);
  };

  const handleSave = () => {
    setSaved((prev) => !prev);
  };

  const handleClickAway = () => {
    setShowList(false);
  };

  return (
    <FooterBox>
      <ElementBox>
        <ChatBubbleOutlineOutlinedIcon />
        <FooterText variant="caption" responsiveshare={true.toString()}>
          {numComments}
          {' '}
          Comments
        </FooterText>
      </ElementBox>
      <ElementBox>
        <ShortcutOutlinedIcon />
        <FooterText variant="caption" responsiveshare={true.toString()}>Share</FooterText>
      </ElementBox>
      {!saved
        ? (
          <ElementBox onClick={() => { handleSave(); }} condition={true.toString()}>
            <BookmarkBorderOutlinedIcon />
            <FooterText variant="caption" responsiveshare={true.toString()}>Save</FooterText>
          </ElementBox>
        )
        : (
          <ElementBox onClick={() => { handleSave(); }} condition={true.toString()}>
            <BookmarksOutlinedIcon />
            <FooterText variant="caption" responsiveshare={true.toString()}>Unsave</FooterText>
          </ElementBox>
        )}

      <ClickAwayListener onClickAway={handleClickAway}>
        <ElementBox>
          <MoreHorizOutlinedIcon onClick={handleClick} data-testid="show-more" />
          {showList && (
          <SelectBox data-testid="more-menu">
            {!saved ? (
              <SelectItem onClick={() => { handleSave(); }} res={true.toString()}>
                <BookmarkBorderOutlinedIcon sx={{ marginRight: 1 }} />
                Save
              </SelectItem>
            )
              : (
                <SelectItem condition={true.toString()} onClick={() => { handleSave(); }} res={true.toString()}>
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
          )}
        </ElementBox>
      </ClickAwayListener>
    </FooterBox>
  );
}

export default OtherProfilePostFooter;
