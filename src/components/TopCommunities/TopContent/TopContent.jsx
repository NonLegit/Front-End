import { Divider, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import CommunityEntity from '../CommunityEntity/CommunityEntity';
import { CommunitiesGetter } from '../topComunitiesServer';
import { HeaderText, TopContentBox } from './styles';

function TopContent() {
  const { category } = useParams();
  const [data] = CommunitiesGetter(category);

  return (
    <TopContentBox>
      <HeaderText>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>Today&apos;s Top Growing in News</Typography>
        <Typography variant="body2" sx={{ color: '#7c7c7c', fontWeight: 700 }}>Rank Change</Typography>
      </HeaderText>
      {data?.map((item, index) => (
        <div key={`${index + 0}`}>
          <CommunityEntity
            index={index + 1}
            subredditName={item.fixedName}
            icon={item.icon}
            status={item.status}
            isJoined={item.isJoined}
            members={item.membersCount}
          />
          {(index < data.length - 1) && <Divider />}
        </div>
      ))}
    </TopContentBox>
  );
}

export default TopContent;
