import landingPageImg from "../assets/images/landingPageImg.png";
import { MainLandingWrapper } from "../assets/wrappers/Components";
const MainLanding = () => {
  return (
    <MainLandingWrapper>
      <section className="mainLanding">
        <div className="mainLandingText">
          <p>
            LOREM IPSUM IS SIMPLY DUMMY <b>TEXT OF THE PRINTING</b>
          </p>
        </div>
        <div className="mainLandingImage">
          <img src={landingPageImg} alt="LandingImage" />
        </div>
      </section>
    </MainLandingWrapper>
  );
};

export default MainLanding;
