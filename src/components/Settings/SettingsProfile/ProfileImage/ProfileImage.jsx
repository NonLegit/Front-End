import {
  ContentSubHeader, ContentHeader, Content, Text, SubHeader,
} from '../../styles';

function ProfileImage() {
  return (
    <>
      <SubHeader>
        IMAGES
      </SubHeader>
      <Text>
        <Content>
          <ContentHeader>
            Avatar and banner image
          </ContentHeader>
          <ContentSubHeader>
            Images must be .png or .jpg format
          </ContentSubHeader>
        </Content>
      </Text>
    </>
  );
}

export default ProfileImage;
