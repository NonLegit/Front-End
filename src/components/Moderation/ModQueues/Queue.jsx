import { Typography } from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import {
  QueueBox, QueueText,
} from './styles';
import Sort from './Sort/Sort';
import { ModMainPage } from '../ModerationMainPage/styles';
import NonEmptyQueue from './NonEmptyQueue/NonEmptyQueue';

function Queue(props) {
  const { subTitle } = props;
  return (
    <ModMainPage>
      <QueueBox>
        <QueueText>
          <Typography variant="h6">{subTitle}</Typography>
          <ErrorOutlineOutlinedIcon color="primary" />
        </QueueText>
        <Sort />

        <NonEmptyQueue
          numItems="Items 1-1"
          dot="."
          selected="0 Selected"
          subTitle={subTitle}
        />
      </QueueBox>
    </ModMainPage>
  );
}

export default Queue;
