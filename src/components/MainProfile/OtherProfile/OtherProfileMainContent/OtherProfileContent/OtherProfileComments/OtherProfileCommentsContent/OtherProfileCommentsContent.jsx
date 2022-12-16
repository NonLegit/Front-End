import {
  Box, Menu, MenuItem,
} from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useContext, useState } from 'react';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import moment from 'moment/moment';
import { UserContext } from '../../../../../../../contexts/UserProvider';
import { saveComment } from '../../../../../profileServer';
import { CommentText } from '../styles';
import {
  CommentsBoxBlue, CommentsBoxContent, DashedLine, MoreList, SelectItem,
} from './styles';

/**
 * the Body of an comment
 *
 * @component OtherProfileCommentsContent
 * @property {string} points - number of points the comment did get
 * @property {string} time - time of creating the comment
 * @property {string} body - the body paragraph of the comment
 * @returns {React.Component} OtherProfileCommentsContent
 */

function OtherProfileCommentsContent(props) {
  const {
    comment, op,

  } = props;
  const { username } = useContext(UserContext);
  const [saved, setSaved] = useState(comment.isSaved);

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
    saveComment(comment._id, saved ? 'unsave' : 'save', saved);
    setSaved((prev) => !prev);
  };

  return (
    <CommentsBoxContent>
      <DashedLine />
      {comment.parentType !== 'Post' ? <DashedLine /> : null}
      <CommentsBoxBlue>
        <Box sx={{ display: 'flex' }}>
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
                // maxHeight: ITEM_HEIGHT * 4.5,
                width: '150px',
                padding: 0,
              },
            }}
            sx={{ '& .MuiButtonBase-root': { padding: '0px 3px' } }}
          >

            <MenuItem onClick={handleClose}>
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

          </Menu>

        </Box>
      </CommentsBoxBlue>
    </CommentsBoxContent>
  );
}

export default OtherProfileCommentsContent;
