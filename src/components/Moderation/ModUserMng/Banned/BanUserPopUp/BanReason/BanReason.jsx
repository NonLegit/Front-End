import { Divider, Select } from '@mui/material';
import * as React from 'react';
import {
  StyledBox, StyledFont, StyledMenuItem,
} from './styles';

function BanReason() {
  const [Note, setNote] = React.useState('');

  const handleChangeComboBox = (event) => {
    setNote(event.target.value);
  };
  return (
    <StyledBox>
      <StyledFont>REASON FOR BAN</StyledFont>
      <Select
        defaultValue="NONE"
        fullWidth
        value={Note}
        onChange={handleChangeComboBox}
        size="small"
      >
        <StyledMenuItem value={10}>Spam</StyledMenuItem>
        <Divider sx={{ margin: '0px !important' }} />
        <StyledMenuItem value={20}>Personal And Confidential Information</StyledMenuItem>
        <Divider sx={{ margin: '0px !important' }} />
        <StyledMenuItem value={30}>Threatening, Harassing, Or Inciting Violence</StyledMenuItem>
        <Divider sx={{ margin: '0px !important' }} />
        <StyledMenuItem value={40}>Other</StyledMenuItem>
      </Select>
    </StyledBox>
  );
}
export default BanReason;
