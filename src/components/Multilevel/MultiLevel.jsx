import MultiLevelBody from './MultiLevelBody/MultiLevelBody';
import MultiLevelHeader from './MultiLevelHeader/MultiLevelHeader';
import MultiLevelSideBar from './MultiLevelSideBar/MultiLevelSideBar';
import { MultiLevelConatiner } from './Styles';

function MultiLevel({ Edit }) {
  return (
    <MultiLevelConatiner>
      <MultiLevelHeader />
      <MultiLevelBody Edit={Edit} />
      <p>werfgf</p>
      <div>werfgf</div>
      <div>werfgf</div>
      <div>werfgf</div>
      <MultiLevelSideBar />
    </MultiLevelConatiner>
  );
}

export default MultiLevel;
