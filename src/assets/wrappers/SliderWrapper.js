import styled from "styled-components";

const SliderWrapper = styled.section`
  width: 50%;
  padding: 0;
  .carousel-root {
    width: 80%;
    margin-left: 32px;
    margin-right: 32px;
  }
  .thumb {
    padding: 0px;
    border: none;
  }
  .carousel .control-dots .dot.selected,
  .carousel .control-dots .dot:hover {
    background-color: var(--green);
  }
  .carousel .thumb.selected,
  .carousel .thumb:hover {
    border: 1px solid var(--grey);
  }
  .carousel .thumbs-wrapper {
    margin-left: 0;
  }
  .carousel .control-dots .dot {
    box-shadow: none;
  }

  @media (max-width: 769px) {
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
    .carousel-root {
      width: 100%;
      margin: 0px;
    }
  }
`;
export default SliderWrapper;
