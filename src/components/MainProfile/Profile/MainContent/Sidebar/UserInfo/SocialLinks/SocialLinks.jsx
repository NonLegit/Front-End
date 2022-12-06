import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import TextField from '@mui/material/TextField';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography } from '@mui/material';
import allSocialLinks from './server';
import {
  InputBox, PlatformIcon, SaveBtn, Text,
} from './styles';

function SocialLinks({ onClose }) {
  const [links] = allSocialLinks();
  const [openDialog2, setDialog2] = useState(false);
  const [platform, setPlatform] = useState(null);
  const [condition, setCondition] = useState(false);
  const [text, setText] = useState('');
  // const [error, setError] = useState(false);
  // let msg = ' ';

  const handleOpenPlatform = (link) => {
    setDialog2(true);
    setPlatform(link);
  };

  const handleClose = () => {
    setDialog2(false);
  };

  const handleCheck = (e) => {
    if (e.target.value.trim().length >= 1 && e.target.value.trim().indexOf('@') !== 0) {
      e.target.value = `@${e.target.value.trim()}`;
    }
    if (e.target.value.trim().length > 0) setCondition(true);
    else setCondition(false);
    setText(e.target.value.trim());
  };

  const checkSubmission = () => {
    if (text.includes(' ')) {
      // setError(true);
      // msg = 'user name is not valid';
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
          <InputBox type="text" placeholder={platform?.placeholderLink} onChange={(e) => { handleCheck(e); }} />
        </DialogContent>
        {/* {error && <Typography sx={{ color: 'red' }} variant="string">{msg}</Typography>} */}
      </>
    )
  );
}

export default SocialLinks;
