import { Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';
import { PostsQueueBox } from './styles';
import CommentsContent from './CommentsContent/CommentsContent';
import CommentsHeader from './CommentsHeader/CommentsHeader';
import { CommunitiesContext } from '../../../contexts/CommunitiesModeratorContext';

/**
 * Content component represents an entity of a comment
 *
 * @component Comments
 * @property {object} comment - conatin all info needed to be shown in the comment
 * @returns {React.Component} Comments
 */

function Comments(props) {
  const {
    entity, profile, noheader, overview,
  } = props;
  const { username } = useParams();
  const { communities } = useContext(CommunitiesContext);
  const [modList, setModList] = useState(false);

  useEffect(() => {
    if (entity.ownerType === 'Subreddit' && communities?.filter((element) => element.fixedName === entity.owner.name).length > 0) {
      setModList(true);
    }
  }, [communities]);

  return (
    <PostsQueueBox>
      <CommentsHeader
        post={entity}
        noheader={noheader}
      />
      <Divider variant="middle" />
      { entity?.comments?.map((comment, index) => (
        <>
          <CommentsContent
            postid={entity?._id}
            key={`${index + 0}`}
            comment={comment}
            op={entity?.author?.name === username}
            modList={modList}
            profile={profile}
            overview={overview}
            ownerType={entity.ownerType}
            owner={entity.owner.name}
          />
          <Divider variant="middle" />
        </>
      ))}

    </PostsQueueBox>

  );
}

export default Comments;
