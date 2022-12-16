import {
  AboutCountainer, AboutString,
} from './style';
import Entity from './Entity/Entity';

/**
 * About Section for normal user
 * @component
 * @return {React.Component} - About Section for normal user
 */
function Rules(props) {
  const { Name, rules } = props;

  return (
    <AboutCountainer>

      <AboutString>
        r/
        {Name}
      </AboutString>

      { rules?.map((entity, index) => (
        <Entity rule={entity} index={index} />
      ))}

    </AboutCountainer>

  );
}

export default Rules;
