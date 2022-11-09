import FilterFull from './FilterFull/FilterFull';
import FilterSmall from './FilterSmall/FilterSmall';
import { FilterBox } from './styles';

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
