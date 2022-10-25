import styled from "styled-components";

const Wrapper = styled.section`
  .shopPreviewDescriptionContainer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 16px;
    .shortDescription {
      font-weight: 700;
      color: var(--white);
      font-size: 42px;
      width: 30%;
    }
    .longDescription {
      font-weight: 300;
      font-size: 14px;
      color: var(--grey);
      width: 30%;
      text-align: end;
    }
  }
  .productListContainer {
    padding-left: 32px;
    padding-right: 32px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1vw;
  }
  .productContainer {
    height: 100%;
    width: 49%;
    img {
      width: 100%;
    }
  }
  .productNameContainer {
    display: flex;
    margin-top: 10px;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 18px;
      color: var(--grey);
      font-weight: 500;
      margin-bottom: 20px;
      font-family: "Inter", sans-serif;
    }
  }
  .linkContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    margin-bottom: 30px;
    p {
      color: var(--grey);
      font-weight: 300;
      font-size: 14px;
      font-family: "Inter", sans-serif;
      height: 100%;
      width: auto;
    }
    img {
      width: auto;
      height: 100%;
    }
  }
  .discoverMoreContainer {
    display: flex;
    justify-content: center;
    border-top: 1px solid #c4c4c4;
  }
  .disoverMoreButton {
    // secondary fw-300 py-3
    color: var(--grey);
    font-weight: 300;
    padding: 16px 30px 16px 30px;
    background-color: transparent;
    border: none;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    font-family: "Inter", sans-serif;
    cursor: pointer;
  }
  @media (max-width: 769px) {
    .shopPreviewDescriptionContainer {
      flex-direction: column;
      padding-left: 16px;
      padding-right: 16px;
      margin-bottom: 16px;
      align-items: flex-start;
      .shortDescription {
        width: 80%;
        font-size: 32px;
        line-height: 1.25 !important;
      }
      .longDescription {
        width: 80%;
        font-size: 14px;
        line-height: 1.25;
        text-align: start;
      }
    }
    .productListContainer {
      padding-left: 16px;
      padding-right: 16px;
      margin-bottom: 20px;
      .productContainer {
        margin-bottom: 40px;
        width: 100%;
        .productImage {
          border: 1px solid var(--grey);
        }
      }
    }
  }
`;
export default Wrapper;
