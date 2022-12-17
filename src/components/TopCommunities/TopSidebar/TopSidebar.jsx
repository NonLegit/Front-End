import {
  Box,
  CardMedia, Divider,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CommunitiesGetter } from '../topComunitiesServer';
import {
  HeaderText, ShadowBox, ShowAllBtn, TopSideBox,
} from './styles';
import CommunityEntity from '../CommunityEntity/CommunityEntity';

function TopSidebar({ allCategories }) {
  const [entity, setEntity] = useState(allCategories[0]);
  const [data] = CommunitiesGetter(entity?.text.toLowerCase());

  const navigate = useNavigate();
  const { category } = useParams();

  useEffect(() => {
    let num;
    do {
      num = Math.floor(Math.random() * 10) + 1;
    } while (allCategories[num]?.text.toLowerCase() === category);
    setEntity(allCategories[num]);
  }, [category]);

  return (
    <TopSideBox>
      <CardMedia
        component="img"
        height="80"
        image={entity?.pic}
        alt="Subreddit image"
      />
      <ShadowBox />
      <HeaderText>
        Top
        {' '}
        {entity?.text}
        {' '}
        Communities
      </HeaderText>

      {data?.slice(0, 5).map((item, index) => (
        <div key={`${index + 0}`}>
          <CommunityEntity
            sidebar
            index={index + 1}
            subredditName={item.fixedName}
            icon={item.icon}
            status={item.status}
          />
          {(index < data.slice(0, 5).length - 1) && <Divider />}
        </div>
      ))}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      >
        <ShowAllBtn variant="outlined" onClick={() => { navigate(entity?.text.toLowerCase()); }}>
          See All
          {' '}
          {entity?.text}
        </ShowAllBtn>
      </Box>

    </TopSideBox>
  );
}

export default TopSidebar;
