import * as React from 'react';
import Button from '@mui/material/Button';
import {
  Box, Checkbox, Dialog, FilledInput, FormControl, FormControlLabel,
  FormGroup,
  InputAdornment, InputLabel, Radio, RadioGroup, Stack,
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HttpsIcon from '@mui/icons-material/Https';

import {
  Actions,
  Adult,
  AdultContent,
  Container, Count, DialogTitle, Disc, Name, NSFW, SecConatiner, SelectHeader, Warning, Btn,
} from './style';
import { CreatPost, CustomLink } from '../SubReddit/SideBar/AboutSubReddit/style';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [subRedditName, setsubRedditName] = React.useState('');
  const [count, setcount] = React.useState(21);
  const [checked, setchecked] = React.useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    if (event.target.value.length < 22) {
      setsubRedditName(event.value);
      setcount(21 - event.target.value.length);
    }
  };
  const check = () => {
    const ele = document.getElementById('outlined-adornment-amount');
    if (ele.value.length === 0) {
      setchecked('A community name is required');
    } else {
      setchecked('');
    }
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create a community
      </Button>
      <Container>
        <Dialog open={open} onClose={handleClose}>
          <Box sx={{ p: 2 }}>
            <DialogTitle>Create a community</DialogTitle>
            <SecConatiner>
              <Name>Name</Name>
              <Disc>
                Community names including capitalization cannot be changed.
                <Tooltip title='Names cannot have spaces (e.g., "r/bookclub" not "r/book club"), must be between 3-21 characters, and underscores ("_") are the only special characters allowed. Avoid using solely trademarked names (e.g., "r/FansOfAcme" not "r/Acme").'>
                  <IconButton>
                    <ErrorOutlineIcon sx={{ transform: 'rotate(180deg)', fontSize: 'small', color: 'gray' }} />
                  </IconButton>
                </Tooltip>
              </Disc>
            </SecConatiner>
            <FormControl fullWidth sx={{ height: 28 }}>
              <InputLabel htmlFor="outlined-adornment-amount" />
              <FilledInput
                sx={{
                  '&: after': { borderBottom: '2px solid #040404de', padding: 0 },
                  height: 28,

                  '& .css-1vbc0rj-MuiInputBase-input-MuiFilledInput-input': { padding: 0 },
                }}
                onInput={(e) => {
                  // eslint-disable-next-line radix
                  e.target.value = e.target.value.slice(0, 21);
                }}
                id="outlined-adornment-amount"
                value={subRedditName}
                onChange={handleChange}
                startAdornment={<InputAdornment position="start">r/</InputAdornment>}
                maxLength={21}
                onBlur={() => check()}
              />
            </FormControl>
            <Count
              Condition={(count === 0).toString()}
            >
              {count}
              {' '}
              Characters remaining
            </Count>
            <Count Condition="true">{checked}</Count>

            <SelectHeader> Community type</SelectHeader>

            <FormControl sx={{ marginBottom: '30px' }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <FormControlLabel value="Public" control={<Radio />} sx={{ margin: 0 }} />
                  <PersonIcon sx={{ color: 'gray' }} />
                  <Name sx={{ margin: 1 }}>Public</Name>
                  <Disc sx={{ pt: 0.5 }}>Anyone can view, post, and comment to this community</Disc>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <FormControlLabel value="Restricted" control={<Radio />} sx={{ margin: 0 }} />
                  <VisibilityIcon sx={{ color: 'gray' }} />
                  <Name sx={{ margin: 1 }}>Restricted</Name>
                  <Disc sx={{ pt: 0.5 }}>
                    Anyone can view this community, but only approved users can post
                  </Disc>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <FormControlLabel value="  Private" control={<Radio />} sx={{ margin: 0 }} />
                  <HttpsIcon sx={{ color: 'gray' }} />
                  <Name sx={{ margin: 1 }}>Private</Name>
                  <Disc sx={{ pt: 0.5 }}>
                    Only approved users can view and submit to this community
                  </Disc>
                </Box>
              </RadioGroup>
            </FormControl>

            <AdultContent> Adult content</AdultContent>

            <Adult>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} />
              </FormGroup>
              <NSFW>NSFW</NSFW>
              <Warning>18+ year old community</Warning>

            </Adult>
          </Box>
          <Actions>
            <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
              <Btn variant="outlined" onClick={handleClose}>Cancel</Btn>
            </Stack>
            <CustomLink>
              <CreatPost variant="outlined" padding="4px" fontSize={15} fontWeight="bold">
                Create community
              </CreatPost>
            </CustomLink>
          </Actions>

        </Dialog>
      </Container>
    </div>
  );
}
