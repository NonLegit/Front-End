import AddIcon from '@mui/icons-material/Add';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Box } from '@mui/material';
import { NsfwButton, OptionButton, SpoilerButton } from './styles';
/**
 * This component is post tags
 *
 * @component PostTags
 * @property {boolean} spoiler -Check whether the post is spoiler or not.
 * @property {function} hanldeSpoiler -function to handle click on spoiler button
 * @property {boolean} nswf -Check whether the post is not safe for work or not.
 * @property {function} hanldeNsfw -function to handle click on nsfw button
 * @returns {React.Component} Join button
 */

function PostTags(props) {
  const {
    spoiler, hanldeSpoiler, nswf, hanldeNsfw,
  } = props;
  return (
    <Box display="flex" mx={2} mb={2} gap={1}>
      <SpoilerButton
        variant="outlined"
        color="third"
        onClick={hanldeSpoiler}
        spoiler={spoiler}
        data-testid="spoiler button"
      >
        <AddIcon
          sx={{
            fontSize: 27,
            marginRight: 0.6,
          }}
        />
        spoiler
      </SpoilerButton>
      <NsfwButton
        color="third"
        variant={!nswf ? 'outlined' : ''}
        onClick={hanldeNsfw}
        nswf={nswf}
        data-testid="nsfw button"
      >
        <AddIcon
          sx={{
            fontSize: 27,
            marginRight: 0.6,
          }}
        />
        NSFW
      </NsfwButton>
      <OptionButton
        color="third"
        variant="outlined"
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
