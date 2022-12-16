import {
  Box, Divider, Menu, MenuItem,
} from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useContext, useState } from 'react';
import moment from 'moment/moment';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import LockIcon from '@mui/icons-material/Lock';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import { useNavigate } from 'react-router-dom';
import { useEditPostContext } from '../../../../contexts/EditPostContext';
import { UserContext } from '../../../../contexts/UserProvider';

import { CommentText } from '../styles';
import {
  CommentsBoxBlue, CommentsBoxContent, DashedLine, FooterText, ModList, MoreList, ResDivider, SelectItem,
} from './styles';
import { actionComment, deletePostComment } from '../../profileServer';

/**
 * the Body of an comment
 *
 * @component CommentsContent
 * @property {string} points - number of points the comment did get
 * @property {string} time - time of creating the comment
 * @property {string} body - the body paragraph of the comment
 * @returns {React.Component} CommentsContent
 */

function CommentsContent(props) {
  const {
    comment, op, modList, overview, profile, ownerType, owner, postid,
  } = props;
  const { username } = useContext(UserContext);
  const [saved, setSaved] = useState(comment.isSaved);
  const [locked, setLocked] = useState(comment.locked);
  const [spam, setSpam] = useState(comment.modState === 'spam');

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // switch icon to saved post and vice versa
  const handleSave = () => {
    actionComment(comment._id, saved ? 'unsave' : 'save');
    setSaved((prev) => !prev);
  };

  const handleLock = () => {
    actionComment(comment._id, locked ? 'unlock_comments' : 'lock_comments');
    setLocked((prev) => !prev);
  };

  const handleSpam = () => {
    actionComment(comment._id, 'spam');
    setSpam((prev) => !prev);
  };

  const handleDelete = () => {
    deletePostComment('comments', comment._id);
  };

  const navigate = useNavigate();
  const { setEditPost } = useEditPostContext();

  return (
    <CommentsBoxContent>

      <DashedLine />
      {comment.parentType !== 'Post' ? <DashedLine /> : null}
      <CommentsBoxBlue overview={overview}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CommentText variant="caption" coloring="black">
            {username}
            {' '}
          </CommentText>
          {op && (
          <CommentText variant="caption" coloring="#0079d3" sx={{ fontWeight: 700 }}>
            OP
            {' '}
          </CommentText>
          )}
          <CommentText variant="caption" coloring="#787c7e">
            {comment.votes}
            {' '}
            point .
            {' '}
            {(moment.utc(comment.createdAt).local().startOf('seconds')
              .fromNow())}
          </CommentText>
          {locked && <LockIcon sx={{ color: '#ffd635', marginLeft: '3px' }} fontSize="caption" />}
          {spam && <Inventory2Icon sx={{ color: '#ff585b', marginLeft: '3px' }} fontSize="caption" />}
          {comment.modState === 'approved' && <CheckCircleIcon sx={{ color: '#75d377', marginLeft: '3px' }} fontSize="caption" />}
          {comment.modState === 'removed' && <DoDisturbAltIcon sx={{ color: '#ff585b', marginLeft: '3px' }} fontSize="caption" />}
        </Box>
        <Box><CommentText variant="body2" coloring="black">{comment.text}</CommentText></Box>
        <Box sx={{ display: 'flex', alignItems: 'center', height: '24px' }}>
          <CommentText variant="caption" coloring="#787c7e" hover="true" sx={{ fontWeight: 700 }}>Reply</CommentText>
          <CommentText variant="caption" coloring="#787c7e" hover="true" sx={{ fontWeight: 700 }}>Share</CommentText>

          <MoreList onClick={handleClick}>
            <MoreHorizOutlinedIcon />
          </MoreList>
          <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                width: '150px',
                padding: 0,
              },
            }}
            sx={{ '& .MuiButtonBase-root': { padding: '0px 3px' } }}
          >

            <MenuItem>
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
            </MenuItem>

            {profile && (
            <>
              <Divider />

              <MenuItem>
                <SelectItem onClick={() => { setEditPost(true); navigate(`/${ownerType === 'Subreddit' ? 'r' : 'user'}/${owner}/comments/${postid}`); }}>
                  <ModeEditOutlinedIcon sx={{ marginRight: 1 }} />
                  Edit Post
                </SelectItem>

              </MenuItem>
              <Divider />

              <MenuItem>

                <SelectItem onClick={() => { handleDelete(); }}>
                  <DeleteOutlineOutlinedIcon sx={{ marginRight: 1 }} />
                  Delete
                </SelectItem>

              </MenuItem>

              {modList && (
              <ModList responsive3icons={true.toString()}>
                <Divider />
                <MenuItem>

                  <SelectItem>
                    <CheckCircleOutlineOutlinedIcon sx={{ marginRight: 1 }} />
                    Approve
                  </SelectItem>

                </MenuItem>
                <Divider />

                <MenuItem>

                  <SelectItem>
                    <BlockOutlinedIcon sx={{ marginRight: 1 }} />
                    Removed
                  </SelectItem>

                </MenuItem>
                <Divider />
                <MenuItem onClick={handleSpam}>

                  <SelectItem>
                    <CancelPresentationOutlinedIcon sx={{ marginRight: 1 }} />
                    Spam
                  </SelectItem>

                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLock}>

                  <SelectItem>
                    <LockIcon sx={{ marginRight: 1 }} />
                    {locked ? 'Unlock' : 'Lock'}
                  </SelectItem>

                </MenuItem>
              </ModList>
              )}
            </>
            )}

          </Menu>

          {modList && (
          <>
            <ResDivider responsive3icons={true.toString()} orientation="vertical" />
            <MoreList responsive3icons={true.toString()}>
              <CheckCircleOutlineOutlinedIcon fontSize="small" />
              <FooterText variant="caption">Approve</FooterText>
            </MoreList>
            <MoreList responsive3icons={true.toString()}>
              <BlockOutlinedIcon fontSize="small" />
              <FooterText variant="caption">Removed</FooterText>
            </MoreList>
            <MoreList responsive3icons={true.toString()} onClick={handleSpam}>
              <CancelPresentationOutlinedIcon fontSize="small" />
              <FooterText variant="caption">Spam</FooterText>
            </MoreList>
            <MoreList responsive3icons={true.toString()} onClick={handleLock}>
              <LockIcon fontSize="small" />
              <FooterText variant="caption">
                {locked ? 'Unlock' : 'Lock'}
              </FooterText>
            </MoreList>
          </>
          )}
        </Box>
      </CommentsBoxBlue>
    </CommentsBoxContent>
  );
}

export default CommentsContent;
