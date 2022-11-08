import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShortcutOutlinedIcon from '@mui/icons-material/ShortcutOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import { useState } from 'react';
import { ClickAwayListener, Divider } from '@mui/material';

import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import UnfoldLessOutlinedIcon from '@mui/icons-material/UnfoldLessOutlined';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import {
  ElementBox, FooterBox, FooterText, SelectBox, SelectItem,
} from './styles';

function PostFooter(props) {
  const numComments = 0;
  const {
    subTitle, handleExpand, expand, upvoted,
  } = props;

  const [showList, setShowList] = useState(false);
  // handle disable the list when click away
  const handleClick = () => {
    setShowList((prev) => !prev);
  };

  const handleClickAway = () => {
    setShowList(false);
  };

  return (
    <FooterBox>
      <ElementBox>
        {expand ? <UnfoldLessOutlinedIcon sx={{ rotate: '-45deg' }} onClick={() => { handleExpand(); }} />
          : <UnfoldMoreOutlinedIcon sx={{ rotate: '-45deg' }} onClick={() => { handleExpand(); }} />}
      </ElementBox>
      <Divider orientation="vertical" variant="middle" flexItem />
      <ElementBox>
        <ChatBubbleOutlineOutlinedIcon />
        <FooterText variant="caption">{numComments}</FooterText>
      </ElementBox>

      <ElementBox>
        <ShortcutOutlinedIcon />
        <FooterText variant="caption">Share</FooterText>
      </ElementBox>
      <ElementBox condition2={(subTitle === 'Edited').toString()}>
        <CheckCircleOutlineOutlinedIcon />
        <FooterText variant="caption">Approve</FooterText>
      </ElementBox>
      <ElementBox condition={(subTitle === 'Spam').toString()}>
        <BlockOutlinedIcon />
        <FooterText variant="caption">Removed</FooterText>
      </ElementBox>
      <ElementBox>
        <CancelPresentationOutlinedIcon />
        <FooterText variant="caption">Spam</FooterText>
      </ElementBox>
      <ElementBox>
        <AdminPanelSettingsOutlinedIcon />
      </ElementBox>
      {
      !upvoted && (
      <ElementBox>
        <SignalCellularAltOutlinedIcon sx={{ color: '#b279ff' }} />
        <FooterText variant="caption">Insights</FooterText>
      </ElementBox>
      )
      }
      <ClickAwayListener onClickAway={handleClickAway}>
        <ElementBox>
          <MoreHorizOutlinedIcon onClick={handleClick} />
        </ElementBox>

      </ClickAwayListener>
      {showList && (
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
          <PushPinOutlinedIcon sx={{ marginRight: 1 }} />
          Pin Post To Profile
        </SelectItem>
        <Divider />
        <SelectItem>
          <VisibilityOffOutlinedIcon sx={{ marginRight: 1 }} />
          Hide
        </SelectItem>
        <Divider />
        <SelectItem>
          <DeleteOutlineOutlinedIcon sx={{ marginRight: 1 }} />
          Delete
        </SelectItem>
        <Divider />
        <SelectItem>
          <CropSquareOutlinedIcon sx={{ marginRight: 1 }} />
          Mark As OC
        </SelectItem>
        <Divider />
        <SelectItem>
          <CropSquareOutlinedIcon sx={{ marginRight: 1 }} />
          Mark As Spoiler
        </SelectItem>
        <Divider />
        <SelectItem>
          <CropSquareOutlinedIcon sx={{ marginRight: 1 }} />
          Mark As NSFW
        </SelectItem>
        <Divider />
        <SelectItem>
          <CropSquareOutlinedIcon sx={{ marginRight: 1 }} />
          Send Me Reply Notifications
        </SelectItem>

      </SelectBox>
      )}
    </FooterBox>
  );
}

export default PostFooter;
