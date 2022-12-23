import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StyledBox from './styles';

/**
 * EditBan popup header
 * @component
 * @property  {function} handleClickCloseBan close the popup
 * @property  {string} userName the username of banned user
 * @return {React.Component} - EditBan popup header
 */

function EditBanHaeder(props) {
  const { handleClickCloseBan, userName } = props;
  return (
    <StyledBox>
      <Typography
        fontWeight={600}
      >
        Edit ban for: u/
        {userName}
      </Typography>
      <CloseIcon
        sx={{ cursor: 'pointer' }}
        onClick={handleClickCloseBan}
      />
    </StyledBox>
  );
}

export default EditBanHaeder;
