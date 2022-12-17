import { useParams } from 'react-router-dom';
import ExploreMainPage from '../components/Explore/ExploreMainPage/ExploreMainPage';
// import ExploreHeader from '../components/Explore/ExploreHeader/ExploreHeader';

function Moderation() {
  const { title } = useParams();
  return (
    <ExploreMainPage title={title} />
  );
}

export default Moderation;
