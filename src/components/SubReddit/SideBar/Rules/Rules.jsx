import { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  AboutContent, AboutCountainer, AboutDisc, AboutString, Hr,
} from './style';
/**
 * About Section for normal user
 * @component
 * @return {React.Component} - About Section for normal user
 */
function Rules(props) {
  const [show, setShow] = useState(false);

  const { name, rules } = props;
  return (
    <>
      <AboutCountainer>
        <AboutString>
          r/
          {name}
        </AboutString>
      </AboutCountainer>

      { rules?.map((entity, index) => (
        <>
          <AboutCountainer key={`${index + 0}`}>
            <AboutString onClick={() => setShow(!show)}>
              {index}
              .
              {entity.title}
              show ?
              {' '}
              <ExpandLessIcon />
              :
              <ExpandMoreIcon />
            </AboutString>
          </AboutCountainer>
          {show
          && (
          <AboutContent>
            <AboutDisc>
              {entity.description}
            </AboutDisc>
          </AboutContent>
          )}
          <Hr />
        </>
      ))}
      {/* <AboutString>
        1.Posts must be 3D-printing-related
      </AboutString> */}

    </>
  );
}

export default Rules;
