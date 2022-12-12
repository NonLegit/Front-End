import AddIcon from '@mui/icons-material/Add';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import {
  Box, useMediaQuery, useTheme,
} from '@mui/material';
import { useState } from 'react';
import {
  CustomTooltip, NsfwButton, OptionButton, SpoilerButton,
} from './styles';
import Flairs from './Flairs/Flairs';
import flairsServer from './flairsServer';
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
    spoiler, hanldeSpoiler, nswf, hanldeNsfw, setFlair, subreddit, flair, communityName,
  } = props;
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('sm'));

  // states
  const [openFlairs, setOpenFlairs] = useState(false);

  // services
  const [flairs, flairsError] = flairsServer(subreddit);
  // console.log('flairs', flairs);

  // handlers
  const handleOpenFlairs = (value) => {
    setOpenFlairs(value);
    // console.log('value', value);
  };
  // console.log(flair);
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      mx={2}
      mb={2}
      gap={1}
      justifyContent={match ? 'center' : 'flex-start'}
    >
      <CustomTooltip
        title="Mark as a spoiler"
        placement="top"
        arrow
        disableInteractive
        leaveTouchDelay={0}
        enterDelay={500}
        enterNextDelay={500}
      >
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
      </CustomTooltip>
      <CustomTooltip
        title="Mark as Not Safe For Work"
        placement="top"
        arrow
        disableInteractive
        leaveTouchDelay={0}
        enterDelay={500}
        enterNextDelay={500}
      >
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
      </CustomTooltip>
      <CustomTooltip
        title={flairs ? (flair ? 'Change or remove flair' : 'Add flair') : 'Not available for this community'}
        placement="top"
        arrow
        disableInteractive
        leaveTouchDelay={0}
        enterDelay={500}
        enterNextDelay={500}
      >
        <Box
          display="flex"
          sx={{
            cursor: 'not-allowed',
          }}
        >
          <OptionButton
            color={!flair ? 'third' : ''}
            variant={!flair ? 'outlined' : ''}
            onClick={() => handleOpenFlairs(true)}
            disabled={!subreddit || flairsError || !flairs}
            flair={flair}
          >
            <LocalOfferOutlinedIcon
              sx={{
                marginRight: 1,
                transform: 'scalex(-1)',
              }}
            />
            <Box sx={{
              maxWidth: 130,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            >
              {flair ? flair.text : 'flair' }
            </Box>
            <KeyboardArrowDownOutlinedIcon />
          </OptionButton>
        </Box>
      </CustomTooltip>
      <Flairs
        open={openFlairs}
        handleOpenFlairs={handleOpenFlairs}
        setFlair={setFlair}
        flairs={flairs}
        flair={flair}
        communityName={communityName}
      />
    </Box>
  );
}

export default PostTags;
