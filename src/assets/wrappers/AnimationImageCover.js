import styled from "styled-components";

export const Wrapper = styled.section`
  .mainContainer {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    
  }
  .animationContainer {
    width: 100%;
  }
  .animationBackground {
    width: 101%;
    height: 101%;
    position: absolute;
    z-index: 1000;
    clip-path: polygon(100% 0%, 100% 60%, 60% 100%, 0% 100%);
  }
  .tiltedScrollingTextContainer {
    display: flex;
    font-family: "Space Grotesk", sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    color: #1d1d1d;
    font-size: 40px;
    width: 273%;
    padding: 1%;
    transform: rotate(-35deg);
    background-color: #d9ec00;
  }
  .tiltedScrollingText {
    flex-shrink: 0;
    animation: tiltedScrollingText 60s linear infinite;
  }

  @keyframes tiltedScrollingText {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  .imageUnderScroller {
    height: 100%;
    width: 100%; /* width of container */
    aspect-ratio: 34/24;
    object-fit: cover;
    object-position: 100% 12.5%;
    z-index: 1;
    /* opacity: 0; */
  }

`;

export const AnimationBackshadeRight = styled.section`
  position: absolute;
  width: 101%;
  height: 50%;
  clip-path: polygon(65% 0, 100% 85%, 100% 71%);
  background-color: white;
  z-index: -100;
`;

export const AnimationBackshadeLeft = styled.section`
  position: absolute;
  width: 75%;
  height: 101%;
  clip-path: polygon(0% 65%, 45.5% 100%, 62% 100%);
  background-color: white;
  z-index: -100;
`;

