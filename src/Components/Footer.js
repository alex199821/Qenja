import { Wrapper, SubscibeFormWrapper } from "../assets/wrappers/Footer";
import SubscibeForm from "./SubscribeForm";
import qenjaLogoBlack from "../assets/images/qenjaLogoBlack.png";
import { links } from "../utils/links";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <img src={qenjaLogoBlack} alt="QenjaLogo" />
      <section className="pageNavigationContainer">
        <SubscibeForm />
        <nav>
          <div>
            {links.map((link) => {
              const { id, text, path } = link;
              return (
                <Link key={id} to={path} className="linksFooter">
                  {text}
                </Link>
              );
            })}
          </div>
          <div>
            <Link to={"#"} className="linksFooter">
              FAQ
            </Link>
            <Link to={"#"} className="linksFooter hideLinksFooter">
              PRIVACY POLICIES
            </Link>
            <Link to={"#"} className="linksFooter hideLinksFooter">
              TERMS & CONDITIONS
            </Link>
          </div>
        </nav>
      </section>

      <section className="socialNavigationContainer">
        <p>© Copyright 2022</p>
        <nav className="socialLinksContainer">
          <Link to={"#"} className="socialMediaLink">
            INSTAGRAM
          </Link>
          <Link to={"#"} className="socialMediaLink">
            FACEBOOK
          </Link>
          <Link to={"#"}>
            <FaFacebookF className="socialMediaIcon" />
          </Link>
          <Link to={"#"}>
            <FaInstagram className="socialMediaIcon" />
          </Link>
        </nav>
        <nav className="additionalLinksContainer">
          <Link to={"#"} className="additionalLinks">
            PRIVACY POLICIES
          </Link>
          <Link to={"#"} className="additionalLinks">
            TERMS & CONDITIONS
          </Link>
        </nav>
      </section>
    </Wrapper>
  );
};
export default Footer;
