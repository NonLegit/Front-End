import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';

import { Divider } from '@mui/material';
import { DividerRes, SelectBox, SelectItem } from './styles';

/**
 * list of the functionality of the moderator for smaller screens
 *
 * @component ModeratorList
 * @returns {React.Component} ModeratorList
 */
function ModeratorList() {
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
      <SelectItem>
        <CropSquareOutlinedIcon sx={{ marginRight: 1 }} />
        Lock Comments
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
    </SelectBox>
  );
}

export default ModeratorList;
