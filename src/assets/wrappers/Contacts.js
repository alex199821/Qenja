import styled from "styled-components";
import backgroundGrid from "../images/backgroundGrid.png";

const Wrapper = styled.section`
  //contactsMain position-relative
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary);
  background-image: url(${backgroundGrid});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 125%;
  height: 80vh;
  transition: var(--transition);
  width: 100%;
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-family: "Inter", sans-serif;
    color: var(--white);
    .contactUsLabel {
      font-weight: 700;
      margin-bottom: 30px;
    }
    .phoneNumberLabel {
      font-weight: 300;
      margin-bottom: 5px;
    }
    .emailLabel {
      font-weight: 300;
      margin-bottom: 30px;
    }
    .socialMediaLinksContainer {
      display: flex;
      flex-direction: row;
      /* gap: 1.5rem !important; */
    }
    .linkIcon {
      width: 35px;
      height: 35px;
      background-color: white;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0px 12px;
      img {
        width: auto;
        height: 50%;
      }
    }
  }
  @media (max-width: 769px) {
    main {
      line-height: 1.25;
      font-size: 18px;
      .linkIcon {
        width: 40px;
        height: 40px;
        img {
          width: auto;
          height: 50%;
        }
      }
    }
  }
`;

export default Wrapper;
