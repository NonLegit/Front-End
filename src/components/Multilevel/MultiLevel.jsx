import { Divider } from '@mui/material';
import MultiLevelBody from './MultiLevelBody/MultiLevelBody';
import MultiLevelHeader from './MultiLevelHeader/MultiLevelHeader';
import MultiLevelSideBar from './MultiLevelSideBar/MultiLevelSideBar';
import { MultiLevelConatiner } from './Styles';

function MultiLevel({ Edit }) {
  return (
    <MultiLevelConatiner>
      <MultiLevelHeader votes={2} Title="Title" />
      <MultiLevelBody Edit={Edit} />
      <p>werfgf</p>
      <div>werfgf</div>
      <div>werfgf</div>
      <div>werfgf</div>
      <Divider orientation="vertical" flexItem light />
      <MultiLevelSideBar />
    </MultiLevelConatiner>
  );
}

export default MultiLevel;
