import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { followRequest } from '../../Peoples/FollowServer';
import numFormatter from '../../../../utils/MembersNum';
import {
  TextP, Text, TextContainer, OneSuggeest, Joined,
} from './style';
/**
 * people in sidebar entity
 * @component
 * @property  {function} handleJoin send follow to backend
 * @property  {function} handleMouseIn when hover set buttom value to unfollow
 * @property  {function} handleMouseOut when out of hover set button value to follow

 * @return {React.Component} - people in sidebar entity
 */
function Suggestions(props) {
  const { people } = props;
  const [follow, setFollow] = useState(true);
  const handleJoin = () => {
    followRequest(people?.fixedName, follow);
    setFollow((prev) => !prev);
  };
  const [hover, setHover] = useState(false);

  const handleMouseIn = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };
  return (
    {
      icon: '/static/images/avatar/1.jpg',
      _id: 10,
      fixedName: 'uniquesubreddit',
      karma: 10000,
      description: 'welcome to subreddit',
    },
      <OneSuggeest>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <TextContainer>
          <Text to={`/user/${people?.fixedName}`}>
            U/
            {people?.fixedName}
          </Text>
          <TextP>
            {numFormatter(people?.karma)}
            {' '}
            karma
          </TextP>
        </TextContainer>
        <Joined
          variant="outlined"
          onClick={handleJoin}
          onMouseEnter={handleMouseIn}
          onMouseLeave={handleMouseOut}
        >
          {(follow ? (hover ? 'Unfollow' : 'Following') : 'follow')}
        </Joined>
      </OneSuggeest>
  );
}
export default Suggestions;
