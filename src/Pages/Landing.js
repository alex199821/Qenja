import CoverImage from "../Components/CoverImage";
import QenjaAnimation from "../Components/QenjaAnimation";
import MainLanding from "../Components/MainLanding";
import ImageCollection from "../Components/ImageCollection";
import ShopPreview from "../Components/ShopPreview";
import { landingCoverData, landingLowerCoverData } from "../utils/links";

const Landing = () => {
  return (
    <>
      <MainLanding />
      <QenjaAnimation className="animationGreen" />
      <ImageCollection />
      <CoverImage data={landingCoverData} />
      <ShopPreview />
      <QenjaAnimation className="animationYellow" />
      <CoverImage data={landingLowerCoverData} />
    </>
  );
};

export default Landing;
