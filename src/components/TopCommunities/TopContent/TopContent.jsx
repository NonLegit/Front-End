import { Divider, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useContext } from 'react';
import { CommunitiesContext } from '../../../contexts/CommunitiesModeratorContext';
import { useListingContext } from '../../../contexts/ListingContext';
import CommunityEntity from '../CommunityEntity/CommunityEntity';
import { CommunitiesGetter } from '../topComunitiesServer';
import { HeaderText, TopContentBox } from './styles';

/**
 * list of communities
 *
 * @component TopContent
 * @returns {React.Component} TopContent
 */

function TopContent() {
  const { category } = useParams();
  const [data] = CommunitiesGetter(category);
  const { communities } = useContext(CommunitiesContext);

  const { setPage } = useListingContext();
  const fetchMoreData = () => {
    setPage((page) => page + 1);
  };
  return (
    <TopContentBox>
      <HeaderText>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>Today&apos;s Top Growing in News</Typography>
        <Typography variant="body2" sx={{ color: '#7c7c7c', fontWeight: 700 }}>Rank Change</Typography>
      </HeaderText>
      {(data && category !== 'moderating') && (
      <InfiniteScroll
        next={fetchMoreData}
        hasMore
        dataLength={data.length}
      >
        {data.map((item, index) => (
          <div key={`${index + 0}`}>
            <CommunityEntity
              index={index + 1}
              subredditName={item.fixedName}
              icon={item.icon}
              status={item?.status}
              isJoined={item.isJoined}
              members={item.membersCount}
            />
            {(index < data.length - 1) && <Divider />}
          </div>
        ))}
      </InfiniteScroll>
      )}
      {(communities && category === 'moderating') && (
      <InfiniteScroll
        next={fetchMoreData}
        hasMore
        dataLength={communities.length}
      >
        {communities.map((item, index) => (
          <div key={`${index + 0}`}>
            <CommunityEntity
              index={index + 1}
              subredditName={item.fixedName}
              icon={item.icon}
              status={item?.status}
              isJoined={item.isJoined}
              members={item.membersCount}
            />
            {(index < communities.length - 1) && <Divider />}
          </div>
        ))}
      </InfiniteScroll>
      )}
    </TopContentBox>
  );
}

export default TopContent;
