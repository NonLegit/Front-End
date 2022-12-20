import { Typography } from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { useState, useEffect, useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CommunitiesSubscriberProvider from '../../../contexts/CommunitiesSubscriberContext';
import {
  QueueBox, QueueText,
} from './styles';
import Sort from './Sort/Sort';
import { ModMainPage } from '../ModerationMainPage/styles';
import NonEmptyQueue from './NonEmptyQueue/NonEmptyQueue';
import Filter from './Filter/Filter';
import SwitchPage from './NonEmptyQueue/SwitchPage/SwitchPage';
import EmptyQueue from './EmptyQueue/EmptyQueue';
import { modQueueServer } from './modQueueServer';

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

function Queue() {
  const { subTitle, subReddit } = useParams();

  const [numItems, setNumItem] = useState();
  const query = useQuery();
  const sort = query.get('sort');
  const [isContent, setIsContent] = useState(false);

  const [posts] = modQueueServer(subReddit, subTitle, sort);
  useEffect(() => {
    console.log(posts);
    if (posts?.length > 0) {
      setNumItem(posts.length);
      setIsContent(true);
    }
  }, [subReddit, posts, subTitle, sort]);

  return (
    <ModMainPage>
      <QueueBox>

        {!isContent && <EmptyQueue />}
        {isContent
          && (
          <>
            <QueueText>
              <Typography variant="h6">{subTitle}</Typography>
              <ErrorOutlineOutlinedIcon color="primary" />
            </QueueText>
            <Sort />

            <Filter
              numItems={numItems}
              selected={0}
            />
            <CommunitiesSubscriberProvider>
              {posts.map((entity, index) => (
                <NonEmptyQueue
                  key={`${index + 0}`}
                  post={entity}
                  profile
                />

              ))}
            </CommunitiesSubscriberProvider>

            <SwitchPage />

          </>
          )}

      </QueueBox>
    </ModMainPage>
  );
}

export default Queue;
