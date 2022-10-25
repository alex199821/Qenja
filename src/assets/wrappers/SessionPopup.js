import styled from "styled-components";

const Wrapper = styled.section`
  position: relative;
  z-index: 999;
  .modal {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    z-index: 99999;
    backdrop-filter: blur(6px);
    .popup {
      border: 1px solid var(--grey);
      text-align: center;
      justify-content: center;
      align-items: center;
      padding: 16px 50px 16px 50px;
      background-color: var(--secondary);
      color: var(--green);
      font-weight: 300;
      font-size: 16px;
      font-family: "Space Grotesk", sans-serif;
      width: 30%;
      height: 100px;
      padding-top: 30px;
      .buttonContainer {
        margin-top: 30px;
        .sessionButton {
          font-family: "Inter", sans-serif;
          background-color: transparent;
          border: 1px solid #c4c4c4;
          color: var(--white);
          font-size: 16px;
          border: none;
          padding: 0px 20px;
          cursor: pointer;
        }
      }
    }
  }
  @media (max-width: 769px) {
    .modal {
      .popup {
        width: 100%;
      }
    }
  }
`;
export default Wrapper;
