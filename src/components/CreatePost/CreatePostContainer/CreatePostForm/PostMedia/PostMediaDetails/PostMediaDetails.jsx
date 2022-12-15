import { Box } from '@mui/system';
import { WordCounter } from '../../styles';
import {
  Caption, PostLink, MediaDetailsContainer, PostMediaDetailsContainer, PostMediaScreenshot, Screenshot,
} from './styles';

function PostMediaDetails(props) {
  const { mediaFile, handleCaptionChange, handlePostLinkChange } = props;
  return (
    <PostMediaDetailsContainer>
      <PostMediaScreenshot>
        <Screenshot src={mediaFile.src} alt="" />
      </PostMediaScreenshot>
      <MediaDetailsContainer>
        <Box
          position="relative"
          display="flex"
          flexDirection="column"
          marginBottom={1.5}
        >
          <Caption
            placeholder="Add a caption..."
            value={mediaFile.caption}
            onChange={handleCaptionChange}
          />
          <WordCounter>
            {mediaFile.caption.length}
            /180
          </WordCounter>
        </Box>

        <PostLink
          placeholder="Add a link..."
          value={mediaFile.link}
          onChange={handlePostLinkChange}
        />
      </MediaDetailsContainer>
    </PostMediaDetailsContainer>
  );
}

export default PostMediaDetails;
