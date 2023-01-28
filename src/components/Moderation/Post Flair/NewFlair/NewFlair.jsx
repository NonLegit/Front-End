import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Done from '../../../AlertMessage';
import PostFlair from './PostFlair';
import {
  AddFlair, Cancel, Color, ColorData,
  Container, Count, FieldData, FormCont, Input, Lable, Save, SecondLable, SplitArea,
} from './style';

/**
 * New Flair
 * @component
 * @property  {function} notEmpty check if the input feild is empty or not
 * @property  {function} SendData send data to backend
 * @property  {function} save close popup form
 * @property  {function} cancel popup form
 *
 * @return {React.Component} - New Flair
 */

export default function NewFlair(props) {
  const { save, cancel } = props;
  const { subReddit } = useParams();

  const [count, setCount] = useState(64);
  const [error, setError] = useState('');
  const check = (e) => {
    const ele = e?.target?.value;
    setCount(64 - ele.length);
  };
  const notEmpty = (e) => {
    const ele = e?.target?.value;
    if (ele.length === 0) {
      setError('Error: text or emoji is required');
    } else {
      setError('');
    }
  };

  const SendData = () => {
    const text = document.getElementById('text').value;
    const backgroundColor = document.getElementById('bgColor').value;
    // const cssClass = document.getElementById('css');
    const textColor = document.getElementById('textColor').value;
    console.log(text, backgroundColor, textColor);
    PostFlair(`subreddits/${subReddit}/flair`, text, backgroundColor, textColor);
    save();
    Done('Flair Added');
  };
  return (
    <>
      <Container>
        <Lable>FLAIR APPEARANCE</Lable>
        <FieldData>
          <SecondLable>Flair text</SecondLable>
          <FormCont>
            <Input
              id="text"
              type="text"
              onChange={check}
              onInput={(e) => {
              // eslint-disable-next-line radix
                e.target.value = e.target.value.slice(0, 21);
              }}
              onBlur={notEmpty}
            />
          </FormCont>
          {(error.length === 0)
            ? (
              <Count
                condition={(count === 0).toString()}
              >
                {count}
                {' '}
                Characters remaining
              </Count>
            )
            : <Count condition="true">{error}</Count>}
        </FieldData>

        <FieldData>
          <SecondLable>CSS Class</SecondLable>
          <FormCont>
            <Input
              type="text"
              id="css"
              onChange={check}
              placeholder="none"
            />
          </FormCont>
          <Count>
            Optional
          </Count>
        </FieldData>
        <SplitArea>
          <ColorData>
            <SecondLable>Flair background color</SecondLable>
            <Color
              type="color"
              id="bgColor"
            />
            {/* <div />
            <div /> */}
          </ColorData>
        </SplitArea>
        <SplitArea>
          <ColorData>
            <SecondLable>Flair text color</SecondLable>
            <Color
              type="color"
              placeholder="Aa"
              id="textColor"
            />
          </ColorData>
        </SplitArea>
      </Container>
      <AddFlair>
        <Save onClick={SendData}>
          Save
        </Save>
        <Cancel onClick={cancel}>Cancel</Cancel>
      </AddFlair>
    </>
  );
}
