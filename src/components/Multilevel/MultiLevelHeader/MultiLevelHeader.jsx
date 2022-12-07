import { CloseButton, MultiLevelHeaderBox, MultiLevelHeaderVotes } from './Styles';

function MultiLevelHeader() {
  return (
    <MultiLevelHeaderBox>
      <MultiLevelHeaderVotes />

      <CloseButton />
    </MultiLevelHeaderBox>
  );
}

export default MultiLevelHeader;
