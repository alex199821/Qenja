import QenjaAnimation from "../Components/QenjaAnimation";
import Wrapper from "../assets/wrappers/Contacts";
import { Link } from "react-router-dom";
import { socialLinksContactPage } from "../utils/links";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Components/Loading";
const Contacts = () => {
  const { contactsIsLoading, contacts } = useSelector((store) => store.ui);

  // Return loading until all contact info is recieved
  if (contactsIsLoading) {
    return <Loading />;
  }

  // Destructuring of contact info
  const { contactPhone, mail } = contacts[0];
  return (
    <>
      <QenjaAnimation className="animationGreen hideOnMobile" />
      <Wrapper>
        <main>
          <p className="contactUsLabel">Contact us:</p>
          <p className="phoneNumberLabel">{contactPhone}</p>
          <p className="emailLabel">{mail}</p>
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
