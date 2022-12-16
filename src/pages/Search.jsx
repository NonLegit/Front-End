import { Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import Comments from '../components/Search/Comments/Comments';
import Peoples from '../components/Search/Peoples/People';
import { SearchByCommunitiesHeader } from '../components/Search/Subreddits/style';
import Subreddits from '../components/Search/Subreddits/Subreddits';
import FilterSearch from '../components/Search/Header/Filter';
import Posts from '../components/Search/Posts/Posts';
import {
  TotalHeader, SearchContainer, PostsContainer, SearchHeadderContainer,
} from '../components/Search/Header/style';
import SideBar from '../components/Search/SideBar/SideBar';
import Post from '../components/Search/Post/Post';

function Search() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'Posts';
  console.log(type);

  const subreddits = [
    {
      icon: 'https://styles.redditmedia.com/t5_3ptyd/styles/communityIcon_p18jqwszxcv51.png',
      _id: 10,
      fixedName: 'uniquesubreddit',
      membersCount: 10000,
      description: 'welcome to subreddit',
    },
    {
      icon: 'https://styles.redditmedia.com/t5_3ptyd/styles/communityIcon_p18jqwszxcv51.png',
      _id: 10,
      fixedName: 'uniquesubreddit',
      membersCount: 10000,
      description: 'welcome to subreddit',
    },
    {
      icon: 'https://styles.redditmedia.com/t5_3ptyd/styles/communityIcon_p18jqwszxcv51.png',
      _id: 10,
      fixedName: 'uniquesubreddit',
      membersCount: 10000,
      description: 'welcome to subreddit',
    },
  ];
  const peoples = [
    {
      icon: '/static/images/avatar/1.jpg',
      _id: 10,
      fixedName: 'uniquesubreddit',
      karma: 10000,
      description: 'welcome to subreddit',
    },
    {
      icon: '/static/images/avatar/1.jpg',
      _id: 10,
      fixedName: 'uniquesubreddit',
      karma: 10000,
      description: 'welcome to subreddit',
    },
    {
      icon: '/static/images/avatar/1.jpg',
      _id: 10,
      fixedName: 'uniquesubreddit',
      karma: 10000,
      description: 'welcome to subreddit',
    },
  ];
  return (

    <TotalHeader>
      <SearchContainer>
        <SearchHeadderContainer>
          <FilterSearch />
          {type === 'Posts'
          && <Posts />}
        </SearchHeadderContainer>
        { type === 'Posts'
       && (
       <Box sx={{
         display: 'flex', flexDirection: 'row', margin: '0 auto', paddingTop: '8px',
       }}
       >
         <PostsContainer>
           <Post />
           <Post />
           <Post />
         </PostsContainer>
         <SideBar />
       </Box>
       )}
        { type === 'Communities'
        && (
          <SearchByCommunitiesHeader>
            {subreddits?.map((subreddit) => (

              <Subreddits subreddit={subreddit} />
            ))}
          </SearchByCommunitiesHeader>
        )}
        { type === 'People'
        && (
          <SearchByCommunitiesHeader>
            {peoples?.map((people) => (

              <Peoples people={people} />
            ))}
            {/* <Peoples />
            <Peoples />
            <Peoples /> */}
          </SearchByCommunitiesHeader>
        )}
        { type === 'Comments'
        && (
          <SearchByCommunitiesHeader>
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
          </SearchByCommunitiesHeader>
        )}
      </SearchContainer>
    </TotalHeader>

  );
}

export default Search;
