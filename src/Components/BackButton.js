import { useEffect, useState } from "react";
import { BackButtonWrapper } from "../assets/wrappers/Buttons";
import { IoIosArrowBack } from "react-icons/io";

const BackButton = () => {
  return (
    <BackButtonWrapper>
      <IoIosArrowBack />
      &nbsp;&nbsp;<p>Back</p>
    </BackButtonWrapper>
  );
};
export default BackButton;
