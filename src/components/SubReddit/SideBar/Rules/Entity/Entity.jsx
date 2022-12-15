import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import {
  AboutContent, AboutCountainerRule, AboutDisc, AboutStringRule, Hr,
} from './style';

/**
 * About Section for normal user
 * @component
 * @return {React.Component} - About Section for normal user
 */
function Entity(props) {
  const { rule, index } = props;
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <AboutCountainerRule key={`${index + 0}`}>
        <AboutStringRule onClick={() => handleClick()}>
          {index + 1}
          .
          {rule.title}
          {show
            ? <ExpandLessIcon />
            : <ExpandMoreIcon />}
        </AboutStringRule>
      </AboutCountainerRule>
      {show
          && (
          <AboutContent>
            <AboutDisc>
              {rule.description}
            </AboutDisc>
          </AboutContent>
          )}
      <Hr />
    </>
  );
}

export default Entity;
