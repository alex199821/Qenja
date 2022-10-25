import styled from "styled-components";

export const Wrapper = styled.section`
  padding-left: 32px;
  padding-right: 32px;
  margin-top: 35px;
  margin-bottom: 35px;
  img {
    aspect-ratio: 10/4;
    width: 100%;
    object-fit: cover;
  }
  p {
    font-weight: 500;
    color: var(--white);
    font-size: 18px;
    margin-bottom: 30px;
    line-height: 1.25;
    width: 60%;
  }
  p b {
    display: inline-block;
    position: relative;
  }

  p b::after {
    content: "";
    position: absolute;
    bottom: 1%;
    left: 0;
    height: 0.5rem;
    width: 100%;
    background: #d9ec00;
    z-index: -1;
  }

  @media (max-width: 769px) {
    padding-left: 0px;
    padding-right: 0px;
    margin-top: 35px;
    margin-bottom: 35px;
    img {
      padding-left: 0;
      padding-right: 0;
    }
    p {
      font-size: 18px;
      line-height: 1.25;
      padding-left: 16px;
      padding-right: 16px;
    }
  }
`;
//fw-500 white font-spaceGrotesk fs-3 mb-6 px-3 fs-4-sm w-75  lh-sm
