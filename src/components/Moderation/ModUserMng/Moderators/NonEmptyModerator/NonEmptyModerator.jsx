/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
import {
  Box, Typography, IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { StyledAvatar, UserBar, UserContainer } from '../../styles';
import RemovePopUp from '../RemovePopUp/RemovePopUp';

export const RemoveContext = React.createContext();
function NonEmptyModerator(props) {
  // 0 stands for all moderators
  // 1 stands for Editable moderators
  // 2 stands for Invited moderators
  const {
    userName, profilePicture, modDate, all, access, config, flair, posts, type,
  } = props;
  const [openRemove, setOpenRemove] = React.useState(false);

  const handleClickOpenRemove = () => { setOpenRemove(true); };
  const handleClickCloseRemove = () => { setOpenRemove(false); };
  const handlePermissions = () => {
    const permissions = [];
    if (all === true) permissions.push('Everything');
    else {
      if (access === true) permissions.push('Manage Users, ');
      if (config === true) permissions.push('Manage Settings, ');
      if (flair === true) permissions.push('Manage Flair, ');
      if (posts === true) permissions.push('Manage Posts & Comments, ');
      const lastElemnt = permissions.pop().trimEnd();
      permissions.push(lastElemnt.substring(0, lastElemnt.length - 1));
    }
    return permissions;
  };

  return (
    <UserBar>
      <RemoveContext.Provider value={{
        openRemove, handleClickCloseRemove, userName,
      }}
      >
        <RemovePopUp />
      </RemoveContext.Provider>
      <UserContainer>
        <StyledAvatar src={profilePicture} variant="square" />
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
      <Box display="flex">
        <Typography
          padding="8px"
          fontSize="12px"
          color="#878A8C"
          width="max-content"
        >
          {modDate}
        </Typography>
      </Box>
      <Box sx={{
        alignItems: 'center', display: 'flex', padding: '8px 16px', width: '100%', justifyContent: 'flex-end',
      }}
      >
        {(() => {
          switch (type) {
            case '1': return (
              <>
                <Typography
                  padding="4px"
                  fontSize="12px"
                  color="#878A8C"
                >
                  {handlePermissions()}
                </Typography>
                <IconButton disableRipple disableTouchRipple>
                  <EditIcon fontSize="small" />
                </IconButton>
              </>
            );
            case '2': return (
              <>
                <Typography
                  padding="4px"
                  fontSize="12px"
                  color="#878A8C"
                >
                  {handlePermissions()}
                </Typography>
                <IconButton disableRipple disableTouchRipple>
                  <DeleteIcon fontSize="small" onClick={handleClickOpenRemove} />
                </IconButton>
              </>
            );
            default: return (
              <Typography
                padding="4px"
                fontSize="12px"
                color="#878A8C"
              >
                {handlePermissions()}
              </Typography>
            );
          }
        })()}
      </Box>
    </UserBar>
  );
}
export default NonEmptyModerator;
