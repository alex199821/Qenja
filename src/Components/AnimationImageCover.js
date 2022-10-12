import QenjaAnimation from "../Components/QenjaAnimation";
import landingpagetable1 from "../assets/images/landingpagetable1.png";

import {
  Wrapper,
  BackshadeLeft,
  BackshadeRight,
} from "../assets/wrappers/AnimationImageCover";

const AnimationImageCover = ({ image }) => {
  return (
    <Wrapper>
      <div className="mainContainer">
        <div class="scrollerBackshade1"></div>
        <div class="scrollerBackshade2"></div>
        <div class="animationContainer">
          <div class="scrollerBackground">
            <div class="tiltedScrollingTextContainer">
              <p class="tiltedScrollingText">
                * Qenja Modern Ethno Clothes * Qenja Modern Ethno Clothes *
                Qenja Modern Ethno Clothes * Qenja Modern Ethno Clothes
              </p>
              <p class="tiltedScrollingText">
                * Qenja Modern Ethno Clothes * Qenja Modern Ethno Clothes *
                Qenja Modern Ethno Clothes * Qenja Modern Ethno Clothes
              </p>
            </div>
          </div>
          <img class="imageUnderScroller" src={image} alt="PLZWORK" />
        </div>
      </div>
    </Wrapper>
  );
};
export default AnimationImageCover;
