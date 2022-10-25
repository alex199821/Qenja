import styled from "styled-components";

const Wrapper = styled.section`
  border-top: 1px solid white;
  .singleProductContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .relatedProductsContainer {
    margin-top: 30px;
    margin-bottom: 30px;
    h4 {
      display: flex;
      font-size: 24px;
      font-family: "Inter", sans-serif;
      margin-bottom: 5px;
      padding-left: 32px;
      padding-right: 32px;
      color: var(--white);
      font-weight: 600;
    }
    .relatedProductsList {
      display: flex;
      flex-wrap: wrap;
      padding-left: 32px;
      padding-right: 32px;
      margin-top: 30px;
      margin-bottom: 50px;
      justify-content: space-between;
      row-gap: 1.5vw;
    }
  }
  @media (max-width: 769px) {
    border-top: 0;
    .singleProductContainer {
      padding-top: 0px;
      padding-bottom: 0px;
      flex-direction: column;
      margin-bottom: 35px;
    }
    .hideOnMobile {
      display: none;
    }
    .relatedProductsContainer {
      h4 {
        padding-left: 16px;
        padding-right: 16px;
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 15px;
      }
      .relatedProductsList {
        padding-left: 0px;
        padding-right: 0px;
        row-gap: 0rem;
        flex-direction: column;
        margin-top: 0px;
        margin-bottom: 0px;
      }
    }
  }
`;
export default Wrapper;
