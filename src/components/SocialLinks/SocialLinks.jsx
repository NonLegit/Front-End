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
  const [dataToSend, setDataToSend] = useState([]);

  postSocialLink(dataToSend);
  useEffect(() => {
    if (settings) {
      setDialog2(true);
      setPlatform(link?.social);
      if (link?.social.placeholderLink.includes('https://')) {
        setText(link?.userLink);
        setTitle(link?.displayText);
      }
      setUrl(link?.social.placeholderLink.includes('https://'));
    }
  }, [settings]);

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
    if (settings) {
      onClose();
    } else {
      setDialog2(false);
    }
  };

  // const handleCheck = (e) => {
  //   if (platform?.placeholderLink[0] === '@' && e.target.value.trim().length >= 1 && e.target.value.trim().indexOf('@') !== 0) {
  //     e.target.value = `@${e.target.value.trim()}`;
  //   } else if (platform?.placeholderLink[0] === 'h' && e.target.value.trim().length >= 1 && !'https://'.includes(e.target.value.trim().substring(0, 6))) {
  //     e.target.value = `https://${e.target.value.trim()}`;
  //   }
  //   if (e.target.value.trim().length > 0) setCondition(true);
  //   else setCondition(false);
  //   setLink(e.target.value.trim());
  // };

  const checkSubmission = () => {
    if (url && (text.includes(' ') || text.length <= 1)) {
      setError(true);
      setMsg('Username is not valid');
    } else if (url && (!text.includes(platform?.baseLink) || text === platform?.baseLink)) {
      setError(true);
      setMsg('Invalid URL');
    } else {
      setError(false);
      setDataToSend([text, title, platform?.type]);
      onClose();
      setDialog2(false);
      setText('');
      setTitle('');
    }
  };
  const handelchange = (e) => {
    if (!settings && edit) {
      setText(platform.placeholderLink + e.target.value.trim());
      setEdit(false);
    } else {
      setText(e.target.value.trim());
    }
    if (e.target.value.trim().length > 0) { setCondition(true); } else { setCondition(false); }
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
