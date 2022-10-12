import styled from "styled-components";

export const Wrapper = styled.section`
  margin-bottom: 30px;
  .mainContainer {
    // d-flex position-relative w-100 h-100
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
  }
  .animationContainer {
    width: 100%;
  }
  .scrollerBackground {
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
    aspect-ratio: 32/24;
    object-fit: cover;
    object-position: 100% 12.5%;
    z-index: 1;
  }

  .scrollerBackshade1 {
    position: absolute;
    width: 101%;
    height: 50%;
    clip-path: polygon(65% 0, 100% 75%, 100% 67%);
    background-color: white;
    z-index: -100;
  }
  .scrollerBackshade2 {
    position: absolute;
    width: 75%;
    height: 101%;
    clip-path: polygon(0% 55%, 37.5% 100%, 45% 100%);
    background-color: white;
    z-index: -100;
  }
`;

export const BackshadeLeft = styled.section`
  position: absolute;
  width: 101%;
  height: 50%;
  clip-path: polygon(65% 0, 100% 75%, 100% 67%);
  background-color: white;
  z-index: -100;
`;

export const BackshadeRight = styled.section`
  position: absolute;
  width: 75%;
  height: 101%;
  clip-path: polygon(0% 55%, 37.5% 100%, 45% 100%);
  background-color: white;
  z-index: -100;
`;

//d-flex position-relative w-100 h-100
