import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import { Divider } from '@mui/material';
import { DividerRes, SelectBox, SelectItem } from './styles';

/**
 * list of the functionality of the moderator for smaller screens
 *
 * @component ModeratorList
 * @returns {React.Component} ModeratorList
 */
function ModeratorList({
  nsfw,
  spoiler,
  locked,
  handleLock,
  handleSpoiler,
  handleNsfw,
  handleApprove,
  handleRemove,
  handleSpam,
}) {
  return (
    <SelectBox>
      <SelectItem responsive={true.toString()} onClick={handleApprove}>
        <CheckCircleOutlineOutlinedIcon sx={{ marginRight: 1 }} />
        Approve
      </SelectItem>
      <DividerRes />
      <SelectItem responsive={true.toString()} onClick={handleRemove}>
        <BlockOutlinedIcon sx={{ marginRight: 1 }} />
        Remove
      </SelectItem>
      <DividerRes />
      <SelectItem responsive={true.toString()} onClick={handleSpam}>
        <CancelPresentationOutlinedIcon sx={{ marginRight: 1 }} />
        Spam
      </SelectItem>
      <DividerRes />
      <SelectItem>
        <CropSquareOutlinedIcon sx={{ marginRight: 1 }} />
        Distinguish As Mod
      </SelectItem>
      <Divider />
      {!locked ? (
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
      {!spoiler ? (
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
      {!nsfw ? (
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
