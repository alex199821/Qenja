import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterButton from "./FilterButton";
import Wrapper from "../assets/wrappers/FiltersContainer";
import { setFilterOptions } from "../features/products/productsSlice";
const Filters = () => {
  const dispatch = useDispatch();
  const { filterTypes, isLoading, productsList } = useSelector(
    (store) => store.products
  );

  //Dispatch to get all filter types
  useEffect(() => {
    dispatch(setFilterOptions());
  }, [productsList, dispatch]);
  if (!isLoading)
    return (
      <Wrapper>
        {filterTypes.map((filter, index) => {
          return <FilterButton key={index} name={filter} value={filter} />;
        })}
      </Wrapper>
    );
};
export default Filters;
