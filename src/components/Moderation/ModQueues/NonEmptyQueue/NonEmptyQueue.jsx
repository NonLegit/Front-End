import { Box } from '@mui/material';
import Filter from '../Filter/Filter';
import FooterQueue from './FooterQueue/FooterQueue';
import HeaderQueue from './HeaderQueue/HeaderQueue';
import SideBarQueue from './SideBarQueue/SideBarQueue';

// import Arrow from './arrow.svg';
import {
  ParagraphPost,
  PostContentBox,
  PostsQueueBox,
  TitlePost,
} from './styles';
import SwitchPage from './SwitchPage/SwitchPage';

function NonEmptyQueue(props) {
  const {
    numItems, dot, selected, subTitle,
  } = props;
  const content = {
    Title: 'new',
    Paragraph: 'extra',
  };
  return (
    <>
      <Filter
        numItems={numItems}
        dot={dot}
        selected={selected}
      />
      <PostsQueueBox>
        <SideBarQueue subTitle={subTitle} />
        <PostContentBox>
          <Box sx={{ marginLeft: 1 }}>
            <HeaderQueue subTitle={subTitle} />
            <TitlePost variant="h6">{content.Title}</TitlePost>
            <ParagraphPost variant="body2">{content.Paragraph}</ParagraphPost>
            <FooterQueue subTitle={subTitle} />
          </Box>
        </PostContentBox>
      </PostsQueueBox>
      <SwitchPage />
    </>
  );
}

export default NonEmptyQueue;
