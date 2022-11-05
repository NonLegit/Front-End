import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useTheme } from '@mui/system';
import { useReducer } from 'react';
import { ReactionIconButton, Votes, Voting } from './styles';

function Reactions({ flexDirection }) {
  const theme = useTheme();
  const reducer = (state, action) => {
    switch (action) {
      case 'upvote':
        return 1;
      case 'downvote':
        return -1;
      default:
        return 0;
    }
  };
  const [reaction, dispatch] = useReducer(reducer, 0);
  return (
    <Voting flexDirection={flexDirection} gap={0.5}>
      {(reaction === 1)
        ? (
          <ReactionIconButton onClick={() => dispatch('cancel upvote')}>
            <ThumbUpIcon
              sx={{
                fontSize: 22,
                color: theme.palette.secondary.main,
              }}
            />
          </ReactionIconButton>
        )
        : (
          <ReactionIconButton onClick={() => dispatch('upvote')}>
            <ThumbUpOutlinedIcon
              sx={{
                fontSize: 22,
                '&:hover': {
                  color: theme.palette.secondary.main,
                },
              }}
            />
          </ReactionIconButton>
        )}
      <Votes color={(reaction === 0 ? '#000' : (reaction === 1 ? theme.palette.secondary.main : theme.palette.primary.main))}>
        {156 + reaction}
      </Votes>
      {(reaction === -1)
        ? (
          <ReactionIconButton onClick={() => dispatch('cancel downvote')}>
            <ThumbDownIcon
              sx={{
                fontSize: 22,
                color: theme.palette.primary.main,
              }}
            />
          </ReactionIconButton>
        )
        : (
          <ReactionIconButton onClick={() => dispatch('downvote')}>
            <ThumbDownOutlinedIcon sx={{
              fontSize: 22,
              '&:hover': {
                color: theme.palette.primary.main,
              },
            }}
            />
          </ReactionIconButton>
        )}
    </Voting>
  );
}

export default Reactions;
