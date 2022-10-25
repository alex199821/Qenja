import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterButton from "./FilterButton";
import Wrapper from "../assets/wrappers/FiltersContainer";
import { setFilterOptions } from "../features/products/productsSlice";
const Filters = () => {
  const dispatch = useDispatch();
  const { filterTypes } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(setFilterOptions());
  }, []);

  return (
    <Wrapper>
      {filterTypes.map((filter, index) => {
        return <FilterButton key={index} name={filter} value={filter} />;
      })}
    </Wrapper>
  );
};
export default Filters;
