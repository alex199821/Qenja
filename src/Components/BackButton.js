import { useEffect, useState } from "react";
import { BackButtonWrapper } from "../assets/wrappers/Buttons";
import { IoIosArrowBack } from "react-icons/io";

const BackButton = ({ text }) => {
  return (
    <BackButtonWrapper>
      <IoIosArrowBack />
      &nbsp;&nbsp;<p>{text}</p>
    </BackButtonWrapper>
  );
};
export default BackButton;
