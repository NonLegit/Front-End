import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import OutboundIcon from '@mui/icons-material/Outbound';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

export const firstList = [
  { icon: <HomeOutlinedIcon sx={{ color: 'black' }} />, label: 'Home' },
  { icon: <OutboundIcon sx={{ color: 'black', fontSize: 25 }} />, label: 'Popular' },
];
export const exploreList = [
  {
    icon: <SportsEsportsOutlinedIcon sx={{ color: 'black' }} />,
    SubList: 'Gaming',
    Content: ['Valheim', 'Genshin Impact', 'Minecraft', 'Pokimane', 'Halo Infinite', 'Call of Duty: Warzone', 'Path of Exile',
      'Hollow Knight: Silksong', 'Escape from Tarkov', 'Watch Dogs: Legion'],
  },
  {
    icon: <SportsBaseballOutlinedIcon sx={{ color: 'black' }} />,
    SubList: 'Sports',
    Content: ['NFL', 'NBA', 'Megan Anderson', 'Atlanta Hawks', 'Los Angeles Lakers',
      'Boston Celtics', 'Arsenal F.C.', 'Phiadelphia 76ers', 'Premier League', 'UFC'],
  },
  {
    icon: <ShowChartOutlinedIcon sx={{ color: 'black' }} />,
    SubList: 'Business Education...',
    Content: ['GameStop', 'Moderna', 'Pfizer', 'Johnson & Johnson',
      'AstraZeneca', 'Walgreens', 'Best Buy', 'Novavax', 'SpaceX', 'Tesla'],
  },
  {
    icon: <CurrencyBitcoinOutlinedIcon sx={{ color: 'black' }} />,
    SubList: 'Crypto',
    Content: ['Cardano', 'Dogecoin', 'Algorand', 'Bitcoin', 'Litecoin', 'Basic Attention Token', 'Bitcoin Cash'],
  },
  {
    icon: <TvOutlinedIcon sx={{ color: 'black' }} />,
    SubList: 'Television',
    Content: ['The Real Housewives of Atlanta', 'The Bachelor', 'Sister Wives', '90 Day Fiance', 'Wife Swap',
      'The Amazing Race Australia', 'Married at First Sight', 'The Real Housewives of Dallas', 'My 600-lb Life', 'Last Week Tonight wi'],
  },
  {
    icon: <StarBorderOutlinedIcon sx={{ color: 'black' }} />,
    SubList: 'Celebrity',
    Content: ['Kim Kardashian', 'Doja Cat', 'Iggy Azalea', 'Anya Taylor-Joy', 'Jamie Lee Curtis', 'Natalie Portman',
      'Henry Cavill', 'Millie Bobby Brown', 'Tom Hiddleston', 'Keanu Reeves'],
  },
  {
    icon: <MoreHorizOutlinedIcon sx={{ color: 'black' }} />,
    SubList: 'More Topics',
    Content: ['Animals and Pets', 'Anime', 'Art', 'Cars and Motor Vehicles', 'Crafts and DIY', 'Culture, Race, and Ethnicity',
      'Ethics and Philosophy', 'Fashion', 'Food and Drink', 'History', 'Hobbies', 'Law', 'Learning and Education',
      'Military', 'Movies', 'Music', 'Place', 'Podcasts and Streamers', 'Politics',
      'Programming', 'Reading, Writing, and Literature',
      'Religion and Spirituality', 'Science', 'Tabletop Games', 'Technology', 'Travel'],
  },
];
