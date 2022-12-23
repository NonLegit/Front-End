import {
  Footer, HeaderLinks, ContainerLinks, Links, EndFooter, FooterLinks,
} from './styles';
/**
 * - footer message in pages
 */
function MessageFooter() {
  return (
    <Footer>
      <FooterLinks>
        <ContainerLinks first="true">
          <HeaderLinks>about</HeaderLinks>
          <Links href="https://www.redditinc.com/blog">
            blog
          </Links>
          <Links href="https://www.redditinc.com/">
            about
          </Links>
          <Links href="https://www.redditforbusiness.com/">
            advertising
          </Links>
          <Links href="https://www.redditinc.com/careers">
            careers
          </Links>
        </ContainerLinks>
        <ContainerLinks>
          <HeaderLinks>help</HeaderLinks>
          <Links href="https://www.redditinc.com/policies/content-policy">
            site rules
          </Links>
          <Links href="https://www.reddithelp.com/hc/en-us">
            Reddit help center
          </Links>
          <Links href="https://www.reddit.com/wiki/reddiquette/">
            reddiquette
          </Links>
          <Links href="https://www.redditinc.com/policies/moderator-code-of-conduct">
            mod guidelines
          </Links>
          <Links href="https://www.reddit.com/contact/">
            contact us
          </Links>
        </ContainerLinks>
        <ContainerLinks>
          <HeaderLinks>apps & tools</HeaderLinks>
          <Links href="https://www.redditinc.com/blog">
            Reddit for iPhone
          </Links>
          <Links href="https://www.redditinc.com/">
            Reddit for Android
          </Links>
          <Links href="https://www.redditforbusiness.com/">
            mobile website
          </Links>
        </ContainerLinks>
        <ContainerLinks>
          <HeaderLinks>{'<3'}</HeaderLinks>
          <Links href="https://www.reddit.com/premium/">
            Reddit premium
          </Links>
          <Links href="https://www.reddit.com/coins/">
            Reddit coins
          </Links>
        </ContainerLinks>
      </FooterLinks>
      <EndFooter>
        Use of this site constitutes acceptance of our
        {' '}
        <Links location="End" href="https://www.reddit.com/help/useragreement">User Agreement</Links>
        {' '}
        and
        {' '}
        <Links location="End" href="https://www.reddit.com/help/privacypolicy">Privacy Policy</Links>
        {' '}
        .
        © 2022 reddit inc. All rights reserved.
      </EndFooter>
      <EndFooter>
        REDDIT and the ALIEN Logo are registered trademarks of reddit inc.
      </EndFooter>
    </Footer>
  );
}

export default MessageFooter;
