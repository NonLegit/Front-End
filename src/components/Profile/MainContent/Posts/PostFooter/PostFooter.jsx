import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShortcutOutlinedIcon from '@mui/icons-material/ShortcutOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import { useEffect, useState } from 'react';
import { ClickAwayListener, Divider } from '@mui/material';

import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import UnfoldLessOutlinedIcon from '@mui/icons-material/UnfoldLessOutlined';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
  ElementBox, FooterBox, FooterText,
} from './styles';
import PostFooterList from './PostFooterList/PostFooterList';
import PostFooterListResponsive from './PostFooterListResponsive/PostFooterListResponsive';
import ModeratorList from './ModeratorList/ModeratorList';

/**
 * Footer of the post that contain all icons
 *
 * @component PostFooter
 * @property {function} handleExpand - pass the event to the parent to show the paragraph of the post
 * @property {state} expand - pass a state to the parent to change the icon
 * @property {object} entity - contains all info of the post
 * @returns {React.Component} PostFooter
 */
function PostFooter(props) {
  const {
    numComments,
    approved,
    removed,
    spam,
    handleExpand,
    expand,
    postedByOthers,
    saved,
    hidden,
    submitted,
  } = props;
  const [isHidden, setIsHidden] = useState(hidden);
  const [isSaved, setIsSaved] = useState(saved);
  const [showList, setShowList] = useState(false);
  const [showList2, setShowList2] = useState(false);
  const [moderatorList, setModeratorList] = useState(false);
  // handle disable the list when click away
  const handleClick = () => {
    setShowList((prev) => !prev);
  };

  const handleClickAway = () => {
    setShowList(false);
  };

  // handle disable the list when click away
  const handleClick2 = () => {
    setShowList2((prev) => !prev);
  };

  // const handleClickAway2 = () => {
  //   setShowList2(false);
  // };

  const handleModList = () => {
    setModeratorList((prev) => !prev);
  };

  const handleModListClickAway = () => {
    setModeratorList(false);
  };

  // switch icon to hidden post and vice verse
  const handleClickHide = () => {
    setIsHidden((prev) => !prev);
  };

  // switch icon to saved post and vice versa
  const handleClickSave = () => {
    setIsSaved((prev) => !prev);
  };

  useEffect(() => {
    setIsSaved(saved);
    setIsHidden(hidden);
  }, [saved, hidden]);

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
  ];
  const publisher = [
    {
      id: 1, text: 'Edit Post', icon: <ModeEditOutlinedIcon />,
    },
    isSaved ? {
      id: 2, text: 'Unsave', icon: <BookmarksOutlinedIcon />, func: handleClickSave,
    } : {
      id: 2, text: 'Save', icon: <BookmarkBorderOutlinedIcon />, func: handleClickSave,
    },
    isHidden ? {
      id: 3, text: 'Unhide', icon: <VisibilityOffIcon />, func: handleClickHide,
    } : {
      id: 3, text: 'Hide', icon: <VisibilityOffOutlinedIcon />, func: handleClickHide,
    },
  ];

  return (
    <FooterBox>
      <ElementBox>
        {expand ? <UnfoldLessOutlinedIcon sx={{ rotate: '-45deg' }} onClick={() => { handleExpand(); }} />
          : <UnfoldMoreOutlinedIcon sx={{ rotate: '-45deg' }} onClick={() => { handleExpand(); }} />}
      </ElementBox>
      <Divider orientation="vertical" variant="middle" flexItem />
      {/* number of comments and share section */}
      <ElementBox>
        <ChatBubbleOutlineOutlinedIcon />
        <FooterText variant="caption" responsiveshare={true.toString()}>{numComments}</FooterText>
      </ElementBox>
      <ElementBox>
        <ShortcutOutlinedIcon />
        <FooterText variant="caption" responsiveshare={true.toString()}>Share</FooterText>
      </ElementBox>
      {/* number of comments and share section */}

      {/* approve remove spam icons */}
      {(submitted) && moderator.map((entity) => (
        <ElementBox
          key={entity.id}
          approved={(entity.condition && entity.text === 'Approved')?.toString()}
          spam={(entity.condition && (entity.text === 'Spam' || entity.text === 'Removed'))?.toString()}
          modicons={true.toString()}
        >
          {entity.icon}
          <FooterText variant="caption" condition={true.toString()}>{entity.text}</FooterText>
        </ElementBox>
      ))}
      {/* approve remove spam icons */}

      {/* admin */}

      <ClickAwayListener onClickAway={handleModListClickAway}>
        <ElementBox>
          <AdminPanelSettingsOutlinedIcon onClick={handleModList} />
          {moderatorList && (
          <ModeratorList />
          )}
        </ElementBox>
      </ClickAwayListener>

      {/* admin */}

      {(submitted) && (
      <ElementBox condition2={true.toString()}>
        <SignalCellularAltOutlinedIcon sx={{ color: '#b279ff' }} />
        <FooterText variant="caption">Insights</FooterText>
      </ElementBox>
      )}

      {/* insights */}

      {(!submitted) && publisher.map((entity) => (
        <ElementBox
          key={entity.id}
          onClick={() => { entity.func(); }}
          data-testid={(entity.id === 3) && 'hidden'}
          condition={true.toString()}
        >
          {entity.icon}
          <FooterText variant="caption" condition={true.toString()} data-testid={(entity.id === 3) && 'text-hide'}>{entity.text}</FooterText>
        </ElementBox>
      ))}

      {postedByOthers ? (
        <ElementBox condition={true.toString()}>
          <FlagOutlinedIcon />
          <FooterText variant="caption" condition={true.toString()}>Report</FooterText>
        </ElementBox>
      ) : (
        <ClickAwayListener onClickAway={handleClickAway}>
          <ElementBox>
            <MoreHorizOutlinedIcon onClick={handleClick} />
            {showList && (
              <PostFooterList />
            )}
          </ElementBox>
        </ClickAwayListener>
      )}

      {postedByOthers && (
      <ElementBox show={true.toString()}>
        <MoreHorizOutlinedIcon onClick={handleClick2} />
        {showList2 && (
        <PostFooterListResponsive />
        )}
      </ElementBox>
      )}

    </FooterBox>
  );
}

export default PostFooter;
