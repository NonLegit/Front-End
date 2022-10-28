import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import ShortcutOutlinedIcon from '@mui/icons-material/ShortcutOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { ElementBox, FooterBox, FooterText } from './styles';

function FooterQueue(props) {
  const numComments = 0;
  const { subTitle } = props;
  return (
    <FooterBox>
      <ElementBox>
        <ChatBubbleOutlineOutlinedIcon />
        <FooterText variant="caption">{numComments}</FooterText>
      </ElementBox>
      <ElementBox>
        <CardGiftcardOutlinedIcon />
        <FooterText variant="caption">Award</FooterText>
      </ElementBox>
      <ElementBox>
        <ShortcutOutlinedIcon />
        <FooterText variant="caption">Share</FooterText>
      </ElementBox>
      <ElementBox condition2={(subTitle === 'Edited').toString()}>
        <CheckCircleOutlineOutlinedIcon />
        <FooterText variant="caption">Approve</FooterText>
      </ElementBox>
      <ElementBox condition={(subTitle === 'Spam').toString()}>
        <BlockOutlinedIcon />
        <FooterText variant="caption">Removed</FooterText>
      </ElementBox>
      <ElementBox>
        <AdminPanelSettingsOutlinedIcon />
      </ElementBox>
      <ElementBox>
        <MoreHorizOutlinedIcon />
      </ElementBox>

    </FooterBox>
  );
}

export default FooterQueue;
