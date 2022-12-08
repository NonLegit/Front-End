import { Box } from '@mui/material';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { useContext, useState, useEffect } from 'react';
import {
  ContentSubHeader, ContentHeader, Content, Text, SubHeader,
} from '../../styles';
import { ProfilePic, AddPhoto } from './styles';
import { SettingsContext } from '../../../../contexts/SettingsProvider';
import { image } from '../../settingsServer';

/**
 * - ProfileImage
 * - Edit Image and Banner in Seetings Page
 *  @component
 */

function ProfileImage() {
  const {
    prefs, setPrefs,
  } = useContext(SettingsContext);
  const [formData, setFormData] = useState();

  useEffect(() => {
    console.log('ss', formData);
  }, [formData]);
  const onFileChange = async (event, type) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        if (type === 'profileBackground') {
          setPrefs((oldPrefs) => ({ ...oldPrefs, profileBackground: reader.result }));
        } else {
          setPrefs((oldPrefs) => ({ ...oldPrefs, profilePicture: reader.result }));
        }
        setFormData({
          type,
          file: reader.result,
        });
      }
    };

    if (file && (file.type.match('image/png') || file.type.match('image/jpg') || file.type.match('image/jpeg'))) {
      reader.readAsDataURL(event.target.files[0]);
      image(reader.result, type);
    }
  };

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
              <ProfilePic width="120px" height="120px" src={prefs?.profilePicture} alt="user photo" />

              <AddPhoto
                sx={{
                  border: (theme) => `thin solid ${theme.palette.primary?.main}`,
                  position: 'absolute',
                  right: '5%',
                  top: '65%',
                }}
              >
                <label type="file" htmlFor="profilePicture">
                  <input style={{ display: 'none' }} type="file" name="image-upload" accept=".png, .jpg, .jpeg" id="profilePicture" onChange={(e) => { onFileChange(e, 'profilePicture'); }} />
                  <AddAPhotoOutlinedIcon sx={{ cursor: 'pointer', marginTop: '5px' }} color="primary" fontSize="small" />
                </label>
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
                src={prefs?.profileBackground}
                alt="user photo"
              />
              <AddPhoto sx={{
                border: (theme) => `thin solid ${theme.palette.primary?.main}`,
                position: 'absolute',
                right: '5%',
                top: '65%',
              }}
              >
                <label type="file" htmlFor="profileBackground">
                  <input style={{ display: 'none' }} type="file" name="image-upload" accept=".png, .jpg, .jpeg" id="profileBackground" onChange={(e) => { onFileChange(e, 'profileBackground'); }} />
                  <AddAPhotoOutlinedIcon sx={{ cursor: 'pointer', marginTop: '5px' }} color="primary" fontSize="small" />
                </label>
              </AddPhoto>
            </Box>
          </Box>
        </Box>
      </Text>
    </>
  );
}

export default ProfileImage;
