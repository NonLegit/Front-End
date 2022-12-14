import { useState } from 'react';
import { useParams } from 'react-router-dom';
import EditFlair from './EditFlair';
import {
  AddFlair,
  Cancel,
  Color,
  ColorData,
  Container, Count, FieldData, FormCont, Input, Lable, Save, SecondLable,
} from './style';

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
    const text = document.getElementById('text');
    const backgroundColor = document.getElementById('bgColor');
    const cssClass = document.getElementById('css');
    const textColor = document.getElementById('textColor');
    EditFlair(subReddit, flair?._id, {
      text,
      backgroundColor,
      textColor,
      cssClass,
    });
    save();
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
