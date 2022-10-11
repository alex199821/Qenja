import styled from "styled-components";
import greenCircle from "../images/greenCircle.png";

const Wrapper = styled.section`
  padding-left: 32px;
  padding-right: 32px;
  .mainLanding {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .mainLandingText {
    display: flex;
    align-items: center;
    width: 50%;
    border-right: 1px solid var(--white);
    p {
      width: 60%;
      color: var(--white);
      font-size: 62px;
      font-weight: 700;
      line-height: 1.5;
    }
    b {
      background-image: url(${greenCircle});
      background-size: 150px;
      background-repeat: no-repeat;
      display: flex;
    }
  }
  .mainLandingImage {
    display: flex;
    justify-content: flex-end;
    width: 50%;
    height: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 32px;
    img {
      aspect-ratio: 1.075/1;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 1300px) {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 16px;
    .mainLanding {
      flex-direction: column;
    }
    .mainLandingText {
      width: 80%;
      border: 0;
      p {
        font-size: 32px;
        width: 100%;
      }
      b {
        background-image: url(${greenCircle});
        background-size: 70px;
        background-repeat: no-repeat;
        display: flex;
      }
    }
    .mainLandingImage {
      border: 0;
      width: 100%;
      padding-left: 0;
    }
  }
`;
export default Wrapper;
