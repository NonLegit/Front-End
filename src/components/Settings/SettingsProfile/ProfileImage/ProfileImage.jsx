import { Box } from '@mui/material';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { useContext, useEffect } from 'react';
import {
  ContentSubHeader, ContentHeader, Content, Text, SubHeader,
} from '../../styles';
import { ProfilePic, AddPhoto } from './styles';
import { SettingsContext } from '../../../../contexts/SettingsProvider';
/**
 * - ProfileImage
 * - Edit Image and Banner in Seetings Page
 *  @component
 */

function ProfileImage() {
  const {
    prefs,
  } = useContext(SettingsContext);
  useEffect(() => { console.log(prefs); }, [prefs]);
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
              <ProfilePic width="120px" height="120px" src={prefs?.profilePicture || ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW4WYr1pgUClZPWwR1HABYGXw34armKi07qvbZ_B4&s'} alt="user photo" />
              <AddPhoto sx={{
                border: (theme) => `thin solid ${theme.palette.primary?.main}`,
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
                src={prefs?.profileBackground || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW4WYr1pgUClZPWwR1HABYGXw34armKi07qvbZ_B4&s'}
                alt="user photo"
              />
              <AddPhoto sx={{
                border: (theme) => `thin solid ${theme.palette.primary?.main}`,
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
