import { useState, useContext } from 'react';

import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CreateSocail from '../../../../SocialLinks/SocialLinks';
import { SettingsContext } from '../../../../../contexts/SettingsProvider';
import { socialDelete } from './SocialLinksSettingsServer';
import {
  ContentSubHeader, ContentHeader, Content, Text,
} from '../../../styles';
import {
  AddSocialLinks, BootstrapDialog, Social, PlatformIcon,
} from './styles';
/**
 * -  Socail links settings
 * - Edit Socail links for user
 *  @param {Object} prefs - prefs of user
 *  @param {function} setPrefs - set prefs of user
 *  @property {Boolean} open - Boolean to open or close popup
 *  @property {function} handleDelete - function to delete social link
 *  @property {Boolean} settings - signal to send to social links be true
 *  @property {Object} link - platedrom data to send it to socila links component
 *  @component
 */
function SocialLinksSettings() {
  const {
    prefs, setPrefs,
  } = useContext(SettingsContext);
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(false);
  const [link, setLink] = useState();
  const openSocial = () => {
    console.log(prefs?.socialLinks.length);
    if (prefs?.socialLinks.length < 5) { setOpen(true); }
  };
  const handleDelete = (e, link) => {
    const newSocial = prefs?.socialLinks.filter((e) => e._id !== link._id);
    setPrefs((oldPrefs) => ({ ...oldPrefs, socialLinks: newSocial }));
    socialDelete(link._id);
    e.stopPropagation();
  };
  return (
    <>
      <Text>
        <Content>
          <ContentHeader>
            Social links (5 max)
          </ContentHeader>
          <ContentSubHeader>
            People who visit your profile will see your social links.
          </ContentSubHeader>
        </Content>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {prefs?.socialLinks.map((link, index) => (
            <Social
              key={`${index + 0}`}
              onClick={() => {
                setOpen(true);
                setLink(link);
                setSettings(true);
              }}
            >
              <PlatformIcon src={link?.social?.icon} />
              { link?.displayText }
              <CancelOutlinedIcon onClick={(e) => { handleDelete(e, link); }} />
            </Social>
          )) }
        </Box>
        <AddSocialLinks lenght={prefs?.socialLinks.length < 5} onClick={openSocial}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AddIcon />
            Add social link
          </Box>
        </AddSocialLinks>
      </Text>
      {/* popup component to add social link */}
      <BootstrapDialog
        onClose={(event, reason) => {
          if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
            setOpen(false);
          }
        }}
        aria-labelledby="customized-dialog-title"
        open={open}
        keepMounted
      >
        <CreateSocail
          link={link}
          settings={settings}
          onClose={(event, reason) => {
            if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
              setOpen(false);
              setSettings(false);
            }
          }}
        />
      </BootstrapDialog>
    </>
  );
}
export default SocialLinksSettings;
