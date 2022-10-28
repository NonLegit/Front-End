import { useParams } from 'react-router-dom';
import {
  Header,
  HeaderAvatar,
  HeaderAvatarText,
  HeaderLink,
  HeaderSubpage,
  HeaderText,
  HeaderToolbar,
} from './styles';

function ModerationHeader() {
  const { subReddit, subTitle } = useParams();
  return (
    <Header color="common" position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <HeaderToolbar variant="dense">
        <HeaderAvatar>
          <HeaderAvatarText>r/</HeaderAvatarText>
        </HeaderAvatar>
        <HeaderText>
          <HeaderLink href="/" underline="none">
            r/
            {subReddit}
          </HeaderLink>
          <HeaderSubpage>
          &nbsp;/&nbsp;
            {subTitle}
          </HeaderSubpage>
        </HeaderText>
      </HeaderToolbar>
    </Header>
  );
}

export default ModerationHeader;
