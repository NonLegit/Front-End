import { useTheme } from '@mui/system';
import { useReducer } from 'react';
import { ReactionIconButton, Votes, Voting } from './styles';
import VoteIcon from '../../VoteIcons/VoteIcon/VoteIcon';
import VotedIcon from '../../VoteIcons/VotedIcon/VotedIcon';
import postReactionsServer from '../postReactionsServer';
/**
 * This component is the container of reactions
 *
 * @component Reactions
 * @property {string} flexDirection -The direction of reactions (vertical or horizontal).
 * @property {number} votes -Number of post votes.
 * @property {number} postId -The Id of the current post.
 * @property {boolean} viewpost -To differentiate between post and view post.
 * @returns {React.Component}  Upvote and downvote only.
 */

function Reactions(props) {
  const {
    flexDirection, votes, postVoteStatus, postId, viewpost,
  } = props;
  console.log('vote status', postVoteStatus, postId);
  const theme = useTheme();
  const reducer = (state, action) => {
    switch (action) {
      case 'upvote':
        postReactionsServer(postId, 'vote', 1);
        return 1;
      case 'downvote':
        postReactionsServer(postId, 'vote', -1);
        return -1;
      default:
        postReactionsServer(postId, 'vote', 0);
        return 0;
    }
  };
  const [reaction, dispatch] = useReducer(reducer, postVoteStatus);
  return (
    <Voting
      flexDirection={flexDirection}
      gap={0.5}
      viewpost={viewpost}
    >
      {(reaction === 1)
        ? (
          <ReactionIconButton
            onClick={() => dispatch('cancel upvote')}
            data-testid="upvoted button"
          >
            <VotedIcon
              color={theme.palette.secondary?.main}
              direction="up"
            />
          </ReactionIconButton>
        )
        : (
          <ReactionIconButton
            onClick={() => dispatch('upvote')}
            data-testid="upvote button"
          >
            <VoteIcon
              color={theme.palette.secondary?.main}
              direction="up"
            />
          </ReactionIconButton>
        )}
      <Votes color={(reaction === 0 ? '#000' : (reaction === 1 ? theme.palette.secondary?.main : theme.palette.primary?.main))}>
        {votes + reaction - postVoteStatus}
      </Votes>
      {(reaction === -1)
        ? (
          <ReactionIconButton
            onClick={() => dispatch('cancel downvote')}
            data-testid="downvoted button"
          >
            <VotedIcon
              color={theme.palette.primary?.main}
              direction="down"
            />
          </ReactionIconButton>
        )
        : (
          <ReactionIconButton
            onClick={() => dispatch('downvote')}
            data-testid="downvote button"
          >
            <VoteIcon
              color={theme.palette.primary?.main}
              direction="down"
              data-testid="downvote"
            />
          </ReactionIconButton>
        )}
    </Voting>
  );
}

export default Reactions;
