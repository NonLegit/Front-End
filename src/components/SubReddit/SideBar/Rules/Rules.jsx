import {
  AboutCountainer, AboutString,
} from './style';
import Entity from './Entity/Entity';

/**
 * About Rule
 * @component
 * @return {React.Component} - Add Rule
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
