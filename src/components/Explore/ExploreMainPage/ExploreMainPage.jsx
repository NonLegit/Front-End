import HeaderSubtitleContextProvider from '../../../contexts/HeaderSubtitleContext';
import { ExpMainPage } from './styles';
import ExploreHeader from '../ExploreHeader/ExploreHeader';

/**
 * the explore main page
 * @component
 * @property {string} title the title of the explore main page
 * @return {React.Component} - the explore main page
 */

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
