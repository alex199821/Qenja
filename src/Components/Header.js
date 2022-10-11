import { useDispatch, useSelector } from "react-redux";
import NavSidebar from "./NavSidebar";
import SearchSidebar from "./SearchSidebar";
import Wrapper from "../assets/wrappers/Header";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";
import LanguageSelect from "./LanguageSelect";
import { BurgerButton } from "../assets/wrappers/Buttons";
import { LogoSection, SearchBar } from "../assets/wrappers/Components";
import { openNavSidebar, openSearchSidebar } from "../features/ui/uiSlice";
import { SearchButton } from "../assets/wrappers/Buttons";
import { links } from "../utils/links";
const Header = () => {
  const dispatch = useDispatch();

  const handleOpenNavSidebar = () => {
    dispatch(openNavSidebar());
  };

  const handleOpenSearchSidebar = () => {
    dispatch(openSearchSidebar());
  };
  return (
    <>
      <NavSidebar />
      <SearchSidebar />
      <Wrapper>
        <section className="navContainer">
          <BurgerButton onClick={handleOpenNavSidebar} />
          <LanguageSelect props="languageSelect" />
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
          <SearchBar type="text" placeholder="SEARCH" />
          <SearchButton onClick={handleOpenSearchSidebar} />
          <div className="cart">
            <span>0</span>
            <Link to={"#"} className="links">
              CART
            </Link>
          </div>
        </section>
      </Wrapper>
    </>
  );
};
export default Header;
