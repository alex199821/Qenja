import styled from "styled-components";
import cover from "../images/cover.png";

const Wrapper = styled.section`
  padding-left: 32px;
  padding-right: 32px;
  .mainAboutSection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 90%;
    h1 {
      font-weight: 700;
      color: var(--white);
      font-size: 62px;
      text-transform: uppercase;
      width: 55%;
      margin-top: 75px;
    }
    p {
      font-weight: 600;
      color: var(--white);
      font-size: 28px;
      width: 70%;
      margin-bottom: 80px;
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
    .coverImage {
      width: 100%;
      margin-top: 40px;
      margin-bottom: 40px;
    }
  }
  .minorAboutSection {
    display: flex;
    padding-top: 80px;
    padding-bottom: 80px;
    flex-direction: row;
    width: 100%;
    align-items: flex-end;
    font-size: 18px;
    div {
      width: 50%;
    }
    img {
      width: 100%;
    }
    p {
      color: var(--grey);
      padding-left: 100px;
      margin: 0;
      font-weight: 200;
      width: 50%;
      font-size: 20px;
      font-family: "Inter", sans-serif;
    }
    b {
      font-weight: 500;
    }
  }

  @media (max-width: 1300px) {
    .mainAboutSection {
      width: 100%;
      h1 {
        line-height: 1.25;
        font-size: 32px;
        width: 100%;
        margin-top: 30px;
      }
      p {
        font-size: 18px;
        font-weight: 400;
        width: 90%;
        margin-bottom: 40px;
      }
      b {
        font-weight: 700;
      }
    }
    .minorAboutSection {
      flex-direction: column;
      padding-top: 40px;
      padding-bottom: 40px;
      div {
        width: 100%;
      }
      img {
        padding-top: 16px;
        padding-bottom: 16px;
      }
      p {
        line-height: 1.25;
        width: 100%;
        padding-left: 0px;
        font-size: 14px;
      }
      b {
        font-weight: 700;
      }
    }
  }
`;
export default Wrapper;
