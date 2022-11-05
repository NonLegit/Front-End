import MailOutlineIcon from '@mui/icons-material/MailOutline'; import {
  AboutCountainer, AboutString, CustomLink, Button, Container, Name, Data,
  ViewAll, ViewAllContainer,
} from './style';

function Moderators() {
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
      <Container>
        <Name>u/Lulzorr</Name>
        <Data>3:20 browse it</Data>
      </Container>
      <Container>
        <Name>u/Lulzorr</Name>
        <Data>3:20 browse it</Data>
      </Container>
      <Container>
        <Name>u/Lulzorr</Name>
        <Data>3:20 browse it</Data>
      </Container>
      <ViewAllContainer>
        <ViewAll>VIEW ALL MODERATORS</ViewAll>
      </ViewAllContainer>
    </>
  );
}

export default Moderators;
// , backgroundColor: '#0079d3', color: 'white'
