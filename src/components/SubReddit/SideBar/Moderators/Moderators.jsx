import MailOutlineIcon from '@mui/icons-material/MailOutline'; import {
  AboutCountainer, AboutString, CustomLink, Button, Container, Name, Data, ViewAll, ViewAllContainer,
} from './style';
/**
 * Moderators section in sidebar
 * @component
 * @return {React.Component} - Moderators section in sidebar
 */
function Moderators(props) {
  const { moderatoesName } = props;
  return (
    <>
      <AboutCountainer>
        <AboutString>
          Moderators
        </AboutString>
      </AboutCountainer>
      <CustomLink>
        <Button variant="outlined" padding="4px" fontSize={15} fontWeight="bold" sx={{ m: 1.8 }}>
          <MailOutlineIcon sx={{ margin: '2px' }} />
          {' '}
          Message the Mods
        </Button>
      </CustomLink>
      { moderatoesName?.map((entity, index) => (
        <Container key={`${index + 0}`}>
          <Name>
            u/
            {entity.name}
          </Name>
          <Data>
            {entity.browsIt}
            {' '}
            browse it
          </Data>
        </Container>
      ))}
      <ViewAllContainer>
        <ViewAll>VIEW ALL MODERATORS</ViewAll>
      </ViewAllContainer>
    </>
  );
}

export default Moderators;
