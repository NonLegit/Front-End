import {
  Caption, PostLink, MediaDetailsContainer, PostMediaDetailsContainer, PostMediaScreenshot, Screenshot,
} from './styles';

function PostMediaDetails(props) {
  const { src } = props;
  return (
    <PostMediaDetailsContainer>
      <PostMediaScreenshot>
        <Screenshot src={src} alt="" />
      </PostMediaScreenshot>
      <MediaDetailsContainer>
        <Caption placeholder="Add a caption..." />
        <PostLink placeholder="Add a link..." />
      </MediaDetailsContainer>
    </PostMediaDetailsContainer>
  );
}

export default PostMediaDetails;
