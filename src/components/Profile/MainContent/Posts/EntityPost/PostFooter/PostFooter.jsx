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
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
  ElementBox, FooterBox, FooterText, SelectBox, SelectItem,
} from './styles';

function PostFooter(props) {
  const numComments = 0;
  const {
    approved, removed, spam, handleExpand, expand, voted, postedByOthers, saved, hidden,
  } = props;
  const [isHidden, setIsHidden] = useState(hidden);
  const [isSaved, setIsSaved] = useState(saved);
  const [showList, setShowList] = useState(false);
  // handle disable the list when click away
  const handleClick = () => {
    setShowList((prev) => !prev);
  };

  const handleClickAway = () => {
    setShowList(false);
  };

  const handleClickHide = () => {
    setIsHidden((prev) => !prev);
  };

  const handleClickSave = () => {
    setIsSaved((prev) => !prev);
  };

  const moderator = [
    {
      id: 1, text: 'Approved', condition: approved, icon: <CheckCircleOutlineOutlinedIcon />,
    },
    {
      id: 2, text: 'Removed', condition: removed, icon: <BlockOutlinedIcon />,
    },
    {
      id: 3, text: 'Spam', condition: spam, icon: <CancelPresentationOutlinedIcon />,
    },
    {
      id: 4, text: '', condition: false, icon: <AdminPanelSettingsOutlinedIcon />,
    },
  ];
  const publisher = [
    {
      id: 1, text: 'Edit Post', icon: <ModeEditOutlinedIcon />,
    },
    isSaved ? {
      id: 2, text: 'Unsave', icon: <BookmarksOutlinedIcon />, func: true,
    } : {
      id: 2, text: 'Save', icon: <BookmarkBorderOutlinedIcon />, func: true,
    },
    isHidden ? {
      id: 3, text: 'Unhide', icon: <VisibilityOffIcon />, func: false,
    } : {
      id: 3, text: 'Hide', icon: <VisibilityOffOutlinedIcon />, func: false,
    },
  ];

  return (
    <FooterBox>
      <ElementBox>
        {expand ? <UnfoldLessOutlinedIcon sx={{ rotate: '-45deg' }} onClick={() => { handleExpand(); }} />
          : <UnfoldMoreOutlinedIcon sx={{ rotate: '-45deg' }} onClick={() => { handleExpand(); }} />}
      </ElementBox>
      <Divider orientation="vertical" variant="middle" flexItem />
      <ElementBox>
        <ChatBubbleOutlineOutlinedIcon />
        <FooterText variant="caption" responsiveshare={true.toString()}>{numComments}</FooterText>
      </ElementBox>
      <ElementBox>
        <ShortcutOutlinedIcon />
        <FooterText variant="caption" responsiveshare={true.toString()}>Share</FooterText>
      </ElementBox>
      {(!voted) && moderator.map((entity) => (
        <ElementBox
          key={entity.id}
          approved={(entity.condition && entity.text === 'Approved').toString()}
          spam={(entity.condition && (entity.text === 'Spam' || entity.text === 'Removed')).toString()}
        >
          {entity.icon}
          <FooterText variant="caption" condition={true.toString()}>{entity.text}</FooterText>
        </ElementBox>
      ))}
      {(!voted) && (
      <ElementBox condition2={true.toString()}>
        <SignalCellularAltOutlinedIcon sx={{ color: '#b279ff' }} />
        <FooterText variant="caption">Insights</FooterText>
      </ElementBox>
      )}

      {(voted) && publisher.map((entity) => (
        <ElementBox
          key={entity.id}
          onClick={entity.func ? () => { handleClickSave(); } : () => { handleClickHide(); }}
        >
          {entity.icon}
          <FooterText variant="caption" condition={true.toString()}>{entity.text}</FooterText>
        </ElementBox>
      ))}

      {postedByOthers ? (
        <ElementBox>
          <FlagOutlinedIcon />
          <FooterText variant="caption" condition={true.toString()}>Report</FooterText>
        </ElementBox>
      ) : (
        <ClickAwayListener onClickAway={handleClickAway}>
          <ElementBox>
            <MoreHorizOutlinedIcon onClick={handleClick} />
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
          </ElementBox>
        </ClickAwayListener>
      )}

    </FooterBox>
  );
}

export default PostFooter;
