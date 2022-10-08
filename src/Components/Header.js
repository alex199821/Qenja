import Wrapper from "../assets/wrappers/Header";
import Logo from "../assets/images/Logo.png";
import burgerIcon from "../assets/images/burgerIcon.png";
import searchIcon from "../assets/images/searchIcon.png";
import Select from "react-select";
import { Link } from "react-router-dom";
import LanguageSelect from "./LanguageSelect";
const Header = () => {
  return (
    <Wrapper>
      <section className="nav-container">
        <button className="burger">
          <img src={burgerIcon} alt="Header Menu" />
        </button>
        <LanguageSelect />
        <Link to={"www.google.com"} className="links">
          SHOP
        </Link>
        <Link to={"www.google.com"} className="links">
          ABOUT
        </Link>
        <Link to={"www.google.com"} className="links">
          CONTACT
        </Link>
      </section>
      <section className="logo">
        <img src={Logo} alt="QenjaLogo" />
      </section>
      <section className="nav-container cart-container">
        <input className="search-bar " type="text" placeholder="SEARCH"></input>
        <button
          className="searchIcon"
        >
          <img src={searchIcon} alt="Search Icon" />
        </button>
        <div className="cart">
          <span>0</span>
          <Link to={"www.google.com"} className="links">
            CART
          </Link>
        </div>
      </section>
    </Wrapper>
  );
};
export default Header;
