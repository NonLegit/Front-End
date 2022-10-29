import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Box } from '@mui/material';
import { OCHelperText, OptionButton } from './styles';

function PostTags(props) {
  const { OC, handleOC } = props;
  return (
    <>
      <Box display="flex" mx={2} mb={2} gap={1}>
        <OptionButton
          color={(OC ? 'secondary' : 'third')}
          variant={(OC ? 'contained' : 'outlined')}
          padding="3px 16px"
          fontSize={14}
          fontWeight="bold"
          onClick={handleOC}
        >
          {OC ? (
            <CheckIcon sx={{
              fontSize: 27,
              marginRight: 0.6,
            }}
            />
          ) : (
            <AddIcon
              sx={{
                fontSize: 27,
                marginRight: 0.6,
              }}
            />
          )}
          OC
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
      {OC ? (
        <OCHelperText>
          Use the OC tag if you want to take credit for your post as Original Content.
        </OCHelperText>
      ) : null}
    </>
  );
}

export default PostTags;
