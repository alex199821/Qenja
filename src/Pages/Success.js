import QenjaAnimation from "../Components/QenjaAnimation";
import Wrapper from "../assets/wrappers/Success";
import checkMark from "../assets/images/checkMark.png";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetState } from "../features/cart/cartSlice";
const Success = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
  }, []);
  return (
    <>
      <QenjaAnimation className="animationGreen hideOnMobile" />
      <Wrapper>
        <div className="imageContainer">
          <img src={checkMark} alt="Success Sign" />
        </div>
        <p className="errorLabel">Thank you for your order</p>
      </Wrapper>
      <QenjaAnimation className="animationOrange hideOnMobile" />
    </>
  );
};
export default Success;
