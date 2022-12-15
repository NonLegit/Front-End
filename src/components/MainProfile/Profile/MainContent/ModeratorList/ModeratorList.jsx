import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';

import { Divider } from '@mui/material';
import { useState } from 'react';
import { DividerRes, SelectBox, SelectItem } from './styles';
import { actionOnPost } from '../../../profileServer';

/**
 * list of the functionality of the moderator for smaller screens
 *
 * @component ModeratorList
 * @returns {React.Component} ModeratorList
 */
function ModeratorList({
  postid,
  nsfw,
  spoiler,
  locked,
}) {
  const [isNsfw, setIsNsfw] = useState(nsfw);
  const [isSpoiler, setIsSpoiler] = useState(spoiler);
  const [isLocked, setIsLocked] = useState(locked);
  const handleNsfw = () => {
    actionOnPost(postid, isNsfw ? 'unmark_nsfw' : 'mark_nsfw');
    setIsNsfw((prev) => !prev);
  };
  const handleSpoiler = () => {
    actionOnPost(postid, isSpoiler ? 'unspoiler' : 'spoiler');
    setIsSpoiler((prev) => !prev);
  };
  const handleLock = () => {
    actionOnPost(postid, isLocked ? 'unlock_comments' : 'lock_comments');
    setIsLocked((prev) => !prev);
  };
  return (
    <SelectBox>
      <SelectItem responsive={true.toString()}>
        <CheckCircleOutlineOutlinedIcon sx={{ marginRight: 1 }} />
        Approve
      </SelectItem>
      <DividerRes />
      <SelectItem responsive={true.toString()}>
        <BlockOutlinedIcon sx={{ marginRight: 1 }} />
        Remove
      </SelectItem>
      <DividerRes />
      <SelectItem responsive={true.toString()}>
        <CancelPresentationOutlinedIcon sx={{ marginRight: 1 }} />
        Spam
      </SelectItem>
      <DividerRes />
      <SelectItem>
        <CropSquareOutlinedIcon sx={{ marginRight: 1 }} />
        Distinguish As Mod
      </SelectItem>
      <Divider />
      {!isLocked ? (
        <SelectItem onClick={() => { handleLock(); }}>
          <CropSquareOutlinedIcon sx={{ marginRight: 1 }} />
          Lock Comments
        </SelectItem>
      )
        : (
          <SelectItem onClick={() => { handleLock(); }}>
            <CheckBoxIcon sx={{ marginRight: 1 }} />
            Lock Comments
          </SelectItem>
        )}
      <Divider />
      <SelectItem>
        <CropSquareOutlinedIcon sx={{ marginRight: 1 }} />
        Mark As OC
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
    </SelectBox>
  );
}

export default ModeratorList;
