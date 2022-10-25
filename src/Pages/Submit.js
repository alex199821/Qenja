import QenjaAnimation from "../Components/QenjaAnimation";
import Wrapper from "../assets/wrappers/Submit";
import BackButton from "../Components/BackButton";
import PersonalInformationForm from "../Components/PersonalInformationForm";
import ErrorComponent from "../Components/ErrorComponent";
import { useSelector } from "react-redux";

const Submit = () => {
  const { cart } = useSelector((store) => store.cart);
  return (
    <>
      <QenjaAnimation className="animationGreen hideOnMobile" />
      {cart.length > 0 ? (
        <Wrapper>
          <section className="submitHeader">
            <BackButton text={"Back"} />
          </section>
          <PersonalInformationForm />
        </Wrapper>
      ) : (
        <ErrorComponent error={"No items in Cart"} />
      )}
      <QenjaAnimation className="animationOrange hideOnMobile" />
    </>
  );
};

export default Submit;
