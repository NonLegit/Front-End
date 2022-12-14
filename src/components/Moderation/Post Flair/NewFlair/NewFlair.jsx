import { useState } from 'react';
import {
  AddFlair,
  Cancel,
  Color,
  ColorData,
  Container, Count, FieldData, FormCont, Input, Lable, Save, SecondLable, SplitArea,
} from './style';

export default function NewFlair(props) {
  const { save, cancel } = props;

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
  return (
    <>
      <Container>
        <Lable>FLAIR APPEARANCE</Lable>
        <FieldData>
          <SecondLable>Flair text</SecondLable>
          <FormCont>
            <Input
              id="input"
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
              id="input"
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
            />
          </ColorData>
        </SplitArea>
      </Container>
      <AddFlair>
        <Save onClick={save}>
          Save
        </Save>
        <Cancel onClick={cancel}>Cancel</Cancel>
      </AddFlair>
    </>
  );
}
