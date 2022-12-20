/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
import { Box, Typography } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledAvatar, UserBar, UserContainer, UserMngButton, UsermngButtonContainer,
} from '../../../styles';

import RemovePopUp from '../../ApproveUserPopUp/RemovePopUp/RemovePopUp';

export const RemoveContext = React.createContext();

function ApprovedUser(props) {
  const {
    userName, profilePicture, joiningDate,
  } = props;

  const navigate = useNavigate();

  // navigate
  const handleClickUser = (userName) => {
    navigate(`/user/${userName}`);
  };

  const [openRemove, setOpenRemove] = React.useState(false);

  const handleClickOpenRemove = () => { setOpenRemove(true); };
  const handleClickCloseRemove = () => { setOpenRemove(false); };

  return (
    <UserBar>
      <RemoveContext.Provider value={{
        openRemove, handleClickCloseRemove,
      }}
      >
        <RemovePopUp userName={userName} />
      </RemoveContext.Provider>
      <UserContainer onClick={() => handleClickUser(userName)}>
        <StyledAvatar variant="square" src={profilePicture} />
        <Box>
          <Typography
            padding="8px"
            fontSize="15px"
            fontWeight="bold"
          >
            {userName}
          </Typography>
        </Box>
      </UserContainer>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Typography
          padding="8px"
          fontSize="12px"
          color="#878A8C"
        >
          {joiningDate}
        </Typography>
      </Box>
      <UsermngButtonContainer>
        <UserMngButton
          disableRipple
          disableFocusRipple
        >
          Send message
        </UserMngButton>
        <UserMngButton
          disableRipple
          disableFocusRipple
          onClick={handleClickOpenRemove}
        >
          Remove
        </UserMngButton>
      </UsermngButtonContainer>
    </UserBar>
  );
}
export default ApprovedUser;
