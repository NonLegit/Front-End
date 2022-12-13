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
import OtherProfilePostFooterListResponsive from './OtherProfilePostFooterListResponsive/OtherProfilePostFooterListResponsive';
import OtherProfileArrowList from './OtherProfileArrowList/OtherProfileArrowList';
import { postReactionsServer } from '../../../../profileServer';

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
    points, postVoteStatus,
  } = props;
  const [isHidden, setIsHidden] = useState(hidden);
  const [isSaved, setIsSaved] = useState(saved);
  const [showList2, setShowList2] = useState(false);

  // handle disable the list when click away
  const handleClick2 = () => {
    setShowList2((prev) => !prev);
  };

  // switch icon to hidden post and vice verse
  const handleClickHide = () => {
    postReactionsServer(postid, hidden ? 'unhide' : 'hide', hidden);
    setIsHidden((prev) => !prev);
  };

  // switch icon to saved post and vice versa
  const handleClickSave = () => {
    postReactionsServer(postid, saved ? 'unsave' : 'save', saved);
    setIsSaved((prev) => !prev);
  };

  useEffect(() => {
    setIsSaved(saved);
    setIsHidden(hidden);
  }, [saved, hidden]);

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

  return (
    <FooterBox>
      <OtherProfileArrowList points={points} postVoteStatus={postVoteStatus} />
      <ElementBox>
        {expand ? <UnfoldLessOutlinedIcon sx={{ rotate: '-45deg' }} onClick={() => { handleExpand(); }} />
          : <UnfoldMoreOutlinedIcon sx={{ rotate: '-45deg' }} onClick={() => { handleExpand(); }} />}
      </ElementBox>
      <Divider orientation="vertical" variant="middle" flexItem />
      {/* number of comments and share section */}
      <ElementBox>
        <ChatBubbleOutlineOutlinedIcon />
        <FooterText variant="caption" responsiveshare={true.toString()}>
          {numComments}
          {!submitted && ' Comments'}
        </FooterText>
      </ElementBox>
      <ElementBox>
        <ShortcutOutlinedIcon />
        <FooterText variant="caption" responsiveshare={true.toString()}>Share</FooterText>
      </ElementBox>

      {/* number of comments and share section */}

      {(submitted) && publisher.map((entity) => (
        <ElementBox
          key={entity.id}
          onClick={() => { entity.func(); }}
          data-testid={(entity.id === 2) && 'hidden'}
          condition={true.toString()}
        >
          {entity.icon}
          <FooterText variant="caption" condition={true.toString()} data-testid={(entity.id === 2) && 'text-hide'}>{entity.text}</FooterText>
        </ElementBox>
      ))}

      <ElementBox condition={true.toString()}>
        <FlagOutlinedIcon />
        <FooterText variant="caption" condition={true.toString()}>Report</FooterText>
      </ElementBox>

      <ElementBox show={true.toString()}>
        <MoreHorizOutlinedIcon onClick={handleClick2} />
        {showList2 && (
        <OtherProfilePostFooterListResponsive isSaved={isSaved} postid={postid} />
        )}
      </ElementBox>

    </FooterBox>
  );
}

export default OtherProfilePostFooter;
