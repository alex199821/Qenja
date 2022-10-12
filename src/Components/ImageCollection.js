import { ImageCollectionWrapper } from "../assets/wrappers/Components";
import landingpagetable1 from "../assets/images/landingpagetable1.png";
import landingpagetable2 from "../assets/images/landingpagetable2.png";
import landingpagetable3 from "../assets/images/landingpagetable3.png";
import landingpagetable4 from "../assets/images/landingpagetable4.png";
import AnimationImageCover from "./AnimationImageCover";

const ImageCollection = () => {
  return (
    <ImageCollectionWrapper>
      <div className="imageContainer">
        <img src={landingpagetable1} />
      </div>
      <div className="imageContainer">
        <AnimationImageCover image={landingpagetable3} />
      </div>
      <div className="imageContainer">
        <img src={landingpagetable2} />
      </div>
      <div className="imageContainer">
        <img src={landingpagetable4} />
      </div>
    </ImageCollectionWrapper>
  );
};

export default ImageCollection;
