import {
  List, Divider,
} from '@mui/material';
import CommunityItem from '../../CommunityItem/CommunityItem';

function CommunityList() {
  return (
    <List sx={{ p: 0 }}>
      <CommunityItem index={1} name="r/CoronavirusEgypt" image="https://styles.redditmedia.com/t5_2ql2m/styles/communityIcon_vr02expkpl391.jpg?format=pjpg&s=6fc537d22ab75feda2ea15985e89da63c7564797" />
      <Divider />
      <CommunityItem index={2} name="r/Egypt" image="https://styles.redditmedia.com/t5_2haljk/styles/communityIcon_v3mfg6zq8ml41.jpg?format=pjpg&s=06415378b24bb050806de9bc4609263bcb23b362" />
    </List>
  );
}

export default CommunityList;
