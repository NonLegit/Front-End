import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Done from '../../../../AlertMessage';
import EditFlair from './EditFlair';
import {
  AddFlair,
  Cancel,
  Color,
  ColorData,
  Container, Count, FieldData, FormCont, Input, Lable, Save, SecondLable,
} from './style';

/**
 * Edit Entity of Flair
 * @component
 * @property  {function} check copy id
 * @property  {function} notEmpty check if input feild is empty or not
 * @property  {function} SendData send data to backend
 * @property  {function} EditFlair send edited data to backend
 * @property  {function} save close popup form
 * @property  {function} cancel popup form
 * @property  {function} flair flaie entity

 * @return {React.Component} - Edit Entity of Flair
 */

export default function Edit(props) {
  const { flair, save, cancel } = props;
  const [count, setCount] = useState(64 - flair.text.length);
  const [error, setError] = useState('');
  const { subReddit } = useParams();

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

    EditFlair(subReddit, flair?._id, {
      text,
      backgroundColor,
      textColor,
    });
    save();
    Done('Chndes Save');
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
              onChange={check}
              defaultValue={flair?.text}
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
              id="css"
              onChange={check}
              defaultValue={flair?.cssClass}
              placeholder="none"
            />
          </FormCont>
          <Count>
            Optional
          </Count>
        </FieldData>

        <ColorData>
          <SecondLable>Flair background color</SecondLable>
          <Color
            type="color"
            id="bgColor"
            defaultValue={flair?.backgroundColor}
          />
        </ColorData>

        <ColorData>
          <SecondLable>Flair text color</SecondLable>
          <Color
            type="color"
            id="textColor"
            defaultValue={flair?.textColor}
            placeholder="Aa"
          />
        </ColorData>
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
