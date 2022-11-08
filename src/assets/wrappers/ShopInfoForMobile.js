import styled from "styled-components";

const Wrapper = styled.section`
  display: none;
  flex-direction: column;
  div {
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 75px;
    margin-bottom: 30px;
    .shortDescription {
      font-weight: 500;
      color: var(--white);
      font-family: "Inter", sans-serif;
      margin-bottom: 15px;
      font-size: 16px;
      width: 90%;
      line-height: 1.25;
    }
    .longDescription {
      font-weight: 300;
      color: var(--grey);
      font-family: "Inter", sans-serif;
      font-size: 12px;
      width: 90%;
      line-height: 1.25;
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
      background: var(--green);
      z-index: -1;
    }
  }
  .mobileShopInfoImage{
    width: 100%;
    height: calc(100vw*0.71);
  }
  @media (max-width: 769px) {
    display: flex;
  }
`;
export default Wrapper;
