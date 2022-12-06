import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography } from '@mui/material';
import allSocialLinks from './socialLinksServer';
import {
  InputBox, PlatformIcon, SaveBtn, Text,
} from './styles';

function SocialLinks({ onClose }) {
  const [links] = allSocialLinks();
  const [openDialog2, setDialog2] = useState(false);
  const [platform, setPlatform] = useState(null);
  const [condition, setCondition] = useState(false);
  const [edit, setEdit] = useState(true);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState(false);
  // const [error, setError] = useState(false);
  // let msg = ' ';

  const handleOpenPlatform = (link) => {
    setDialog2(true);
    setPlatform(link);
    setEdit(true);
    setUrl(link?.placeholderLink.includes('https://'));
  };

  const handleClose = () => {
    setDialog2(false);
    setText('');
    setTitle('');
  };

  const handleCheck = (e) => {
    if (e.target.value.trim().length >= 1 && e.target.value.trim().indexOf('@') !== 0) {
      setText(e.target.value.trim());
    }
    if (e.target.value.trim().length > 0) setCondition(true);
    else setCondition(false);
    setText(e.target.value.trim());
  };
  const change = (e) => {
    if (edit) {
      setText(platform.placeholderLink + e.target.value.trim());
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
            <Text key={`${index + 0}`} onClick={() => handleOpenPlatform(link, link)}>
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
          <SaveBtn variant="contained" condition={condition.toString()} onClick={() => handleCheck()}>Save</SaveBtn>
        </DialogTitle>
        <DialogContent dividers>
          <Text>
            <PlatformIcon src={platform?.icon} />
            {platform?.type}
          </Text>
          { url
              && <InputBox type="text" value={title} placeholder="Display Text" onChange={(e) => { setTitle(e.target.value); }} />}
          <InputBox type="text" value={text} placeholder={platform?.placeholderLink} onChange={(e) => { change(e); }} />
        </DialogContent>
        {/* {error && <Typography sx={{ color: 'red' }} variant="string">{msg}</Typography>} */}
      </>
    )
  );
}

export default SocialLinks;
