import { Box, Typography } from '@mui/material';
import { CommunitiesBox, TopCommunitiesHeader } from './styles';
import TopContent from './TopContent/TopContent';
import Categories from './Categories/Categories';
import TopSidebar from './TopSidebar/TopSidebar';

function TopCommunities() {
  const allCategories = [
    { id: 1, text: 'Sports', pic: 'https://www.redditstatic.com/desktop2x/img/leaderboard/banner-background.png' },
    { id: 2, text: 'Gaming', pic: 'https://www.redditstatic.com/desktop2x/img/leaderboard/banner-background.png' },
    { id: 3, text: 'News', pic: 'https://www.redditstatic.com/desktop2x/img/leaderboard/banner-background.png' },
    { id: 4, text: 'TV', pic: 'https://www.redditstatic.com/desktop2x/img/leaderboard/banner-background.png' },
    { id: 5, text: 'Aww', pic: 'https://www.redditstatic.com/desktop2x/img/leaderboard/banner-background.png' },
    { id: 6, text: 'Memes', pic: 'https://www.redditstatic.com/desktop2x/img/leaderboard/banner-background.png' },
    { id: 7, text: 'Travel', pic: 'https://www.redditstatic.com/desktop2x/img/leaderboard/banner-background.png' },
    { id: 8, text: 'Tech', pic: 'https://www.redditstatic.com/desktop2x/img/leaderboard/banner-background.png' },
    { id: 9, text: 'Music', pic: 'https://www.redditstatic.com/desktop2x/img/leaderboard/banner-background.png' },
    { id: 10, text: 'Food', pic: 'https://www.redditstatic.com/desktop2x/img/leaderboard/banner-background.png' },
  ];

  return (
    <>
      <TopCommunitiesHeader>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>Today&apos;s Top Growing Communities</Typography>
        <Typography variant="caption" sx={{ color: '#7c7c7c' }}>Browse Reddit&apos;s top growing communities. Find the top communities in your favorite category.</Typography>
      </TopCommunitiesHeader>
      <CommunitiesBox>
        <Categories allCategories={allCategories} />
        <TopContent />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <TopSidebar allCategories={allCategories} />
          <TopSidebar allCategories={allCategories} />
        </Box>
      </CommunitiesBox>

    </>
  );
}

export default TopCommunities;
