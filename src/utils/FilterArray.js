function FilterArray(arr, val) {
  const array = arr.filter((ele, index) => index !== val);
  return array;
}

export default FilterArray;
