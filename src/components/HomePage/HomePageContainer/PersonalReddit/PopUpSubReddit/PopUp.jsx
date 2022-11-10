import * as React from 'react';
import {
  Box, Checkbox, Dialog, FilledInput, FormControl, FormControlLabel,
  FormGroup,
  InputAdornment, InputLabel, Radio, RadioGroup, Stack,
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HttpsIcon from '@mui/icons-material/Https';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import {
  Actions, Adult, AdultContent,
  Container, Count, DialogTitle, Disc, Name, NSFWs,
  SecConatiner, SelectHeader, Warning, Btn, BOX, Cont, ContUp, StyledTooltip,
} from './style';
import { CreatPost, CustomLink } from '../../../../SubReddit/SideBar/AboutSubReddit/style';
import RedditButton from '../../../../RedditButton/RedditButton';
/**
 * Pop up Creat Cummunity Form
 * @return {React.Component} - Popup Form
 */
function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [subRedditName, setsubRedditName] = React.useState('');
  const [count, setcount] = React.useState(21);
  const [checked, setchecked] = React.useState('');
  const [type, setType] = React.useState('public');
  const [adult, setAdult] = React.useState(false);
  const [errorMassage, setErrorMassage] = React.useState('');
  /**
   * this function to open the popup form on click the button
   */
  const handleClickOpen = () => {
    setOpen(true);
  };
  /**
   * this function to close the popup form on click  cancel , x , outside the form
   */
  const handleClose = () => {
    setOpen(false);
  };/**
   * this function to know if Subreddit Name reach max(21) or not
    to prevent type more than 21 char in the input field and calculate number of char in input feild
   * @param {object} event - the input field
   */
  const handleChange = (event) => {
    if (event.target.value.length < 22) {
      setsubRedditName(event.target.value);
      setcount(21 - event.target.value.length);
    }
  };
  /**
   * this function to show message when bluring of the input feild if it is empty
   */
  const check = () => {
    const ele = document.getElementById('name');
    if (ele.value.length === 0) {
      setchecked('A community name is required');
    } else {
      setchecked('');
    }
    /**
     * send subreddit name to check if there is another one with same name
     */
    // axios.get(`http://localhost:8000/subreddit/${{ subRedditName }}`, {
    //   subredditName: subRedditName,
    // })
    axios.get(`https://60d14a9b-9245-421f-9841-d211208805b8.mock.pstmn.io/subreddits/${subRedditName}/200`, {
    })
      .then((response) => {
        if (response.status === 200) {
          setErrorMassage(`Sorry, r/${subRedditName} is taken. Try another.`);
        }
      });
  };
  /**
   * this function to click checkbox on click the text next to it
   */
  const check18 = () => {
    const ele = document.getElementById('myCheck');
    ele.click();
  };
  /**
   * make post action
   * @param {object} e -sbmit button
   */
  const Submit = (e) => {
    e.preventDefault();
    if (subRedditName !== '' && errorMassage === '') {
      console.log(subRedditName, ' ', type, ' ', adult);
      // axios.post('http://localhost:8000/subreddits/401', {
      //   owner: user,                                               ------> from log in in تجميعه
      //   name: subRedditName,
      //   type,
      //   NSFW: adult,
      // })
      axios.post('https://60d14a9b-9245-421f-9841-d211208805b8.mock.pstmn.io/subreddits/200', {})
        .then((response) => {
          if (response.status === 200) {
            document.location.href = 'http://localhost:3000';
          }
        });
    }
  };
  return (
    <>
      <CustomLink>
        <RedditButton
          variant="outlined"
          padding="4px"
          fontSize={15}
          fontWeight="bold"
          sx={{ mt: 1.8 }}
          onClick={handleClickOpen}
          data-testid="btn"
        >
          create community
        </RedditButton>
      </CustomLink>
      <Container>
        <Dialog open={open} onClose={handleClose}>
          <Box sx={{ p: 2 }}>
            <BOX>
              <DialogTitle>Create a community</DialogTitle>
              <CloseIcon sx={{ cursor: 'pointer' }} onClick={handleClose} />
            </BOX>
            <SecConatiner>
              <Name>Name</Name>
              <Disc sx={{ height: 'fit-content', alignItems: 'center' }}>
                Community names including capitalization cannot be changed.
                <StyledTooltip
                  title='Names cannot have spaces (e.g., "r/bookclub" not "r/book club"), must be between 3-21 characters, and underscores ("_") are the only special characters allowed. Avoid using solely trademarked names (e.g., "r/FansOfAcme" not "r/Acme").'
                >
                  <IconButton>
                    <ErrorOutlineIcon sx={{ transform: 'rotate(180deg)', fontSize: 'small', color: 'gray' }} />
                  </IconButton>
                </StyledTooltip>
              </Disc>
            </SecConatiner>
            <FormControl fullWidth sx={{ height: 28 }}>
              <InputLabel htmlFor="name" />
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
                id="name"
                data-testid="input"
                value={subRedditName}
                onChange={handleChange}
                startAdornment={<InputAdornment position="start">r/</InputAdornment>}
                maxLength={21}
                onBlur={() => check()}
              />
            </FormControl>
            <Count
              condition={(count === 0).toString()}
            >
              {count}
              {' '}
              Characters remaining
            </Count>
            <Count data-testid="warning" condition="true">{checked}</Count>
            <Count condition="true">{errorMassage}</Count>
            <SelectHeader> Community type</SelectHeader>
            <FormControl sx={{ marginBottom: '30px' }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                id="type"
                defaultValue="Public"
                onChange={(e) => setType(e.target.value)}
              >
                <ContUp condition2="true">
                  <Cont>
                    <FormControlLabel value="Public" control={<Radio />} sx={{ margin: 0 }} />
                    <PersonIcon sx={{ color: 'gray' }} />
                    <Name sx={{ margin: 1 }}>Public</Name>
                  </Cont>
                  <Disc sx={{ pt: 0.5 }}>Anyone can view, post, and comment to this community</Disc>
                </ContUp>
                <ContUp>
                  <Cont>
                    <FormControlLabel value="Restricted" control={<Radio />} sx={{ margin: 0 }} />
                    <VisibilityIcon sx={{ color: 'gray' }} />
                    <Name sx={{ margin: 1 }}>Restricted</Name>
                  </Cont>
                  <Disc sx={{ pt: 0.5 }}>
                    Anyone can view this community, but only approved users can post
                  </Disc>
                </ContUp>
                <ContUp condition="true">
                  <Cont>
                    <FormControlLabel value="Private" control={<Radio />} sx={{ margin: 0 }} />
                    <HttpsIcon sx={{ color: 'gray' }} />
                    <Name sx={{ margin: 1 }}>Private</Name>
                  </Cont>
                  <Disc sx={{ pt: 0.5 }}>
                    Only approved users can view and submit to this community
                  </Disc>
                </ContUp>
              </RadioGroup>
            </FormControl>
            <AdultContent> Adult content</AdultContent>
            <Adult>
              <FormGroup>
                <FormControlLabel control={<Checkbox data-testid="my-Check-Box" id="myCheck" onClick={(ele) => { setAdult(ele.target.checked); }} />} />
              </FormGroup>
              <Adult onClick={check18} data-testid="cont">
                <NSFWs>NSFW</NSFWs>
                <Warning>18+ year old community</Warning>
              </Adult>
            </Adult>
          </Box>
          <Actions>
            <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
              <Btn data-testid="cancel-Btn" variant="outlined" onClick={handleClose}>Cancel</Btn>
            </Stack>
            <CustomLink>
              <CreatPost variant="outlined" padding="4px" fontSize={15} fontWeight="bold" onClick={Submit}>
                Create community
              </CreatPost>
            </CustomLink>
          </Actions>
        </Dialog>
      </Container>
    </>
  );
}
export default FormDialog;
