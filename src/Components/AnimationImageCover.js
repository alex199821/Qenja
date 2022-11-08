import {
  Wrapper,
  AnimationBackshadeLeft,
  AnimationBackshadeRight,
} from "../assets/wrappers/AnimationImageCover";

const AnimationImageCover = ({ image }) => {
  return (
    <Wrapper>
      <div className="mainContainer">
        {/* This backshades are little white shades under anomation on the edges of image */}
        <AnimationBackshadeLeft />
        <AnimationBackshadeRight />
        {/* Divs below are different parts of tilted scrolling animation */}
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
