import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import PostJoin from '../../../SubReddit/PostJoin';
import numFormatter from '../../../../utils/MembersNum';
import {
  TextP, Text, TextContainer, OneSuggeest, Joined,
} from './style';
/**
 * Search by community entity in sidebar
 * @component
 * @property  {function} handleJoin send join to backend
 * @property  {function} handleMouseIn when hover set buttom value to leave
 * @property  {function} handleMouseOut when out of hover set button value to joined

 * @return {React.Component} - Search by community entity in sidebar
 */
function Suggestions(props) {
  const { subreddit } = props;
  const [joined, setJoined] = useState(true);
  const handleJoin = () => {
    PostJoin(`/subreddits/${subreddit?.fixedName}/subscribe`, !joined);

    setJoined((prev) => !prev);
  };

  const [hover, setHover] = useState(false);

  const handleMouseIn = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  }; return (
    {
      icon: 'https://styles.redditmedia.com/t5_3ptyd/styles/communityIcon_p18jqwszxcv51.png',
      _id: 10,
      fixedName: 'uniquesubreddit',
      membersCount: 10000,
      description: 'welcome to subreddit',
    },

      <OneSuggeest>
        <Avatar alt="Remy Sharp" src={subreddit?.icon} />
        <TextContainer>
          <Text to="/r/$subreddit?.fixedName}">
            r/
            {subreddit?.fixedName}
          </Text>
          <TextP>
            { numFormatter(subreddit?.membersCount)}
            {' '}
            Members
          </TextP>
        </TextContainer>
        <Joined
          variant="outlined"
          onClick={handleJoin}
          onMouseEnter={handleMouseIn}
          onMouseLeave={handleMouseOut}
        >
          {(joined ? (hover ? 'leave' : 'joined') : 'join')}
        </Joined>
      </OneSuggeest>
  );
}
export default Suggestions;
