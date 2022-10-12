import QenjaAnimation from "../Components/QenjaAnimation";
import landingpagetable1 from "../assets/images/landingpagetable1.png";

import {
  Wrapper,
  AnimationBackshadeLeft,
  AnimationBackshadeRight,
} from "../assets/wrappers/AnimationImageCover";

const AnimationImageCover = ({ image }) => {
  return (
    <Wrapper>
      <div className="mainContainer">
        <AnimationBackshadeLeft />
        <AnimationBackshadeRight />
        <div className="animationContainer">
          <div className="animationBackground">
            <div className="tiltedScrollingTextContainer">
              <p className="tiltedScrollingText">
                * Qenja Modern Ethno Clothes * Qenja Modern Ethno Clothes *
                Qenja Modern Ethno Clothes * Qenja Modern Ethno Clothes
              </p>
              <p className="tiltedScrollingText">
                * Qenja Modern Ethno Clothes * Qenja Modern Ethno Clothes *
                Qenja Modern Ethno Clothes * Qenja Modern Ethno Clothes
              </p>
            </div>
          </div>
          <img className="imageUnderScroller" src={image} alt="PLZWORK" />
        </div>
      </div>
    </Wrapper>
  );
};
export default AnimationImageCover;
