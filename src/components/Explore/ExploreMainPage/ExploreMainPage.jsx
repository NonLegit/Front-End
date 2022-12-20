import HeaderSubtitleContextProvider from '../../../contexts/HeaderSubtitleContext';
import { ExpMainPage } from './styles';
import ExploreHeader from '../ExploreHeader/ExploreHeader';

function ExploreMainPage(props) {
  const { title } = props;
  return (
    <HeaderSubtitleContextProvider>
      <ExpMainPage>
        <ExploreHeader title={title} />
      </ExpMainPage>
    </HeaderSubtitleContextProvider>
  );
}

export default ExploreMainPage;
