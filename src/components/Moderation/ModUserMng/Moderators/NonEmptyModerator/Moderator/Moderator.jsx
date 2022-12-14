/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
import {
  Box, Avatar, Typography, IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { UserBar } from './styles';
import RemovePopUp from '../../RemovePopUp/RemovePopUp';

export const RemoveContext = React.createContext();

function Moderator(props) {
  // 0 stands for all moderators
  // 1 stands for Editable moderators
  // 2 stands for Invited moderators
  const { type } = props;
  const [openRemove, setOpenRemove] = React.useState(false);

  const handleClickOpenRemove = () => { setOpenRemove(true); };
  const handleClickCloseRemove = () => { setOpenRemove(false); };

  return (
    <UserBar>
      <RemoveContext.Provider value={{
        openRemove, handleClickCloseRemove,
      }}
      >
        <RemovePopUp />
      </RemoveContext.Provider>
      <Box sx={{
        display: 'flex', alignItems: 'center', padding: '8px 16px', minWidth: '220px',
      }}
      >
        <Avatar />
        <Box>
          <Typography
            padding="8px"
            fontSize="15px"
            fontWeight="bold"
          >
            username
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Typography
          padding="8px"
          fontSize="12px"
          color="#878A8C"
        >
          2 hours ago
        </Typography>
      </Box>
      <Box sx={{
        alignItems: 'center', display: 'flex', padding: '8px 16px', width: '30%',
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
                  Everything
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
                  Everything
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
                Everything
              </Typography>
            );
          }
        })()}
      </Box>
    </UserBar>
  );
}
export default Moderator;
