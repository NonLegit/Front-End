import FilterFull from './FilterFull/FilterFull';
import FilterSmall from './FilterSmall/FilterSmall';
import { FilterBox } from './styles';

/**
 * Navbar to filter posts by their category
 *
 * @component Filter
 * @property {string} subTitle - title of page should navigate to
 * @returns {React.Component} Filter
 */
function Filter(props) {
  const { subTitle2 } = props;
  return (
    <FilterBox>
      <FilterSmall subTitle2={subTitle2} />
      <FilterFull subTitle2={subTitle2} />
    </FilterBox>
  );
}

export default Filter;
