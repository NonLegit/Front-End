import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShortcutOutlinedIcon from '@mui/icons-material/ShortcutOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import { useState } from 'react';
import { ClickAwayListener, Divider } from '@mui/material';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
// import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import { useNavigate } from 'react-router-dom';
import { useEditPostContext } from '../../../../contexts/EditPostContext';
import {
  ElementBox, FooterBox, FooterText, SelectBox, SelectItem,
} from './styles';
import {
  deletePostComment, postReactionsServer,
} from '../../profileServer';
import ModeratorList from '../../ModeratorList/ModeratorList';
import { usePostTypeContext } from '../../../../contexts/PostTypeContext';

/**
 * footer for a post conatining all icons
 *
 * @component PostFooter
 * @property {string} subTitle - to check if a post is a spam or approved
 * @property {string} numberOfComments - get number of comments in the post
 * @returns {React.Component} PostFooter
 */
function PostFooter(props) {
  const {
    postid, numComments, isSaved, subTitle,
    nsfw, spoiler, locked, owner,
    modState, sendReplies, handleLock,
    handleSpoiler, handleNsfw, handleApprove, handleRemove, handleSpam,
    mod, profile,
  } = props;

  const [showList, setShowList] = useState(false);
  const [saved, setSaved] = useState(isSaved);
  const [moderatorList, setModeratorList] = useState(false);
  const [isSendReplies, setIsSendReplies] = useState(sendReplies);

  // handle disable the list when click away
  const handleClick = () => {
    setShowList((prev) => !prev);
  };

  const handleClickAway = () => {
    setShowList(false);
  };

  // switch icon to hidden post and vice verse
  const handleClickHide = () => {
    postReactionsServer(postid, 'hide', 1);
  };

  const handleSendReplies = () => {
    setIsSendReplies((prev) => !prev);
  };
  const handleDelete = () => {
    deletePostComment('posts', postid);
  };

  // switch icon to saved post and vice versa
  const handleSave = () => {
    postReactionsServer(postid, saved ? 'unsave' : 'save', saved);
    setSaved((prev) => !prev);
  };

  const handleModListClickAway = () => {
    setModeratorList(false);
  };

  const handleModList = () => {
    setModeratorList((prev) => !prev);
  };

  const getPostUrl = () => {
    const username = owner;
    if (subTitle === 'User') {
      if (username) {
        return `user/${username}/comments/${postid}`;
      }
      return '';
    }
    return `r/${owner}/comments/${postid}`;
  };

  const { setInitialPostUrl, setInitialPostType } = usePostTypeContext();
  const { REACT_APP_ENV, REACT_APP_WEB_PRO, REACT_APP_WEB_DEV } = process.env;
  const navigate = useNavigate();

  const handleShare = () => {
    setInitialPostUrl((REACT_APP_ENV === 'development' ? REACT_APP_WEB_DEV : REACT_APP_WEB_PRO) + getPostUrl());
    setInitialPostType(3);
    navigate('/submit');
  };

  const { setEditPost } = useEditPostContext();

  return (
    <FooterBox>
      <ElementBox onClick={() => { setCommentPost(true); setEditPost(false); navigate(`/${subTitle === 'Subreddit' ? 'r' : 'user'}/${owner}/comments/${postid}`); }}>
        <ChatBubbleOutlineOutlinedIcon />
        <FooterText variant="caption" responsiveshare={true.toString()}>
          {numComments}
          {profile ? '' : 'Comments'}
        </FooterText>
      </ElementBox>

      <ElementBox onClick={handleShare}>
        <ShortcutOutlinedIcon />
        <FooterText variant="caption" responsiveshare={true.toString()}>Share</FooterText>
      </ElementBox>

      {mod
      && (
      <>
        <ElementBox condition2={(modState === 'approved') && 'true'} responsive3icons={true.toString()} onClick={handleApprove}>
          <CheckCircleOutlineOutlinedIcon />
          <FooterText variant="caption" responsiveapprove={true.toString()}>{(modState === 'approved') ? 'Approved' : 'Approve'}</FooterText>
        </ElementBox>
        <ElementBox condition={(modState === 'removed') && 'true'} responsive3icons={true.toString()} onClick={handleRemove}>
          <BlockOutlinedIcon />
          <FooterText variant="caption" responsiveapprove={true.toString()}>{(modState === 'removed') ? 'Removed' : 'Remove'}</FooterText>
        </ElementBox>
        <ElementBox condition={(modState === 'spammed') && 'true'} responsive3icons={true.toString()} onClick={handleSpam}>
          <CancelPresentationOutlinedIcon />
          <FooterText variant="caption" responsive={true.toString()}>{(modState === 'spam') ? 'Spammed' : 'Spam'}</FooterText>
        </ElementBox>

        <ClickAwayListener onClickAway={handleModListClickAway}>
          <ElementBox>
            <AdminPanelSettingsOutlinedIcon onClick={handleModList} />
            {moderatorList && (
            <ModeratorList
              postid={postid}
              nsfw={nsfw}
              spoiler={spoiler}
              locked={locked}
              handleLock={handleLock}
              handleSpoiler={handleSpoiler}
              handleNsfw={handleNsfw}
              handleApprove={handleApprove}
              handleRemove={handleRemove}
              handleSpam={handleSpam}
            />
            )}
          </ElementBox>
        </ClickAwayListener>
      </>
      )}
      {profile && (
      <ElementBox responsive={true.toString()}>
        <SignalCellularAltOutlinedIcon sx={{ color: '#b279ff' }} />
        <FooterText variant="caption">Insights</FooterText>
      </ElementBox>
      )}

      {(!mod) && (
      <ElementBox onClick={() => { handleSave(); }} saveresponsive={true.toString()}>
        {!saved ? <BookmarkBorderOutlinedIcon /> : <BookmarksOutlinedIcon />}
        <FooterText variant="caption" responsiveshare={true.toString()}>{!saved ? 'Save' : 'Unsave'}</FooterText>
      </ElementBox>
      )}

      <ClickAwayListener onClickAway={handleClickAway}>
        <ElementBox>
          <MoreHorizOutlinedIcon onClick={handleClick} data-testid="show-more" />
          {(showList && profile) && (
          <SelectBox data-testid="more-menu" profile="false">
            {!mod && (
            <SelectItem onClick={() => { setEditPost(true); navigate(`/${subTitle === 'Subreddit' ? 'r' : 'user'}/${owner}/comments/${postid}`); }}>
              <ModeEditOutlinedIcon sx={{ marginRight: 1 }} />
              Edit Post
            </SelectItem>
            )}
            {mod && (
              <SelectItem condition={!saved && 'true'} onClick={() => { handleSave(); }}>
                {!saved
                  ? (
                    <>
                      <BookmarkBorderOutlinedIcon sx={{ marginRight: 1 }} />
                      Save
                    </>
                  ) : (
                    <>
                      <BookmarksOutlinedIcon sx={{ marginRight: 1 }} />
                      Unsave
                    </>
                  )}
              </SelectItem>
            )}
            <Divider />
            <SelectItem onClick={() => { handleClickHide(); }}>
              <VisibilityOffOutlinedIcon sx={{ marginRight: 1 }} />
              Hide
            </SelectItem>
            <Divider />
            <SelectItem onClick={() => { handleDelete(); }}>
              <DeleteOutlineOutlinedIcon sx={{ marginRight: 1 }} />
              Delete
            </SelectItem>
            <Divider />
            <SelectItem onClick={() => { handleSpoiler(); }}>
              {!spoiler ? <CropSquareOutlinedIcon sx={{ marginRight: 1 }} /> : <CheckBoxIcon sx={{ marginRight: 1 }} />}
              Mark As Spoiler
            </SelectItem>
            <Divider />
            <SelectItem onClick={() => { handleNsfw(); }}>
              {!nsfw ? <CropSquareOutlinedIcon sx={{ marginRight: 1 }} /> : <CheckBoxIcon sx={{ marginRight: 1 }} />}
              Mark As NSFW
            </SelectItem>

            <Divider />
            <SelectItem onClick={() => { handleSendReplies(); }}>
              {!isSendReplies ? <CropSquareOutlinedIcon sx={{ marginRight: 1 }} /> : <CheckBoxIcon sx={{ marginRight: 1 }} />}
              Send Me Reply Notifications
            </SelectItem>

          </SelectBox>
          )}
          {(showList && !profile) && (
          <SelectBox data-testid="more-menu" profile="true">
            {mod && (
              <SelectItem condition={!saved && 'true'} onClick={() => { handleSave(); }}>
                {!saved
                  ? (
                    <>
                      <BookmarkBorderOutlinedIcon sx={{ marginRight: 1 }} />
                      Save
                    </>
                  ) : (
                    <>
                      <BookmarksOutlinedIcon sx={{ marginRight: 1 }} />
                      Unsave
                    </>
                  )}
              </SelectItem>
            )}
            <Divider />
            <SelectItem onClick={() => { handleClickHide(); }}>
              <VisibilityOffOutlinedIcon sx={{ marginRight: 1 }} />
              Hide
            </SelectItem>
            <Divider />
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

export default PostFooter;
