/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
import { Box, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  UserBar, UserContainer, UserMngButton, StyledAvatar, UsermngButtonContainer, TextContainer,
} from '../../../styles';
import MoreDetails from '../MoreDetails/MoreDetails';
import UnmutePopUp from '../../MuteUserPopUp/UnmutePopUp/UnmutePopUp';
import calculateTime from '../../../../../../utils/calculateTime';

export const UnmuteContext = React.createContext();

/**
 * Banned user instace
 * @component
 * @property  {object} user an object containing all information about the user from its username until the link to the its profile picture and the date that user is muted
 * @property {object} muteInfo contain the comment of the moderator on the muted user
 * @return {React.Component} - Banned user instace component
 */

function MutedUser(props) {
  const navigate = useNavigate();

  // navigate
  const handleClickUser = (userName) => {
    navigate(`/user/${userName}`);
  };
  const { user, muteInfo } = props;

  const [openUnmute, setOpenUnmute] = React.useState(false);

  const handleClickOpenUnmute = () => { setOpenUnmute(true); };
  const handleClickCloseUnmute = () => { setOpenUnmute(false); };

  const [isOpened, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!isOpened);
  };
  return (
    <>
      <UserBar>
        <UnmuteContext.Provider value={{
          openUnmute, handleClickCloseUnmute,
        }}
        >
          <UnmutePopUp userName={user.userName} />
        </UnmuteContext.Provider>
        <UserContainer onClick={() => handleClickUser(user.userName)}>
          <StyledAvatar src={user.profilePicture} variant="square" sx={{ width: '32px', height: '32px' }} />
          <Box>
            <Typography
              padding="8px"
              fontSize="15px"
              fontWeight="bold"
            >
              {user.userName}
            </Typography>
          </Box>
        </UserContainer>
        <TextContainer>
          <Typography
            padding="8px"
            fontSize="12px"
            color="#878A8C"
          >
            {calculateTime(user.joinDate)}
          </Typography>
        </TextContainer>
        <UsermngButtonContainer>
          <UserMngButton
            disableRipple
            disableFocusRipple
            onClick={handleClickOpenUnmute}
          >
            Unmute
          </UserMngButton>
          <UserMngButton
            disableRipple
            disableFocusRipple
            onClick={handleClick}
            endIcon={(isOpened) ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          >
            More Details
          </UserMngButton>
        </UsermngButtonContainer>
      </UserBar>
      <MoreDetails modNote={muteInfo.muteMessage} isOpened={isOpened} />
    </>
  );
}
export default MutedUser;
