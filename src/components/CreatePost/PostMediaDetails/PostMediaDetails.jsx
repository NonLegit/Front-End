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
        <Caption placeholder="Add a caption..." value={mediaFile.caption} onChange={handleCaptionChange} />
        <PostLink placeholder="Add a link..." value={mediaFile.link} onChange={handlePostLinkChange} />
      </MediaDetailsContainer>
    </PostMediaDetailsContainer>
  );
}

export default PostMediaDetails;
