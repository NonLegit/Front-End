import OtherProfileFilterFull from './OtherProfileFilterFull/OtherProfileFilterFull';
import OtherProfileFilterSmall from './OtherProfileFilterSmall/OtherProfileFilterSmall';
import { FilterBox } from './styles';

/**
 * Navbar to filter posts by their category
 *
 * @component OtherProfileFilter
 * @property {string} subTitle - title of page should navigate to
 * @returns {React.Component} OtherProfileFilter
 */
function OtherProfileFilter(props) {
  const { subTitle2 } = props;
  return (
    <FilterBox>
      <OtherProfileFilterSmall subTitle2={subTitle2} />
      <OtherProfileFilterFull subTitle2={subTitle2} />
    </FilterBox>
  );
}

export default OtherProfileFilter;
