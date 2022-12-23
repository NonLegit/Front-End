import { Divider, Select } from '@mui/material';
import * as React from 'react';
import {
  StyledBox, StyledFont, StyledMenuItem,
} from './styles';

/**
 * Ban reason
 * @component
 * @property  {enum} punishType it is the bunish type if the user is spam or Threatening, Harassing, Or Inciting Violence or Personal And Confidential Information or other reason
 * @return {React.Component} - approved user instance
 */

function BanReason(props) {
  const { punishType } = props;
  const [punishTypeState, setpunishType] = React.useState(punishType);

  const handleChangeComboBox = (event) => {
    setpunishType(event.target.value);
  };
  return (
    <StyledBox>
      <StyledFont>REASON FOR BAN</StyledFont>
      <Select
        id="reason"
        fullWidth
        value={punishTypeState}
        onChange={handleChangeComboBox}
        size="small"
      >
        <StyledMenuItem value="Spam">Spam</StyledMenuItem>
        <Divider sx={{ margin: '0px !important' }} />
        <StyledMenuItem value="Personal And Confidential Information">Personal And Confidential Information</StyledMenuItem>
        <Divider sx={{ margin: '0px !important' }} />
        <StyledMenuItem value="Threatening, Harassing, Or Inciting Violence">Threatening, Harassing, Or Inciting Violence</StyledMenuItem>
        <Divider sx={{ margin: '0px !important' }} />
        <StyledMenuItem value="Other">Other</StyledMenuItem>
      </Select>
    </StyledBox>
  );
}
export default BanReason;
