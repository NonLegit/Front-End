import * as React from 'react';
import { Typography } from '@mui/material';
import { StyledBox } from './styles';
import { FullDiscTextArea, Count } from '../../../../Rules/AddRule/style';

/**
 * BanMessage
 * @component
 * @property  {string} punishReason text to explain more details about why this user is banned if available
 * @return {React.Component} - BanMessageComponent (text area)
 */

function BanMessage(props) {
  const { punishReason } = props;
  const [count, setCount] = React.useState(5000);
  const check = (e) => {
    const ele = e?.target?.value;
    if (5000 - ele.length >= 0) { setCount(5000 - ele.length); }
  };
  return (
    <StyledBox>
      <Typography>Note to include in ban message •</Typography>
      <FullDiscTextArea
        defaultValue={punishReason}
        id="banMessage"
        placeholder="Reason they were banned"
        onChange={check}
        onInput={(e) => {
          // eslint-disable-next-line radix
          e.target.value = e.target.value.slice(0, 5000);
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

export default BanMessage;
