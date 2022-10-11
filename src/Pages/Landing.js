import Wrapper from "../assets/wrappers/Landing";
import landingPageImg from "../assets/images/landingPageImg.png";
import QenjaAnimation from "../Components/QenjaAnimation";
import MainLanding from "../Components/MainLanding";
import ImageCollection from "../Components/ImageCollection";
const Landing = () => {
  return (
    <>
      <Wrapper>
        <MainLanding />
        <QenjaAnimation className="animationGreen" />
        <ImageCollection />
      </Wrapper>
    </>
  );
};

export default Landing;
