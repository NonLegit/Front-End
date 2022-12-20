import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShortcutOutlinedIcon from '@mui/icons-material/ShortcutOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import { useEffect, useState } from 'react';
import { ClickAwayListener, Divider } from '@mui/material';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import UnfoldLessOutlinedIcon from '@mui/icons-material/UnfoldLessOutlined';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import {
  ElementBox, FooterBox, FooterText,
} from './styles';
import OtherProfilePostFooterListResponsive from './OtherProfilePostFooterListResponsive/OtherProfilePostFooterListResponsive';
import OtherProfileArrowList from './OtherProfileArrowList/OtherProfileArrowList';
import { postReactionsServer } from '../../../../profileServer';
import ModeratorList from '../../../../ModeratorList/ModeratorList';

import { useEditPostContext } from '../../../../../../contexts/EditPostContext';

/**
 * Footer of the post that contain all icons
 *
 * @component OtherProfilePostFooter
 * @property {function} handleExpand - pass the event to the parent to show the paragraph of the post
 * @property {state} expand - pass a state to the parent to change the icon
 * @property {object} entity - contains all info of the post
 * @returns {React.Component} OtherProfilePostFooter
 */
function OtherProfilePostFooter(props) {
  const {
    postid, numComments, handleExpand, expand, saved, hidden, submitted,
    points, postVoteStatus, isModList, modState, nsfw, spoiler, locked,
    handleLock, handleSpoiler, handleNsfw, handleApprove, handleRemove, handleSpam,
  } = props;
  const [isHidden, setIsHidden] = useState(hidden);
  const [isSaved, setIsSaved] = useState(saved);
  const [showList2, setShowList2] = useState(false);
  const [modList, setModList] = useState(false);
  const [moderatorList, setModeratorList] = useState(false);

  const navigate = useNavigate();
  const { setEditPost, setCommentPost } = useEditPostContext();

  // handle disable the list when click away
  const handleClick2 = () => {
    setShowList2((prev) => !prev);
  };

  const handleClickAway2 = () => {
    setShowList2(false);
  };

  // switch icon to hidden post and vice verse
  const handleClickHide = () => {
    postReactionsServer(postid, hidden ? 'unhide' : 'hide', hidden);
    setIsHidden((prev) => !prev);
  };

  const handleModList = () => {
    setModeratorList((prev) => !prev);
  };

  const handleModListClickAway = () => {
    setModeratorList(false);
  };

  // switch icon to saved post and vice versa
  const handleClickSave = () => {
    postReactionsServer(postid, saved ? 'unsave' : 'save', saved);
    setIsSaved((prev) => !prev);
  };

  const handleShare = () => {
    navigate(`/submit/${postid}`);
  };

  useEffect(() => {
    setIsSaved(saved);
    setIsHidden(hidden);
    setModList(isModList);
  }, [saved, hidden, modList]);

  const publisher = [
    isSaved ? {
      id: 1, text: 'Unsave', icon: <BookmarksOutlinedIcon />, func: handleClickSave,
    } : {
      id: 1, text: 'Save', icon: <BookmarkBorderOutlinedIcon />, func: handleClickSave,
    },
    isHidden ? {
      id: 2, text: 'Unhide', icon: <VisibilityOffIcon />, func: handleClickHide,
    } : {
      id: 2, text: 'Hide', icon: <VisibilityOffOutlinedIcon />, func: handleClickHide,
    },
  ];

  const moderator = [
    {
      id: 1, text: 'Approved', condition: modState === 'approved', icon: <CheckCircleOutlineOutlinedIcon />, func: handleApprove,
    },
    {
      id: 2, text: 'Removed', condition: modState === 'removed', icon: <BlockOutlinedIcon />, func: handleRemove,
    },
    {
      id: 3, text: 'Spam', condition: modState === 'spammed', icon: <CancelPresentationOutlinedIcon />, func: handleSpam,
    },
  ];
  return (
    <FooterBox>
      <OtherProfileArrowList postid={postid} points={points} postVoteStatus={postVoteStatus} />
      <ElementBox>
        {expand ? <UnfoldLessOutlinedIcon sx={{ rotate: '-45deg' }} onClick={() => { handleExpand(); }} />
          : <UnfoldMoreOutlinedIcon sx={{ rotate: '-45deg' }} onClick={() => { handleExpand(); }} />}
      </ElementBox>
      <Divider orientation="vertical" variant="middle" flexItem />
      {/* number of comments and share section */}

      <ElementBox onClick={() => { setCommentPost(true); setEditPost(false); navigate(`/${ownerType === 'Subreddit' ? 'r' : 'user'}/${owner}/comments/${postid}`); }}>
        <ChatBubbleOutlineOutlinedIcon />
        <FooterText variant="caption" responsiveshare={true.toString()}>
          {numComments}
          {' '}
          Comments
        </FooterText>
      </ElementBox>
      <ElementBox onClick={handleShare}>
        <ShortcutOutlinedIcon />
        <FooterText variant="caption" responsiveshare={true.toString()}>Share</FooterText>
      </ElementBox>

      {/* number of comments and share section */}

      {(submitted && modList) && moderator.map((entity) => (
        <ElementBox
          key={entity.id}
          approved={(entity.condition && entity.text === 'Approved')?.toString()}
          spam={(entity.condition && (entity.text === 'Spam' || entity.text === 'Removed'))?.toString()}
          modicons={true.toString()}
          onClick={entity.func}
        >
          {entity.icon}
          <FooterText variant="caption" condition={true.toString()}>{entity.text}</FooterText>
        </ElementBox>
      ))}

      {(submitted && modList) && (
      <>
        <ClickAwayListener onClickAway={handleModListClickAway}>
          <ElementBox>
            <AdminPanelSettingsOutlinedIcon onClick={handleModList} />
            {moderatorList && (
            <ModeratorList
              postid={postid}
              nsfw={nsfw}
              spoiler={spoiler}
              locked={locked}
              handleNsfw={handleNsfw}
              handleSpoiler={handleSpoiler}
              handleLock={handleLock}
            />
            )}
          </ElementBox>
        </ClickAwayListener>
        <ClickAwayListener onClickAway={handleClickAway2}>
          <ElementBox>
            <MoreHorizOutlinedIcon onClick={handleClick2} />
            {showList2 && (
            <OtherProfilePostFooterListResponsive isSaved={isSaved} postid={postid} />
            )}
          </ElementBox>
        </ClickAwayListener>

      </>
      )}

      {(submitted && !modList) && (
      <>
        {publisher.map((entity) => (
          <ElementBox
            key={entity.id}
            onClick={() => { entity.func(); }}
            data-testid={(entity.id === 2) && 'hidden'}
            condition={true.toString()}
          >
            {entity.icon}
            <FooterText variant="caption" condition={true.toString()} data-testid={(entity.id === 2) && 'text-hide'}>{entity.text}</FooterText>
          </ElementBox>
        )) }
        <ElementBox condition={true.toString()}>
          <FlagOutlinedIcon />
          <FooterText variant="caption" condition={true.toString()}>Report</FooterText>
        </ElementBox>

      </>
      )}

      <ClickAwayListener onClickAway={handleClickAway2}>
        <ElementBox show={true.toString()}>
          <MoreHorizOutlinedIcon onClick={handleClick2} />
          {showList2 && (
          <OtherProfilePostFooterListResponsive isSaved={isSaved} postid={postid} />
          )}
        </ElementBox>
      </ClickAwayListener>

    </FooterBox>
  );
}

export default OtherProfilePostFooter;
