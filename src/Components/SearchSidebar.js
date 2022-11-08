import Wrapper from "../assets/wrappers/SearchSidebar";
import { CloseButton } from "../assets/wrappers/Buttons";
import { SearchSection } from "../assets/wrappers/Components";
import { closeSearchSidebar } from "../features/ui/uiSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchSidebar = () => {
  const dispatch = useDispatch();
  const { searchSidebarOpen } = useSelector((store) => store.ui);

  //On Click close search sidebar
  const handleCloseSearchSidebar = () => {
    dispatch(closeSearchSidebar());
  };
  return (
    <Wrapper>
      <section
        className={
          searchSidebarOpen
            ? "searchSidebar-container show-searchSidebar"
            : "searchSidebar-container"
        }
      >
        <header>
          <CloseButton onClick={handleCloseSearchSidebar} />
        </header>
        <main>
          <SearchSection type="text" placeholder="Search for products..." />
        </main>
      </section>
    </Wrapper>
  );
};
export default SearchSidebar;
