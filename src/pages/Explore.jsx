import { useParams } from 'react-router-dom';
import ExploreMainPage from '../components/Explore/ExploreMainPage/ExploreMainPage';

function Explore() {
  const { title } = useParams();
  return (
    <ExploreMainPage title={title} />
  );
}

export default Explore;
