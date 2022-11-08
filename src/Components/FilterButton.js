import { useEffect, useState } from "react";
import { FilterButtonWrapper } from "../assets/wrappers/Buttons";
import { useSelector, useDispatch } from "react-redux";
import { filterProducts } from "../features/products/productsSlice";
const FilterButton = ({ name, value }) => {
  const { selectedFilters } = useSelector((store) => store.products);
  const [checked, setChecked] = useState(value === "ALL" ? true : false);

  const dispatch = useDispatch();

  //Function to control that only selected filters are visually highlighted
  useEffect(() => {
    if (selectedFilters.indexOf(value) > -1) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [selectedFilters, value]);

  //Function to handle fiter on click, by setting opposite value of checked (set false if was checked and now is unchecked for example)
  const handleFilter = (e) => {
    let value = e.target.value;
    let selected = !checked;
    dispatch(filterProducts({ value, selected }));
  };

  return (
    <FilterButtonWrapper>
      <button
        onClick={handleFilter}
        value={value}
        className={checked ? "checked" : "unchecked"}
      >
        {name}
      </button>
    </FilterButtonWrapper>
  );
};
export default FilterButton;
