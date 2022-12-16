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
import { deletePostComment, postReactionsServer } from '../../../../../profileServer';

/**
 * List items of post footer
 *
 * @component PostFooterList
 * @returns {React.Component} PostFooterList
 */
function PostFooterList(props) {
  const {
    postid,
    isSaved,
    nsfw,
    spoiler,
    sendReplies,
    handleNsfw,
    handleSpoiler,
  } = props;
  const [saved, setSaved] = useState(isSaved);
  const [isSendReplies, setIsSendReplies] = useState(sendReplies);

  const handleSave = () => {
    postReactionsServer(postid, saved ? 'unsave' : 'save', saved);
    setSaved((prev) => !prev);
  };
  const handleHide = () => {
    postReactionsServer(postid, 'hide', 1);
  };

  const handleSendReplies = () => {
    setIsSendReplies((prev) => !prev);
  };
  const handleDelete = () => {
    deletePostComment('posts', postid);
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
      <SelectItem onClick={() => { handleHide(); }}>
        <VisibilityOffOutlinedIcon sx={{ marginRight: 1 }} />
        Hide
      </SelectItem>
      <Divider />
      <SelectItem onClick={() => { handleDelete(); }}>
        <DeleteOutlineOutlinedIcon sx={{ marginRight: 1 }} />
        Delete
      </SelectItem>
      <Divider />
      {!spoiler ? (
        <SelectItem onClick={handleSpoiler}>
          <CropSquareOutlinedIcon sx={{ marginRight: 1 }} />
          Mark As Spoiler
        </SelectItem>
      )
        : (
          <SelectItem onClick={handleSpoiler}>
            <CheckBoxIcon sx={{ marginRight: 1 }} />
            Mark As Spoiler
          </SelectItem>
        )}
      <Divider />
      {!nsfw ? (
        <SelectItem onClick={handleNsfw}>
          <CropSquareOutlinedIcon sx={{ marginRight: 1 }} />
          Mark As NSFW
        </SelectItem>
      )
        : (
          <SelectItem onClick={handleNsfw}>
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
