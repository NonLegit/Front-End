// MUI components
import { Divider, Typography, IconButton } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';

// Compoenets
import VoteIcon from '../../VoteIcons/VoteIcon/VoteIcon';
// import VotedIcon from '../../VoteIcons/VotedIcon/VotedIcon';
// Styles
import { CloseButton, MultiLevelHeaderBox, MultiLevelHeaderVotes } from './Styles';
import theme from '../../../styles/theme';

function MultiLevelHeader(props) {
  const { votes, Title } = props;

  const close = () => {
    // Back to previous Page [Windows History]
    console.log('Closed');
  };

  const upVote = () => {
    console.log('UpVote');
  };

  const downVote = () => {
    console.log('DownVote');
  };
  return (
    <MultiLevelHeaderBox>
      <MultiLevelHeaderVotes>
        <Divider orientation="vertical" flexItem />
        <VoteIcon
          color={theme.palette.secondary?.main}
          direction="up"
          onClick={upVote}
        />
        <Typography variant="p">{votes}</Typography>
        <IconButton onClick={downVote}>
          <VoteIcon
            color={theme.palette.secondary?.main}
            direction="down"
          />
        </IconButton>

        <Divider orientation="vertical" flexItem light />
        {/* <VotedIcon
          color={theme.palette.secondary?.main}
          direction="down"
        /> */}
        <ArticleIcon />
        <Typography variant="p" fontSize="14px">{Title}</Typography>
      </MultiLevelHeaderVotes>
      <CloseButton onClick={close} />
    </MultiLevelHeaderBox>
  );
}

export default MultiLevelHeader;
