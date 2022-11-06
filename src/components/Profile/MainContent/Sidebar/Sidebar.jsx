import {
  Box,
  CardMedia,
  Typography,
} from '@mui/material';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import AddIcon from '@mui/icons-material/Add';
import {
  AddPhoto, WideButton, EngineIcon, ProfilePic, ProfileBox,
  SidebarBox, UserInfoBox, UserName, InfoBox,
  EntityBox, FollowersArrow, AddSocialLink, AddPost, MoreOptions,
} from './styles';

function Sidebar(props) {
  const {
    username, karma, cake, followers,
  } = props;
  return (
    <SidebarBox>
      <UserInfoBox>
        <CardMedia
          component="img"
          height="94"
          image="https://source.unsplash.com/random"
          alt="cover image"
        />
        <AddPhoto sx={{
          border: (theme) => `thin solid ${theme.palette.primary.main}`,
          transform: 'translate(730% ,-130%)',
        }}
        >
          <AddAPhotoOutlinedIcon color="primary" fontSize="small" disabled />
        </AddPhoto>

        <ProfileBox>
          <Box sx={{ display: 'flex' }}>
            <Box>
              <ProfilePic src="https://picsum.photos/200" alt="user photo" />
              <AddPhoto sx={{
                border: (theme) => `thin solid ${theme.palette.primary.main}`,
                position: 'absolute',
                transform: 'translate(180% ,-100%)',
              }}
              >
                <AddAPhotoOutlinedIcon color="primary" fontSize="small" />
              </AddPhoto>

            </Box>
            <EngineIcon color="primary" />
          </Box>
          <UserName variant="caption">
            u/
            {username}
          </UserName>
          <br />
          <WideButton variant="contained" color="primary" endIcon={<ArrowForwardIosOutlinedIcon />}>
            Create Avatar
          </WideButton>
          <InfoBox>
            <EntityBox>
              <Typography variant="body2" sx={{ marginBottom: '5px' }}>Karma</Typography>
              <Box sx={{ display: 'flex' }}>
                <FilterVintageIcon fontSize="string" color="primary" sx={{ marginRight: '4px' }} />
                <Typography variant="caption" sx={{ color: '#7c7c7c' }}>{karma}</Typography>
              </Box>
            </EntityBox>
            <EntityBox>
              <Typography variant="body2" sx={{ marginBottom: '5px' }}>Cake Day</Typography>
              <Box sx={{ display: 'flex' }}>
                <CakeIcon fontSize="string" color="primary" sx={{ marginRight: '4px' }} />
                <Typography variant="caption" sx={{ color: '#7c7c7c' }}>{cake}</Typography>
              </Box>
            </EntityBox>
            <EntityBox>
              <Typography variant="body2" sx={{ marginBottom: '5px' }}>Followers</Typography>
              <Box sx={{ display: 'flex' }}>
                <PersonIcon fontSize="string" color="primary" sx={{ marginRight: '4px' }} />
                <Typography variant="caption" sx={{ color: '#7c7c7c' }}>{followers}</Typography>
                <FollowersArrow fontSize="string" color="disabled" />
              </Box>
            </EntityBox>
          </InfoBox>
          <AddSocialLink startIcon={<AddIcon />} variant="contained">Add social link</AddSocialLink>
          <br />
          <AddPost variant="contained">Add Post</AddPost>
          <MoreOptions>More options</MoreOptions>
        </ProfileBox>

      </UserInfoBox>
    </SidebarBox>
  );
}

export default Sidebar;
