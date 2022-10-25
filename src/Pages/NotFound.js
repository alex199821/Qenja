import { Outlet } from "react-router-dom";
import QenjaAnimation from "../Components/QenjaAnimation";
import NotFoundWrapper from "../assets/wrappers/NotFound";
import rejectionMark from "../assets/images/rejectionMark.png";
import ErrorComponent from "../Components/ErrorComponent";
const NotFound = () => {
  return (
    <>
      <QenjaAnimation className="animationGreen hideOnMobile" />
      <ErrorComponent error={"Page not found..."} />
      <QenjaAnimation className="animationOrange hideOnMobile" />
    </>
  );
};
export default NotFound;
