import AddIcon from '@mui/icons-material/Add';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Box } from '@mui/material';
import { OptionButton } from './styles';

function PostTags() {
  return (
    <Box display="flex" mx={2} mb={2} gap={1}>
      <OptionButton
        color="third"
        variant="outlined"
        padding="3px 16px"
        fontSize={14}
        fontWeight="bold"
      >
        <AddIcon
          sx={{
            fontSize: 27,
            marginRight: 0.6,
          }}
        />
        spoiler
      </OptionButton>
      <OptionButton
        color="third"
        variant="outlined"
        padding="3px 16px"
        fontSize={14}
        fontWeight="bold"
      >
        <AddIcon
          sx={{
            fontSize: 27,
            marginRight: 0.6,
          }}
        />
        NSFW
      </OptionButton>
      <OptionButton
        color="third"
        variant="outlined"
        padding="3px 16px"
        fontSize={14}
        fontWeight="bold"
        disabled
      >
        <LocalOfferOutlinedIcon
          sx={{
            marginRight: 1,
            transform: 'scalex(-1)',
          }}
        />
        flair
        <KeyboardArrowDownOutlinedIcon />
      </OptionButton>
    </Box>
  );
}

export default PostTags;
