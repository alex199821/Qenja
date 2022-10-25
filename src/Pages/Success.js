import QenjaAnimation from "../Components/QenjaAnimation";
import Wrapper from "../assets/wrappers/Success";
import checkMark from "../assets/images/checkMark.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { resetState } from "../features/cart/cartSlice";
const Success = () => {
  const dispatch = useDispatch();
  const { finalOrder } = useSelector((store) => store.cart);

  useEffect(() => {
    console.log(finalOrder);
  }, [finalOrder]);

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
