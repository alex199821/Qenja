import { MainLandingWrapper } from "../assets/wrappers/MainLanding";
import { useSelector } from "react-redux";

const MainLanding = () => {
  const { landingPage } = useSelector((store) => store.ui);

  // Destructuring of landing page contents
  const {
    landingMainHeaderText: { standartText, textInCircle },
    landingMainHeaderImage,
  } = landingPage[0];

  return (
    <MainLandingWrapper>
      <section className="mainLanding">
        <div className="mainLandingText">
          <p>
            {standartText} <b>{textInCircle}</b>
          </p>
        </div>
        <div className="mainLandingImage">
          <img src={landingMainHeaderImage} alt="LandingImage" />
        </div>
      </section>
    </MainLandingWrapper>
  );
};

export default MainLanding;
