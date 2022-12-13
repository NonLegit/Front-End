import { useEffect, useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  AboutContent, AboutCountainer, AboutCountainerRule, AboutDisc, AboutString, AboutStringRule, Hr,
} from './style';

/**
 * About Section for normal user
 * @component
 * @return {React.Component} - About Section for normal user
 */
function Rules(props) {
  const [show, setShow] = useState([]);
  const { Name, rules } = props;

  const handleClick = (index) => {
    const arr = new Array(rules?.length).fill(false);
    if (show[index] === true) {
      setShow(arr);
    } else {
      arr[index] = true;
      setShow(arr);
    }
  };

  useEffect(() => {
    const arr = new Array(rules?.length).fill(false);
    console.log(arr);
    setShow(false);
    console.log(show);
    // setShow([false]);
    // console.log(rules.length);
  }, [rules]);
  return (
    <AboutCountainer>

      <AboutString>
        r/
        {Name}
      </AboutString>

      { rules?.map((entity, index) => (
        <>
          <AboutCountainerRule key={`${index + 0}`}>
            <AboutStringRule onClick={() => handleClick(index)}>
              {index + 1}
              .
              {entity.title}
              {show[index]
                ? <ExpandLessIcon />
                : <ExpandMoreIcon />}
            </AboutStringRule>
          </AboutCountainerRule>
          {show[index]
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

    </AboutCountainer>

  );
}

export default Rules;
