import { Typography } from '@mui/material';
// import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  HeaderPost,
} from './styles';

/** Header of the post
 * @return {React.Component} - PostHeader
 * @param {string} nameUser - name of the currently loggedin user
 * @param {string} Time - contains the time of the post
 * @param {string} nameUser - contains the name of subreddit the post piblished in
 */

// calculate the time difference between the creation day and current day
const calculateTime = (d, time) => {
  const year = d.getFullYear() - time.split('T')[0].split('-')[0];
  const month = d.getMonth() - time.split('T')[0].split('-')[1];
  const day = d.getDate() - time.split('T')[0].split('-')[2];

  if (year > 0) {
    return (`${year} years ago`);
  }
  if (month > 0) {
    return (`${month} months ago`);
  }
  if (day > 0) {
    return (`${day} days ago`);
  }
  return ('today');
};

function PostHeader(props) {
  const { nameUser, Time, subReddit } = props;
  const d = new Date();
  return (
    <HeaderPost>
      <Typography variant="caption" sx={{ fontWeight: 700, '&:hover': { textDecoration: 'underline' } }}>
        r/
        {subReddit}
        {' '}
        .
      </Typography>
      <Typography variant="caption" sx={{ color: '#787c7e', marginLeft: 1 }}>
        Posted by
      </Typography>
      <Typography variant="caption" sx={{ color: '#787c7e', marginLeft: 1, '&:hover': { textDecoration: 'underline' } }}>
        u/
        {nameUser}
      </Typography>
      <Typography variant="caption" sx={{ color: '#787c7e', marginLeft: 1 }}>
        {' '}
        {calculateTime(d, Time)}
      </Typography>
      {/* {((subTitle === 'Spam').toString() === 'true')
      && (
        <RemovalBox>
          <BlockOutlinedIcon fontSize="string" />
          <Typography variant="caption">Add a removal reason</Typography>
        </RemovalBox>
      )}
      {((subTitle === 'Edited').toString() === 'true')
      && (
      <ApprovedBox>
        <CheckCircleIcon fontSize="string" />
      </ApprovedBox>
      )} */}
    </HeaderPost>
  );
}

export default PostHeader;
