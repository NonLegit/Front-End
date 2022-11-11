import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShortcutOutlinedIcon from '@mui/icons-material/ShortcutOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import { useEffect, useState } from 'react';
import { Divider } from '@mui/material';

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
import PostFooterListResponsive from './PostFooterListResponsive/PostFooterListResponsive';
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
    handleExpand,
    expand,
    postedByOthers,
    saved,
    hidden,
    submitted,
  } = props;
  const [isHidden, setIsHidden] = useState(hidden);
  const [isSaved, setIsSaved] = useState(saved);
  // const [showList, setShowList] = useState(false);
  const [showList2, setShowList2] = useState(false);
  // handle disable the list when click away
  // const handleClick = () => {
  //   setShowList((prev) => !prev);
  // };

  // const handleClickAway = () => {
  //   setShowList(false);
  // };

  // handle disable the list when click away
  const handleClick2 = () => {
    setShowList2((prev) => !prev);
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

  const publisher = [
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

      <ElementBox condition={true.toString()}>
        <FlagOutlinedIcon />
        <FooterText variant="caption" condition={true.toString()}>Report</FooterText>
      </ElementBox>

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
