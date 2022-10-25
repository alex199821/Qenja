import { useEffect, useState } from "react";
import NotFoundWrapper from "../assets/wrappers/NotFound";
import rejectionMark from "../assets/images/rejectionMark.png";

const ErrorComponent = ({ error }) => {
  return (
    <NotFoundWrapper>
      <div className="imageContainer">
        <img src={rejectionMark} alt="Rejection sign inside circle" />
      </div>
      <p className="errorLabel">{error}</p>
    </NotFoundWrapper>
  );
};
export default ErrorComponent;
