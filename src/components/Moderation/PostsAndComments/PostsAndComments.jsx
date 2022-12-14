import PostType from './PostType/PostType';
import {
  AboutString, Add, AddFlair, Container,
  Disc, FlexBox, FlexBoxColumn, LeftAlighne, SortString, TotalContainer,
} from './style';
import SuggestionSort from './SuggestionSort/SuggestionSort';

function PostsAndComments() {
  return (
    <TotalContainer>
      <AddFlair><Add>Save Change</Add></AddFlair>
      <LeftAlighne>
        <Container>
          <AboutString>
            Posts and Comment settings
          </AboutString>
          <Disc>posts</Disc>

          <AboutString>
            Post type options
          </AboutString>

          <PostType />

          <Disc marginTop="33px">Comments</Disc>
          <FlexBox>
            <FlexBoxColumn>
              <SortString>
                Suggested sort
              </SortString>
              <Disc>All comment feeds in community will default to this sort setting</Disc>
            </FlexBoxColumn>
            <SuggestionSort />
          </FlexBox>
        </Container>
      </LeftAlighne>
    </TotalContainer>

  );
}
export default PostsAndComments;
