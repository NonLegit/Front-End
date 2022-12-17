import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
// import styles
import {
  From, FromHeader, InputContiner, SelectFrom, OptionFrom, InputLabel, Input, SubLabel,
  TextArea, SubmitButton, SubmitAnimation, Warning,
} from './styles';

function MessageForm() {
  const api = 'http://myjson.dit.upm.es/api/bins/8ybo';
  const [checkForm, setCheckForm] = useState([false, false, false, false]);
  const [showAnimation, setShowAnimation] = useState(false);
  const [robotCheck, setRobotCheck] = useState(false);
  const fromRef = useRef();
  const [value, setValue] = useState({});
  useEffect(() => {
    axios.get(api) // fetch api
      .then((actualData) => {
        setValue({ props: actualData.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [api]);
  const changeHandler = (e) => { // set input data
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowAnimation(true);
    const interval = setInterval(() => {
      setShowAnimation(false);
      clearInterval(interval);
    }, 500);
    // check empty value
    if (value.to === '') { setCheckForm([true, false, false, false]); return; }
    if (value.subject === '') { setCheckForm([false, true, false, false]); return; }
    if (value.message === '') { setCheckForm([false, false, true, false]); return; }
    if (!robotCheck) { setCheckForm([false, false, false, true]); return; }
    setCheckForm([false, false, false, false]);
    axios // post
      .post('https://jsonplaceholder.typicode.com/posts', { ...value, from: fromRef.current.value })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <From onSubmit={handleSubmit}>
      <FromHeader>
        Send A Private Message
      </FromHeader>
      <InputContiner>
        <InputLabel>from</InputLabel>
        <SelectFrom aria-label="from" ref={fromRef}>
          {
              value.props?.from.map((ele) => (<OptionFrom value={ele} key={ele}>{ele}</OptionFrom>))
            }
        </SelectFrom>
      </InputContiner>
      <InputContiner>
        <InputLabel>
          to
          {' ' }
          <SubLabel>
            (username, or /r/name for that subreddit`s moderators)
          </SubLabel>
        </InputLabel>
        <Input
          name="to"
          onChange={changeHandler}
        />
        { checkForm[0] && <Warning>please enter a usernames</Warning> }
      </InputContiner>
      <InputContiner>
        <InputLabel>subject</InputLabel>
        <Input
          name="subject"
          onChange={changeHandler}
        />
        { checkForm[1] && <Warning>please enter a subject</Warning> }
      </InputContiner>
      <InputContiner>
        <InputLabel>message</InputLabel>
        <TextArea
          name="message"
          onChange={changeHandler}
        />
        { checkForm[2] && <Warning>we need something here</Warning> }
      </InputContiner>
      <ReCAPTCHA
        sitekey="6LeJW6YiAAAAAIu7_sj8HC2N1CJomktisn-NVgVH"
        onChange={() => setRobotCheck(true)}
      />
      { checkForm[3]
          && <Warning>That was a tricky one. Why don&apos;t you try that again.s</Warning> }
      <SubmitButton>
        SEND
      </SubmitButton>
      { showAnimation && <SubmitAnimation>submitting...</SubmitAnimation>}
    </From>
  );
}

export default MessageForm;
