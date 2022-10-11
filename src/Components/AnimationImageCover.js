import QenjaAnimation from "../Components/QenjaAnimation";
import landingpagetable1 from "../assets/images/landingpagetable1.png";

import {
  Wrapper,
  BackshadeLeft,
  BackshadeRight,
} from "../assets/wrappers/AnimationImageCover";

const AnimationImageCover = () => {
  return (
    <Wrapper>
      <div className="scrollerBackshade1"></div>
      <div className="scrollerBackshade2"></div>
      <div className="w-100">
        <div className="scrollerBackground">
          <div className="tiltedScrollingTextContainer">
            <p className="tiltedScrollingText">
              * Qenja Modern Ethno Clothes * Qenja Modern Ethno Clothes * Qenja
              Modern Ethno Clothes * Qenja Modern Ethno Clothes * Qenja Modern Ethno Clothes
            </p>
            {/* <p className="tiltedScrollingText">
              * Qenja Modern Ethno Clothes * Qenja Modern Ethno Clothes * Qenja
              Modern Ethno Clothes * Qenja Modern Ethno Clothes
            </p> */}
          </div>
        </div>
        <img class="imageUnderScroller" src={landingpagetable1} />
      </div>
    </Wrapper>
  );
};
export default AnimationImageCover;
