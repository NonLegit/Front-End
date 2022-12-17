import { ExpMainPage } from './styles';
import ExploreHeader from '../ExploreHeader/ExploreHeader';

function ExploreMainPage(props) {
  const { title } = props;
  return (
    <ExpMainPage>
      <ExploreHeader title={title} />
    </ExpMainPage>
  );
}

export default ExploreMainPage;
