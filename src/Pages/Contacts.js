import QenjaAnimation from "../Components/QenjaAnimation";
import Wrapper from "../assets/wrappers/Contacts";
import { Link } from "react-router-dom";
import { socialLinksContactPage } from "../utils/links";

const Contacts = () => {
  return (
    <>
      <QenjaAnimation className="animationGreen hideOnMobile" />
      <Wrapper>
        <main>
          <p className="contactUsLabel">Contact us:</p>
          <p className="phoneNumberLabel">+1-415-555-0173</p>
          <p className="emailLabel">contact@qenja.com</p>
          <div className="socialMediaLinksContainer">
            {socialLinksContactPage.map((link) => {
              const { id, path, image } = link;
              return (
                <Link key={id} to={path}>
                  <div className="linkIcon">
                    {" "}
                    <img src={image} alt="Social Media Logo" />
                  </div>
                </Link>
              );
            })}
          </div>
        </main>
      </Wrapper>
      <QenjaAnimation className="animationOrange hideOnMobile" />
    </>
  );
};
export default Contacts;
