import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import NavSidebar from "./NavSidebar";
import SearchSidebar from "./SearchSidebar";
import Wrapper from "../assets/wrappers/Header";
import Logo from "../assets/images/Logo.png";
import { BurgerButton } from "../assets/wrappers/Buttons";
import { LogoSection, SearchBar } from "../assets/wrappers/Components";
import {
  openNavSidebar,
  openSearchSidebar,
  getContacts,
} from "../features/ui/uiSlice";
import { setItemsInCart } from "../features/cart/cartSlice";
import {
  setSearchValue,
  filterBySearch,
} from "../features/products/productsSlice";
import { SearchButton } from "../assets/wrappers/Buttons";
import { links } from "../utils/links";
import { useNavigate, Link, useLocation } from "react-router-dom";
const Header = () => {
  const [charactersTyped, setCharactersTyped] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const { cart, itemsInCart } = useSelector((store) => store.cart);
  const { searchValue } = useSelector((store) => store.products);

  //On click open Navigation side bar for mobile
  const handleOpenNavSidebar = () => {
    dispatch(openNavSidebar());
  };

  //On click open Search side bar for mobile
  const handleOpenSearchSidebar = () => {
    dispatch(openSearchSidebar());
  };

  //Function to handle whole search section with following logic - on first char typed navigate to shop and when no chats are left in search navigate back to the old page
  const handleSearch = (e) => {
    let search = e.target.value;
    dispatch(setSearchValue(e.target.value));
    setCharactersTyped(charactersTyped + 1);
    if (search.length === 1 && charactersTyped === 0) {
      navigate("/shop/");
    } else if (search.length === 0) {
      setCharactersTyped(0);
      navigate(-1);
    }
  };

  //Dispatch to get all data for contact page
  useEffect(() => {
    dispatch(getContacts());
  }, []);

  //Reset all search data every time user changes the page
  useEffect(() => {
    if (searchValue.length > 0 && path !== "/shop/") {
      dispatch(setSearchValue(""));
      setCharactersTyped(0);
    }
  }, [path, dispatch]);

  //Dispatch to filter shop by search query
  useEffect(() => {
    dispatch(filterBySearch(searchValue));
  }, [searchValue, dispatch]);

  useEffect(() => {
    dispatch(setItemsInCart());
  }, [cart, dispatch]);
  return (
    <>
      <NavSidebar />
      <SearchSidebar />
      <Wrapper>
        <section className="navContainer">
          <BurgerButton onClick={handleOpenNavSidebar} />
          {links.map((link) => {
            const { id, text, path } = link;
            return (
              <Link key={id} to={path} className="links">
                {text}
              </Link>
            );
          })}
        </section>
        <LogoSection>
          <img src={Logo} alt="QenjaLogo" />
        </LogoSection>
        <section className="navContainer cartContainer">
          <SearchBar
            type="text"
            placeholder="SEARCH"
            onChange={(e) => handleSearch(e)}
            value={searchValue}
          />
          <SearchButton onClick={handleOpenSearchSidebar} />
          <div className="cart">
            <span>{itemsInCart}</span>
            <Link to={"cart"} className="links">
              CART
            </Link>
          </div>
        </section>
      </Wrapper>
    </>
  );
};
export default Header;
