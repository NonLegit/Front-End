import { Divider } from '@mui/material';
import {
  Column, Footer, Row,
} from './styles';
/**
 * This component is the footer of the page
 *
 * @component HomePageFooter
 * @returns {React.Component} Footer
 */

function HomePageFooter() {
  return (
    <Footer>
      <Row>
        <Column>
          User Agreement
        </Column>
        <Column>
          Content Policy
        </Column>
        <Column>
          Privacy Policy
        </Column>
        <Column>
          Moderator Code Of Conduct
        </Column>
      </Row>
      <Divider sx={{ mb: 1 }} />
      <Row>
        <Column>
          English
        </Column>
        <Column>
          Français
        </Column>
        <Column>
          Italiano
        </Column>
        <Column>
          Deutsch
        </Column>
        <Column>
          Español
        </Column>
        <Column>
          Português
        </Column>
      </Row>
      <Divider sx={{ mb: 1 }} />
      <div>
        Reddit Inc © 2022. All rights reserved
      </div>
    </Footer>
  );
}

export default HomePageFooter;
