import EditPost from '../EditPost/EditPost';

function MultiLevelBody({ Edit }) {
  return (
    <div>
      MultiLevelBody
      {/* PostBody */}
      {/* Compoanet X */}
      {Edit ? <EditPost /> : <h1>PostPreview</h1>}
      {/* Post Actions */}
      {/* Post insights */}
      {/* Comments */}
      {/* =>Compoanet X */}
      {/* Info Bar */}
      {/* =>PostBody */}

    </div>
  );
}

export default MultiLevelBody;
