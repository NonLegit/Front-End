import { Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';
import { PostsQueueBox } from './styles';
import CommentsContent from './CommentsContent/CommentsContent';
import CommentsHeader from './CommentsHeader/CommentsHeader';
import { CommunitiesContext } from '../../../contexts/CommunitiesModeratorContext';

/**
 * Comments component shows all comments over a post
 *
 * @component Comments
 * @property {object} entity - conatin all info about the post and the list of comments needed to be shown
 * @property {boolean} profile - a signal indecates whether i was in the profile or not
 * @property {boolean} noheader - a signal ensure to remove the header of the post if the post is already shown
 * @property {boolean} overview - a signal indecates whether the comment was in overview page or not
 * @returns {React.Component} Comments
 */

function Comments(props) {
  const {
    entity, profile, noheader, overview,
  } = props;
  const { username } = useParams();
  const { communities } = useContext(CommunitiesContext);
  const [modList, setModList] = useState(false);

  /**
   * the useState below used to ensure whether the comment was in a subreddit i moderator in or not
   */

  useEffect(() => {
    console.log(entity);
    if (entity?.ownerType === 'Subreddit' && communities?.filter((element) => element.fixedName === entity?.owner.name).length > 0) {
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
            key={`${index + 0}`}
            postid={entity?._id}
            comment={comment}
            op={entity?.author?.name === username}
            modList={modList}
            profile={profile}
            overview={overview}
            ownerType={entity?.ownerType}
            owner={entity?.owner.name}
          />
          <Divider variant="middle" />
        </>
      ))}

    </PostsQueueBox>

  );
}

export default Comments;
