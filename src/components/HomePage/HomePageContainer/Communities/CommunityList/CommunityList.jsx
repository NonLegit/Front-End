import {
  List, Divider,
} from '@mui/material';
import CommunityItem from './CommunityItem/CommunityItem';
/**
 * This component represents the list of communities on home page sidebar.
 *
 * @component CommunityList
 * @property {Array<community>} communities -The list of communities.
 * @returns {React.Component} Communities
 */
function CommunityList(props) {
  const { communitiesList } = props;
  return (

    <List sx={{ p: 0 }} data-testid="community list">
      {communitiesList.map((item, index) => {
        const {
          id, fixedName, icon, status, isJoined,
        } = item;
        return (
          <div key={id}>
            <CommunityItem
              index={index + 1}
              subredditName={fixedName}
              icon={icon}
              status={status}
              isJoined={isJoined}
            />
            {(index < communitiesList.length - 1) && <Divider />}
          </div>
        );
      })}
    </List>
  );
}

export default CommunityList;
