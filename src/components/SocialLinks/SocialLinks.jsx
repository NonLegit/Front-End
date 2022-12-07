import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import TextField from '@mui/material/TextField';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography } from '@mui/material';
import { allSocialLinks, postSocialLink } from './server';
import {
  InputBox, SaveBtn,
} from './styles';
import { Text, PlatformIcon } from '../MainProfile/Profile/MainContent/Sidebar/UserInfo/styles';

function SocialLinks({ onClose }) {
  const [links] = allSocialLinks();
  const [openDialog2, setDialog2] = useState(false);
  const [platform, setPlatform] = useState(null);
  const [condition, setCondition] = useState(false);
  const [link, setLink] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState('');
  const [dataToSend, setDataToSend] = useState([]);

  postSocialLink(dataToSend);

  const handleOpenPlatform = (link) => {
    setDialog2(true);
    setPlatform(link);
  };

  const handleClose = () => {
    setDialog2(false);
    setError(false);
  };

  const handleCheck = (e) => {
    if (platform?.placeholderLink[0] === '@' && e.target.value.trim().length >= 1 && e.target.value.trim().indexOf('@') !== 0) {
      e.target.value = `@${e.target.value.trim()}`;
    } else if (platform?.placeholderLink[0] === 'h' && e.target.value.trim().length >= 1 && !'https://'.includes(e.target.value.trim().substring(0, 6))) {
      e.target.value = `https://${e.target.value.trim()}`;
    }
    if (e.target.value.trim().length > 0) setCondition(true);
    else setCondition(false);
    setLink(e.target.value.trim());
  };

  const checkSubmission = () => {
    if (platform?.placeholderLink[0] === '@' && (link.includes(' ') || link.length <= 1)) {
      setError(true);
      setMsg('Username is not valid');
    } else if (platform?.placeholderLink[0] === 'r' && (link.includes(' ') || (!link.startsWith('r/') && !link.startsWith('u/')) || link.length <= 2)) {
      setError(true);
      setMsg('This community or user doesn’t exist. Double-check your spelling.');
    } else if (platform?.placeholderLink[0] === 'h' && (!link.includes(platform?.baseLink) || link === platform?.baseLink)) {
      setError(true);
      setMsg('Invalid URL');
    } else {
      setError(false);
      setDataToSend([link, text, platform?.type]);
      onClose();
      setDialog2(false);
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
          {platform?.placeholderLink[0] === 'h' ? <InputBox type="text" placeholder="Display text" onChange={(e) => { setText(e.target.value.trim()); }} /> : null}
          <InputBox type="text" placeholder={platform?.placeholderLink} onChange={(e) => { handleCheck(e); }} />
          {error ? <Typography sx={{ color: 'red', marginLeft: 1 }} variant="caption">{msg}</Typography> : null}
        </DialogContent>
      </>
    )

  );
}

export default SocialLinks;
