import {
  List, Divider,
} from '@mui/material';
import CommunityItem from './CommunityItem/CommunityItem';

function CommunityList(props) {
  const { communitiesList } = props;
  return (

    <List sx={{ p: 0 }} data-testid="community list">
      {communitiesList.map((item, index) => {
        const {
          id, subredditName, icon, status, isJoined,
        } = item;
        return (
          <div key={id}>
            <CommunityItem
              index={index + 1}
              subredditName={subredditName}
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
