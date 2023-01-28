import * as React from 'react';
import { StyledBox } from './styles';
import { FullDiscTextArea, Count } from '../../../../Rules/AddRule/style';

/**
 * mute message
 * @component
 * @return {React.Component} - mute message component (text area)
 */

function MuteMessage() {
  const [count, setCount] = React.useState(300);
  const check = (e) => {
    const ele = e?.target?.value;
    if (500 - ele.length >= 0) { setCount(500 - ele.length); }
  };
  return (
    <StyledBox>
      <FullDiscTextArea
        placeholder="Reason they were muted"
        id="mute_message"
        onChange={check}
        onInput={(e) => {
          // eslint-disable-next-line radix
          e.target.value = e.target.value.slice(0, 500);
        }}
      />
      <Count
        condition={(count === 0).toString()}
      >
        {count}
        {' '}
        Characters remaining
      </Count>
    </StyledBox>
  );
}

export default MuteMessage;
