import { Box } from '@mui/material';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import {
  ContentSubHeader, ContentHeader, Content, Text, SubHeader,
} from '../../styles';
import { ProfilePic, AddPhoto } from './styles';

function ProfileImage() {
  return (
    <>
      <SubHeader>
        IMAGES
      </SubHeader>
      <Text>
        <Content>
          <ContentHeader>
            Avatar and banner image
          </ContentHeader>
          <ContentSubHeader>
            Images must be .png or .jpg format
          </ContentSubHeader>
        </Content>
        <Box sx={{
          display: 'flex',
          '@media screen and (max-width: 626px)': {
            flexDirection: 'column',
          },
        }}
        >
          <Box sx={{ display: 'flex', marginRight: '18px' }}>
            <Box sx={{
              position: 'relative',
            }}
            >
              <ProfilePic width="120px" height="120px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXg_06hyVEIg2vPsEiAQ5M6c0DjU7vBYzovw&usqp=CAU" alt="user photo" />
              <AddPhoto sx={{
                border: (theme) => `thin solid ${theme.palette.primary.main}`,
                position: 'absolute',
                right: '5%',
                top: '65%',
              }}
              >
                <AddAPhotoOutlinedIcon color="primary" fontSize="small" />
              </AddPhoto>

            </Box>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{
              position: 'relative',
            }}
            >
              <ProfilePic
                sx={{
                  '@media screen and (max-width: 626px)': {
                    width: '250px',
                  },
                }}
                width="412px"
                height="120px"
                src="https://flxt.tmsimg.com/assets/p14505262_i_v10_aa.jpg"
                alt="user photo"
              />
              <AddPhoto sx={{
                border: (theme) => `thin solid ${theme.palette.primary.main}`,
                position: 'absolute',
                right: '5%',
                top: '65%',
              }}
              >
                <AddAPhotoOutlinedIcon color="primary" fontSize="small" />
              </AddPhoto>
            </Box>
          </Box>
        </Box>
      </Text>
    </>
  );
}

export default ProfileImage;
