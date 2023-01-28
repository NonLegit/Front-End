import { useTheme } from '@mui/system';
import { useReducer } from 'react';

// Styles
import { ReactionIconButton, Votes, Voting } from './styles';
import VoteIcon from '../../../../../../VoteIcons/VoteIcon/VoteIcon';
import VotedIcon from '../../../../../../VoteIcons/VotedIcon/VotedIcon';

/**
 * Votes Reaction on Comment
 * @property {boolean}votes --No of Votes on the Comment
 * @returns {React.Component} Email Form
 */
function CommentReactions(props) {
  const {
    votes, commentVoteStatus,
  } = props;
  //   const {
  //     votes, commentVoteStatus, commentId,
  //   } = props;

  const theme = useTheme();
  const reducer = (state, action) => {
    switch (action) {
      case 'upvote':
        // postReactionsServer(postId, 'vote', 1);
        return 1;
      case 'downvote':
        // postReactionsServer(postId, 'vote', -1);
        return -1;
      default:
        // postReactionsServer(postId, 'vote', 0);
        return 0;
    }
  };
  const [reaction, dispatch] = useReducer(reducer, commentVoteStatus);
  return (
    <Voting
      flexDirection="row"
      gap={0.5}
    >
      {(reaction === 1)
        ? (
          <ReactionIconButton
            onClick={() => dispatch('cancel upvote')}
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
        {votes + reaction - commentVoteStatus}
      </Votes>
      {(reaction === -1)
        ? (
          <ReactionIconButton
            onClick={() => dispatch('cancel downvote')}
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

export default CommentReactions;
