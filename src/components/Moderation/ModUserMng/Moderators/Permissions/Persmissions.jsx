import * as React from 'react';
import { Checkbox, Divider } from '@mui/material';
import { StyledFormHelperText, StyledFormControlLabel, StyledPermissionContainer } from './styled';

/**
 * permissions that tha moderator has
 * @component
 * @return {React.Component} - permissions that the moderator has
 */

export default function IndeterminateCheckbox() {
  const [checkedAccess, setChecked1] = React.useState(true);
  const [checkedConfig, setChecked2] = React.useState(true);
  const [checkedFlair, setChecked3] = React.useState(true);
  const [checkedPosts, setChecked4] = React.useState(true);

  const handleChangeAccess = (event) => {
    setChecked1(event.target.checked);
  };
  const handleChangeConfig = (event) => {
    setChecked2(event.target.checked);
  };
  const handleChangeFlairs = (event) => {
    setChecked3(event.target.checked);
  };
  const handleChangePosts = (event) => {
    setChecked4(event.target.checked);
  };

  const handleChangeAll = (event) => {
    handleChangeAccess(event);
    handleChangeConfig(event);
    handleChangeFlairs(event);
    handleChangePosts(event);
  };

  const children = (
    <StyledPermissionContainer>
      <StyledFormControlLabel
        label="Manage Users"
        control={(
          <Checkbox
            id="manage_users"
            disableTouchRipple
            disableRipple
            size="small"
            checked={checkedAccess}
            onChange={handleChangeAccess}
          />
)}
      />
      <StyledFormHelperText>
        Access mod notes, ban and mute users, and approve submitters*.
      </StyledFormHelperText>
      <StyledFormControlLabel
        label="Manage Settings"
        control={(
          <Checkbox
            id="manage_settings"
            disableTouchRipple
            disableRipple
            size="small"
            checked={checkedConfig}
            onChange={handleChangeConfig}
          />
)}
      />
      <StyledFormHelperText>
        Manage community settings, appearance, emojis, rules, and AutoMod*.
      </StyledFormHelperText>
      <StyledFormControlLabel
        label="Manage Flair"
        control={(
          <Checkbox
            id="manage_flair"
            disableTouchRipple
            disableRipple
            size="small"
            checked={checkedFlair}
            onChange={handleChangeFlairs}
          />
)}
      />
      <StyledFormHelperText>
        Create and manage user and post flair.
      </StyledFormHelperText>
      <StyledFormControlLabel
        label="Manage Posts & Comments"
        control={(
          <Checkbox
            id="manage_post"
            disableTouchRipple
            disableRipple
            size="small"
            checked={checkedPosts}
            onChange={handleChangePosts}
          />
)}
      />
      <StyledFormHelperText>
        Access queues, take action on content, and manage collections and events.
      </StyledFormHelperText>
    </StyledPermissionContainer>
  );

  return (
    <>
      <StyledFormControlLabel
        label="Everything"
        control={(
          <Checkbox
            id="everything"
            size="small"
            checked={checkedAccess && checkedConfig && checkedFlair && checkedPosts}
            onChange={handleChangeAll}
          />
        )}
      />
      <StyledFormHelperText>
        Full access including the ability to manage moderator access and permissions.
      </StyledFormHelperText>
      <Divider sx={{ marginTop: '16px' }} />
      {children}
    </>
  );
}
