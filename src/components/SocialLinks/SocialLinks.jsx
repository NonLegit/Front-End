import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography } from '@mui/material';
import { allSocialLinks, postSocialLink } from './socialLinksServer';
import {
  InputBox, SaveBtn, Text, PlatformIcon,
} from './styles';
/**
 *@component
 * @property {Array} links - Array of links
 * @property {Boolean} openDialog2 - bool to choose which window open
 * @property {Object} platform - data of plateform choose
 * @property {Boolean} condition - condition if valid we submit or not
 * @property {string} text - url or  user name
 * @property {Boolean} error - true if we have invalid domin or username
 * @property {string} msg - massage if we have error
 * @property {Boolean} url - true if plate form have link and display name
 * @property {Boolean} edit - true if it's first time to edit text
 * @property {string} title - title of link
 * @property {Function} handleOpenPlatform - function to open window to edit data platedform
 * @property {Function} handleClose -  function to close window to edit data platedform
 * @property {Function} checkSubmission - function to check data before submit
 * @property {Function} handelchange - function to handle input from user
 *  @param {Function} onClose - function when close window
 *  @param {Boolean} settings - bool too know if we in settings page or not
 *  @param {Object} link - data of plateform we choose in settings
 */
function SocialLinks({
  onClose, settings, link,
}) {
  const [links] = allSocialLinks();
  const [openDialog2, setDialog2] = useState(false);
  const [platform, setPlatform] = useState(null);
  const [condition, setCondition] = useState(false);
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState('');
  const [url, setUrl] = useState(false);
  const [edit, setEdit] = useState(true);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (settings) {
      setDialog2(true);
      setPlatform(link?.social);
      if (link?.social.placeholderLink.includes('https://')) {
        setText(link?.userLink);
        setTitle(link?.displayText);
      } else {
        let textlink = link?.userLink.replace(link?.social.baseLink, '');
        textlink = textlink.replace(/^/, link?.social.check);
        console.log(textlink);
        console.log(link?.userLink);
        setText(textlink);
        setTitle(link?.displayText);
      }
      setUrl(link?.social.placeholderLink.includes('https://'));
    }
  }, [settings]);

  useEffect(() => {
    if (url) {
      if (text.length >= 1 && title.length > 0) {
        setCondition(true);
      } else { setCondition(false); }
    } else if (text.length >= 1) { setCondition(true); } else { setCondition(false); }
  }, [title, text]);

  const handleOpenPlatform = (link) => {
    setDialog2(true);
    setPlatform(link);
    setEdit(true);
    setUrl(link?.placeholderLink.includes('https://'));
  };

  const handleClose = () => {
    setError(false);
    setText('');
    setTitle('');
    setDialog2(false);
    if (settings) {
      onClose();
    }
  };

  const checkSubmission = () => {
    if (!(text.includes(platform?.check) && text.length > 1)) {
      setError(true);
      if (url) {
        setMsg('Invalid domin');
      } else {
        setMsg('Username is not valid');
      }
    } else {
      setError(false);
      if (url) {
        postSocialLink([text, title, platform?._id], settings, link);
      } else {
        postSocialLink([platform.baseLink + text.replace(platform?.check, ''), text.replace(platform?.check, ''), platform?._id], settings, link);
      }
      onClose();
    }
  };
  const handelchange = (e) => {
    if (!settings && edit) {
      setText(platform.check + e.target.value.trim());
      setEdit(false);
    } else {
      setText(e.target.value.trim());
    }
  };
  return (
    !openDialog2 ? (
      <>
        <DialogTitle sx={{
          m: 0, p: 2, display: 'flex', justifyContent: 'center', fontWeight: 700,
        }}
        >
          Add Social Link
          {onClose ? (
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          ) : null}
        </DialogTitle>
        <DialogContent
          dividers
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {links?.map((link, index) => (
            <Text key={`${index + 0}`} onClick={() => handleOpenPlatform(link)}>
              <PlatformIcon src={link?.icon} />
              {link?.type}
            </Text>
          )) }
        </DialogContent>
      </>
    ) : (
      <>
        <DialogTitle sx={{
          m: 0, p: 2, display: 'flex', justifyContent: 'space-between',
        }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              color: '#878a8c',
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              display: 'flex', alignItems: 'center',
            }}
          >
            Add Social Link
          </Typography>
          <SaveBtn variant="contained" condition={condition.toString()} onClick={() => checkSubmission()}>Save</SaveBtn>
        </DialogTitle>
        <DialogContent dividers>
          <Text>
            <PlatformIcon src={platform?.icon} />
            {platform?.type}
          </Text>
          { url
              && <InputBox type="text" value={title} placeholder="Display Text" onChange={(e) => { setTitle(e.target.value); }} />}
          <InputBox type="text" value={text} placeholder={platform?.placeholderLink} onChange={(e) => { handelchange(e); }} />
          {error ? <Typography sx={{ color: 'red', marginLeft: 1 }} variant="caption">{msg}</Typography> : null}
        </DialogContent>
      </>
    )
  );
}

export default SocialLinks;
