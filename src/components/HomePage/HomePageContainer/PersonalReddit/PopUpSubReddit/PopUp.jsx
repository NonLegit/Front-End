import * as React from 'react';
import {
  Box, Checkbox, Dialog, FormControlLabel, FormGroup, Stack,
} from '@mui/material';
import axios from 'axios';
import {
  Actions, Adult, AdultContent,
  Container, NSFWs,
  Warning, Btn,
} from './style';
import { CreatPost, CustomLink } from '../../../../SubReddit/SideBar/AboutSubReddit/style';
import RedditButton from '../../../../RedditButton/RedditButton';
import RadioBtn from './RadioBtn/RadioBtn';
import Header from './Header/Header';
import Input from './Input/Input';

const Form = axios.create({
  baseURL: 'https://60d14a9b-9245-421f-9841-d211208805b8.mock.pstmn.io',
});
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
    Form.get(`/subreddits/${subRedditName}/401`, {
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
  const myType = (t) => {
    setType(t);
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
      Form.post('/subreddits/200', {})
        .then((response) => {
          if (response.status === 200) {
            document.location.href = 'https://localhost:3000/';
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
        >
          create community
        </RedditButton>
      </CustomLink>
      <Container>
        <Dialog open={open} onClose={handleClose}>
          <Box sx={{ p: 2 }}>
            <Header handleClose={handleClose} />
            <Input subRedditName={subRedditName} handleChange={handleChange} check={check} count={count} checked={checked} errorMassage={errorMassage} />
            <RadioBtn myType={myType} />
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
