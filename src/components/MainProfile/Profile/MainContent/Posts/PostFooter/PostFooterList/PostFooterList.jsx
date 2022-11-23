import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Divider } from '@mui/material';
import { useState } from 'react';
import { SelectBox, SelectItem } from './styles';
/**
 * List items of post footer
 *
 * @component PostFooterList
 * @returns {React.Component} PostFooterList
 */
function PostFooterList(props) {
  const {
    isSaved,
    nsfw,
    spoiler,
    sendReplies,
  } = props;
  const [saved, setSaved] = useState(isSaved);
  const [isNsfw, setIsNsfw] = useState(nsfw);
  const [isSpoiler, setIsSpoiler] = useState(spoiler);
  const [isSendReplies, setIsSendReplies] = useState(sendReplies);
  const handleSave = () => {
    setSaved((prev) => !prev);
  };
  const handleNsfw = () => {
    setIsNsfw((prev) => !prev);
  };
  const handleSpoiler = () => {
    setIsSpoiler((prev) => !prev);
  };
  const handleSendReplies = () => {
    setIsSendReplies((prev) => !prev);
  };
  return (
    <SelectBox>
      <SelectItem>
        <ModeEditOutlinedIcon sx={{ marginRight: 1 }} />
        Edit Post
      </SelectItem>
      <Divider />
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
      {!isSpoiler ? (
        <SelectItem onClick={() => { handleSpoiler(); }}>
          <CropSquareOutlinedIcon sx={{ marginRight: 1 }} />
          Mark As Spoiler
        </SelectItem>
      )
        : (
          <SelectItem onClick={() => { handleSpoiler(); }}>
            <CheckBoxIcon sx={{ marginRight: 1 }} />
            Mark As Spoiler
          </SelectItem>
        )}
      <Divider />
      {!isNsfw ? (
        <SelectItem onClick={() => { handleNsfw(); }}>
          <CropSquareOutlinedIcon sx={{ marginRight: 1 }} />
          Mark As NSFW
        </SelectItem>
      )
        : (
          <SelectItem onClick={() => { handleNsfw(); }}>
            <CheckBoxIcon sx={{ marginRight: 1 }} />
            Mark As NSFW
          </SelectItem>
        )}

      <Divider />
      {!isSendReplies ? (
        <SelectItem onClick={() => { handleSendReplies(); }}>
          <CropSquareOutlinedIcon sx={{ marginRight: 1 }} />
          Send Me Reply Notifications
        </SelectItem>
      ) : (
        <SelectItem onClick={() => { handleSendReplies(); }}>
          <CheckBoxIcon sx={{ marginRight: 1 }} />
          Send Me Reply Notifications
        </SelectItem>
      )}

    </SelectBox>
  );
}

export default PostFooterList;