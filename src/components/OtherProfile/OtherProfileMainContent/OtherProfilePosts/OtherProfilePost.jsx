import { Box } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useState, useContext, useEffect } from 'react';

import {
  EmptyImage,
  PostContentBox,
  PostsQueueBox,
  TitlePost,
} from './styles';
import OtherProfilePostSide from './OtherProfilePostSide/OtherProfilePostSide';
import OtherProfilePostHeader from './OtherProfilePostHeader/OtherProfilePostHeader';
import OtherProfilePostFooter from './OtherProfileFooter/OtherProfilePostFooter';
import { UserContext } from '../../../../context/UserProvider';

/**
 * the post that appear in posts - saved - hidden - upvoted - downvotep taps
 *
 * @component OtherProfilePost
 * @property {object} entity - an entity conatins all post informations
 * @property {string} type -subTitle of the page
 * @returns {React.Component} OtherProfilePost
 */
function OtherProfilePost(props) {
  const {
    entity,
    type,
  } = props;
  const [expand, setExpand] = useState();
  const [subTitle, setSubTitle] = useState(type);
  const { username } = useContext(UserContext);
  const handleExpand = () => {
    setExpand((prev) => !prev);
  };
  useEffect(() => {
    setSubTitle(type);
  }, [type]);
  return (
    <PostsQueueBox>
      <OtherProfilePostSide points={entity?.votes} postVoteStatus={entity?.postVoteStatus} />

      <Box sx={{ marginLeft: 6 }}>
        <Box sx={{ display: 'flex' }}>
          <EmptyImage>
            <ArticleOutlinedIcon fontSize="small" color="disabled" />
          </EmptyImage>
          <PostContentBox>
            <Box sx={{ marginLeft: 1 }}>
              <TitlePost variant="h6">{entity.title}</TitlePost>
              <OtherProfilePostHeader
                subReddit={entity.ownerType}
                nameUser={username}
                Time={entity.createdAt}
              />
              <OtherProfilePostFooter
                subTitle={entity.ownerType}
                handleExpand={handleExpand}
                expand={expand}
                submitted={subTitle === undefined}
                saved={entity.isSaved}
                hidden={entity.isHidden}
                numComments={entity.commentCount}
              />
            </Box>
          </PostContentBox>
        </Box>
        {expand && <Box>{entity.text}</Box>}
      </Box>
    </PostsQueueBox>
  );
}

export default OtherProfilePost;
