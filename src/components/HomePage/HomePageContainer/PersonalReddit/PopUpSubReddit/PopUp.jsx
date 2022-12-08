import * as React from 'react';
import {
  Box, Checkbox, Dialog, FormControlLabel, FormGroup, Stack,
} from '@mui/material';
import { useEffect } from 'react';
import {
  Actions, Adult, AdultContent, Container, NSFWs, Warning, Btn,
} from './style';
import { CreatPost, CustomLink } from '../../../../SubReddit/SideBar/AboutSubReddit/style';
import RedditButton from '../../../../RedditButton/RedditButton';
import RadioBtn from './RadioBtn/RadioBtn';
import Header from './Header/Header';
import Input from './Input/Input';
import useFetch from './PopupFetch';
import PostData from './PopupPost';

// const Form = axios.create({
//   baseURL: 'https://60d14a9b-9245-421f-9841-d211208805b8.mock.pstmn.io',
// });
/**
 * Pop up Creat Cummunity Form
 * @component
 * @return {React.Component} - Popup Form
 */
function FormDialog({ display }) {
  const [open, setOpen] = React.useState(false);
  const [subRedditName, setsubRedditName] = React.useState('');
  const [count, setcount] = React.useState(21);
  const [checked, setchecked] = React.useState('');
  const [type, setType] = React.useState('Public');
  const [adult, setAdult] = React.useState(false);
  const [errorMassage, setErrorMassage] = React.useState('');
  const [statusCode, setStatusCode] = React.useState(null);
  const [statusCode2, setStatusCode2] = React.useState(null);

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
  const check = async () => {
    console.log('#####');
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
    // const [data, dataError] = await useFetch(`/subreddits/${subRedditName}`);
    // console.log(dataError);
    // console.log(data);
    const { data, status } = useFetch(`/subreddits/${subRedditName}`);
    setStatusCode(status);
    if (data) {
      setErrorMassage(`Sorry, r/${subRedditName} is taken. Try another.`);
    }
  };

  useEffect(() => {
    if (statusCode === 401 || statusCode2 === 401) {
      window.location.pathname = 'login';
    }
  }, [statusCode, statusCode2]);

  /**
   * this function to click checkbox on click the text next to it
   */
  const check18 = () => {
    const ele = document.getElementById('myCheck');
    ele.click();
  };
  // to set the type which selected in radio button
  const myType = (t) => {
    setType(t);
  };
  /**
   * make post action
   * @param {object} e -sbmit button
   */
  const Submit = async (e) => {
    e.preventDefault();
    if (subRedditName !== '' && errorMassage === '') {
      console.log(subRedditName, ' ', type, ' ', adult);
      // axios.post('http://localhost:8000/subreddits/401', {
      //   owner: user,                                               ------> from log in in تجميعه
      //   name: subRedditName,
      //   type,
      //   NSFW: adult,
      // })
      const status = await PostData('/subreddits', subRedditName, type, adult);
      console.log(status);
      setStatusCode2(status);
      // if (status === 200 || status === 204) {
      //   window.location.pathname = `Subreddit/${subRedditName}`;
      // }
    }
  };
  return (
    <>
      <CustomLink sx={{ display }}>
        <RedditButton
          variant="outlined"
          padding="4px"
          fontSize={15}
          fontWeight="bold"
          sx={{ mt: 1.8 }}
          onClick={handleClickOpen}
          data-testid="btn"
          id="popup-form-button"
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
